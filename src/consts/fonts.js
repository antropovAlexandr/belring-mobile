const font = (fontFamily, fontWeight) => ({ fontFamily, fontWeight });

export const fonts = {
  DEFAULT_NORMAL: font('sans-serif', 'normal'),
  DEFAULT_LIGHT: font('sans-serif-light', 'normal'),
  DEFAULT_MEDIUM: font('sans-serif-medium', 'normal'),
  DEFAULT_SEMIBOLD: font('sans-serif-light', 'bold'),
  DEFAULT_BOLD: font('sans-serif', 'bold'),

  LATO_NORMAL: font('Lato-Regular', 'normal'),
  LATO_LIGHT: font('Lato-Light', 'normal'),
  LATO_MEDIUM: font('Lato-Medium', 'normal'),
  LATO_SEMIBOLD: font('Lato-Semibold', 'normal'),
  LATO_BOLD: font('Lato-Bold', 'normal'),
};
