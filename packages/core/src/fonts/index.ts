// For web environments, we export paths and family names
export const fontPaths = {
  SignikaNegative: './fonts/SignikaNegative-Variable.ttf',
  SignikaNegativeBold: './fonts/SignikaNegative-Bold.ttf',
  DMSans: './fonts/DMSans-Variable.ttf',
};

export const fontFamilies = {
  SignikaNegative: 'Signika Negative',
  SignikaNegativeBold: 'Signika Negative Bold',
  DMSans: 'DM Sans',
};

// For native environments that can handle binary imports
let fontFiles: any;

try {
  // This will work in React Native but fail silently in web environments
  const SignikaNegative = require('./SignikaNegative-Variable.ttf');
  const SignikaNegativeBold = require('./SignikaNegative-Bold.ttf');
  const DMSans = require('./DMSans-Variable.ttf');

  fontFiles = {
    [fontFamilies.SignikaNegative]: SignikaNegative,
    [fontFamilies.SignikaNegativeBold]: SignikaNegativeBold,
    [fontFamilies.DMSans]: DMSans,
  };
} catch {
  // In web environments, fontFiles will remain undefined
  // Native apps should check if fontFiles exists before using
}

export { fontFiles };
