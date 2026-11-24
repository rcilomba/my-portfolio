module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#081510', surface: '#10251C', elevated: '#19382B',
        accent: '#4ADE80', ink: '#F1F5F2', subdued: '#A3B8AC', line: '#284337',
      },
      fontFamily: {
        display: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
