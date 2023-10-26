export const colors = {
  // Primary colors
  primary: '#007bff',
  primaryLight: '#9ad9ff',
  primaryDark: '#0062cc',

  // Secondary colors
  secondary: '#6c757d',
  secondaryLight: '#b8c1d1',
  secondaryDark: '#5a6269',

  // Success colors
  success: '#28a745',
  successLight: '#a5d6a7',
  successDark: '#1e7e34',

  // Danger colors
  danger: '#dc3545',
  dangerLight: '#f8d7da',
  dangerDark: '#a71d2a',

  // Warning colors
  warning: '#ffc107',
  warningLight: '#fff8e1',
  warningDark: '#c0a16b',

  // Info colors
  info: '#17a2b8',
  infoLight: '#9ae6f1',
  infoDark: '#0f7894',

  // Text and background colors
  text: '#212529',
  background: '#FFFFFFB3',

  // Border color
  border: '#e2e8f0',

  // Additional colors
  lightGray: '#f7f7f7',
  mediumGray: '#dddddd',
  darkGray: '#999999',
};
export const fonts = {
  TextBlack: 'Inter-Black',
  TextMedium: 'Inter-Medium',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  light: 'Inter-Light    ',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold.',
  thin: 'Inter-Thin',
};

export const getFontFamily = (baseFont = 'Inter', weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-ExtraLight`;
    case '300':
      return `${baseFont}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case '500':
      return `${baseFont}-Medium`;
    case '600':
      return `${baseFont}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
