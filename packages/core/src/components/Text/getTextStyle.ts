import TextTypes from './TextTypes';
import { TextStyle } from './types';

export const getTextStyle = (type: keyof typeof TextTypes): TextStyle => {
  switch (type) {
    case TextTypes.Body1:
      return { 
        fontSize: 2,
        desktopFontSize: 2.5,
        styleType: 'body'
      };
    case TextTypes.Body2:
      return { 
        fontSize: 1.75,
        desktopFontSize: 2,
        styleType: 'body'
      };
    case TextTypes.Body3:
      return { 
        fontSize: 1.5,
        desktopFontSize: 1.5,
        styleType: 'body'
      };
    case TextTypes.Body4:
      return { 
        fontSize: 1.25,
        styleType: 'body'
      };
    case TextTypes.Body5:
      return { 
        fontSize: 1,
        styleType: 'body'
      };
    case TextTypes.Body6:
      return { 
        fontSize: 0.8725,
        styleType: 'body'
      };
    case TextTypes.Body7:
      return { 
        fontSize: 0.75,
        styleType: 'body'
      };
    case TextTypes.Heading1:
      return { 
        fontSize: 4,
        desktopFontSize: 5,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    case TextTypes.Heading2:
      return { 
        fontSize: 3.5,
        desktopFontSize: 4,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    case TextTypes.Heading3:
      return { 
        fontSize: 2.5,
        desktopFontSize: 3,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    case TextTypes.Heading4:
      return { 
        fontSize: 2,
        desktopFontSize: 2,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    case TextTypes.Heading5:
      return { 
        fontSize: 1.5,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    case TextTypes.Heading6:
      return { 
        fontSize: 1,
        fontWeight: 'bold',
        styleType: 'heading'
      };
    default:
      return { 
        fontSize: 1,
        styleType: 'body'
      };
  }
}; 