const theme = Object.freeze({
  colors: {
    primary: '#fff',
    primaryBg: '#F8F9FA',
    secondaryBg: 'rgb(113, 181, 249)',
    primaryText: '#2D3748',
    secondaryText: '#A0AEC0',
    accent: '#4FD1C5',
    inputBorder: '#e2e8f0',
  },
  duration: '250ms',
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

Object.freeze(theme.colors);

export { theme };
