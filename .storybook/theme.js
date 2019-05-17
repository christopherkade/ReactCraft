import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#3A5370', // Blue from the logo
  colorSecondary: '#EDC209', // Yellow from the logo

  // UI
  appBg: '#111C20',
  appContentBg: 'white',
  appBorderColor: '#EDC209',
  appBorderRadius: 4,

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#EDC209',
  barSelectedColor: '#EDC209',
  barBg: '#111C20',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'ReactCraft',
  brandUrl: 'https://github.com/christopherkade/ReactCraft',
  brandImage: 'https://user-images.githubusercontent.com/15229355/57931162-24e7d700-78b8-11e9-9379-a8794294e55e.png',
});
