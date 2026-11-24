"""Build a public CV from reviewed text. The private source PDF is never embedded."""

from pathlib import Path

from pypdf import PdfWriter
from pypdf.generic import DecodedStreamObject, DictionaryObject, NameObject


OUT = Path(__file__).resolve().parents[1] / "public" / "cv" / "ramadan-cilomba-cv.pdf"
PAGE_WIDTH, PAGE_HEIGHT = 595, 842  # A4, in points
LEFT, RIGHT = 48, 547
GREEN = (0.07, 0.27, 0.18)
TEXT = (0.10, 0.16, 0.13)
MUTED = (0.34, 0.40, 0.36)
RULE = (0.76, 0.81, 0.77)


def pdf_string(value):
    """Escape a string for a PDF literal using the standard WinAnsi font encoding."""
    escaped = []
    for byte in value.encode("cp1252", errors="replace"):
        if byte in (40, 41, 92):
            escaped.append("\\" + chr(byte))
        elif 32 <= byte <= 126:
            escaped.append(chr(byte))
        else:
            escaped.append(f"\\{byte:03o}")
    return "(" + "".join(escaped) + ")"


def approximate_width(value, size):
    """Conservative Helvetica width estimate to keep text inside the page."""
    narrow = "ilI.,:;!|'` "
    wide = "MW@%"
    return sum((0.27 if c in narrow else 0.9 if c in wide else 0.65 if c.isupper() else 0.54) * size for c in value)


def wrap(value, width, size):
    lines = []
    current = ""
    for word in value.split():
        candidate = f"{current} {word}" if current else word
        if current and approximate_width(candidate, size) > width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


writer = PdfWriter()
page = writer.add_blank_page(width=PAGE_WIDTH, height=PAGE_HEIGHT)
regular = writer._add_object(DictionaryObject({
    NameObject("/Type"): NameObject("/Font"),
    NameObject("/Subtype"): NameObject("/Type1"),
    NameObject("/BaseFont"): NameObject("/Helvetica"),
    NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
}))
bold = writer._add_object(DictionaryObject({
    NameObject("/Type"): NameObject("/Font"),
    NameObject("/Subtype"): NameObject("/Type1"),
    NameObject("/BaseFont"): NameObject("/Helvetica-Bold"),
    NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
}))
page[NameObject("/Resources")] = DictionaryObject({
    NameObject("/Font"): DictionaryObject({NameObject("/R"): regular, NameObject("/B"): bold})
})
commands = []
y = 794


def text(value, x, baseline, size=9, font="R", color=TEXT):
    red, green, blue = color
    commands.append(
        f"q {red:.3f} {green:.3f} {blue:.3f} rg BT /{font} {size:.2f} Tf "
        f"1 0 0 1 {x:.2f} {baseline:.2f} Tm {pdf_string(value)} Tj ET Q"
    )


def rule(baseline):
    red, green, blue = RULE
    commands.append(f"q {red:.3f} {green:.3f} {blue:.3f} RG 0.6 w {LEFT} {baseline:.2f} m {RIGHT} {baseline:.2f} l S Q")


def paragraph(value, indent=0, size=9, leading=12.3, color=TEXT):
    global y
    for line in wrap(value, RIGHT - LEFT - indent, size):
        text(line, LEFT + indent, y, size=size, color=color)
        y -= leading


def section(title):
    global y
    y -= 9
    text(title.upper(), LEFT, y, size=9.3, font="B", color=GREEN)
    rule(y - 6)
    y -= 21


def entry(title, date, description):
    global y
    text(title, LEFT, y, size=9.7, font="B")
    text(date, RIGHT - approximate_width(date, 8.5), y + 0.4, size=8.5, color=MUTED)
    y -= 14
    paragraph(description, size=8.8, leading=11.7)
    y -= 5


