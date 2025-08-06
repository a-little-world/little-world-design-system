// For web environments, we export paths and family names
export const fontPaths = {
  SignikaNegative: './fonts/SignikaNegative-Variable.ttf',
  SignikaNegativeBold: './fonts/SignikaNegative-Bold.ttf',
  WorkSans: './fonts/WorkSans-Bold.ttf',
};

export const fontFamilies = {
  SignikaNegative: 'Signika Negative',
  SignikaNegativeBold: 'Signika Negative Bold',
  WorkSans: 'Work Sans',
};

// For native environments that can handle binary imports
let fontFiles: any;

try {
  // This will work in React Native but fail silently in web environments
  const SignikaNegative = require('./SignikaNegative-Variable.ttf');
  const SignikaNegativeBold = require('./SignikaNegative-Bold.ttf');
  const WorkSans = require('./WorkSans-Bold.ttf');

  fontFiles = {
    SignikaNegative,
    SignikaNegativeBold,
    WorkSans,
  };
} catch (error) {
  // In web environments, fontFiles will remain undefined
  // Native apps should check if fontFiles exists before using
}

export { fontFiles };
