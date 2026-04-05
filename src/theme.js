// theme.js
// This file exports a set of color themes for easy switching in a SPA.

export const themes = {
  darkPurpleTeal: {
    '--primary-bg': '#18122B',
    '--secondary-bg': '#393053',
    '--accent': '#A3FFD6',
    '--accent-bg': '#5B8FB9',
    '--text-main': '#F7F7F7',
    '--text-secondary': '#B8B8D1',
    '--card-bg': '#23203A',
    '--navbar-bg': '#23203A',
    '--navbar-accent': '#A3FFD6',
    '--hero-bg': 'linear-gradient(135deg, #18122B 0%, #393053 100%)',
    '--shadow': '0 4px 32px 0 rgba(0,0,0,0.18)'
  },
  // Add more themes here as needed
};

export function applyTheme(theme) {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