text("Ramadan Cilomba", LEFT, y, size=27, font="B", color=GREEN)
y -= 24
text("Technical professional with experience in frontend development, CMS and technical support", LEFT, y, size=11, color=TEXT)
y -= 21
text("Copenhagen, Denmark  |  rcilomba@outlook.com", LEFT, y, size=8.7, color=MUTED)
y -= 15
text("github.com/rcilomba  |  linkedin.com/in/ramadan-cilomba", LEFT, y, size=8.7, color=MUTED)
rule(y - 12)
y -= 28

section("Profile")
paragraph(
    "Technical professional who enjoys understanding how systems work together and identifying the root cause of a problem rather than applying a quick fix. Comfortable learning new tools and workflows independently and communicating clearly with technical and non-technical colleagues.",
    size=9.1,
    leading=12.5,
)

section("Skills")
skills = [
    ("Frontend", "HTML5, CSS3, JavaScript, React, Next.js, TypeScript, WordPress"),
    ("Data & integrations", "REST APIs, JSON, SQL, CMS, SEO, WCAG"),
    ("Systems", "DNS, hosting, Active Directory, identity and access management"),
    ("Tools", "Git, Azure DevOps, SPFx, ticketing systems"),
]
for label, detail in skills:
    text(label + ":", LEFT, y, size=8.8, font="B")
    text(detail, LEFT + 106, y, size=8.7)
    y -= 13.5

section("Experience")
entry(
    "Web & CMS Assistant | Slow Food Denmark", "2026 - Present",
    "Maintain and update the WordPress website, including content, layouts and cookie management; create pages to organisational needs and brand guidelines while improving usability.",
)
entry(
    "Contract Frontend Developer", "2023 - Present",
    "Develop responsive web and e-commerce solutions with Next.js, React, TypeScript, WordPress and PrestaShop. Manage client work from requirements through delivery, including integrations, SEO, accessibility, QA and communication.",
)
entry(
    "Technical Support | GN Group", "2024 - 2025",
    "Diagnosed hardware, firmware and connectivity issues through structured root-cause analysis; documented recurring patterns and contributed to improved support processes.",
)
entry(
    "Developer Intern | Fellowmind", "2023",
    "Built and customised SharePoint Framework (SPFx) interfaces in an agile team, from implementation through quality assurance, alongside senior developers.",
)
entry(
    "IT Assistant (part-time) | Fellowmind", "2022 - 2023",
    "Administered Active Directory, user accounts, groups and permissions; documented IT procedures and standardised team workflows.",
)
entry(
    "Technical Support Engineer | Siteimprove", "2021 - 2022",
    "Analysed accessibility, SEO and performance data for enterprise clients and helped customers improve websites using WCAG guidance.",
)
entry(
    "Technical Support Specialist | one.com", "2017 - 2020",
    "Resolved hosting, DNS and WordPress support cases, maintained documentation and guided customers through installation and troubleshooting.",
)

section("Selected projects")
entry(
    "Drawlab | Next.js, React, TypeScript", "",
    "Developed a responsive website with reusable components and optimised structure and performance through component refactoring.",
)
entry(
    "Dankød Engros | WordPress", "",
    "Developed a WordPress website focused on product presentation and navigation, with SEO and performance improvements.",
)

section("Education")
for item in [
    "Software Development | Medieinstitutet | 2025 - Present",
    "Software Testing (course) | Medieinstitutet | 2025",
    "Web Development | Roskilde Tekniske Skole/NEXT | 2022 - 2023",
]:
    text(item, LEFT, y, size=8.8)
    y -= 12.5
text("Languages: Swedish (native), Danish, English and French (fluent)", LEFT, y, size=8.7, color=MUTED)

if y < 42:
    raise RuntimeError(f"CV content extends too low on the page: {y:.1f} pt")

stream = DecodedStreamObject()
stream.set_data("\n".join(commands).encode("ascii"))
page[NameObject("/Contents")] = writer._add_object(stream)
writer.add_metadata({"/Title": "Ramadan Cilomba - CV", "/Author": "Ramadan Cilomba"})
OUT.parent.mkdir(parents=True, exist_ok=True)
with OUT.open("wb") as output:
    writer.write(output)
print(f"Created {OUT.name} ({OUT.stat().st_size} bytes), last baseline {y:.1f} pt")
