import React, { useMemo as useMemo$1, useRef as useRef$1, useEffect as useEffect$1, forwardRef as forwardRef$1, useState as useState$1, createContext as createContext$1, useCallback as useCallback$1 } from 'react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { tokens, GradientTypes, GradientVariations, appointmentIcon, archiveIcon, arrowLeftIcon, attachmentIcon, bellIcon, calendarIcon, callIncomingIcon, callOutgoingIcon, cameraIcon, checkIcon, chevronDownIcon, chevronLeftIcon, chevronRightIcon, clockIcon, closeIcon, dashboardIcon, dotsIcon, downloadIcon, exclamationIcon, eyeClosedIcon, eyeOpenIcon, facebookIcon, fullScreenExitIcon, fullScreenIcon, githubIcon, groupChatIcon, heartIcon, imageIcon, imageSearchIcon, inclusiveIcon, infoIcon, instagramIcon, linkedinIcon, logoutIcon, logoIcon, menuIcon, messageIcon, messageWithQuestionIcon, micIcon, moonIcon, pencilIcon, phoneIcon, phoneSlashIcon, plusIcon, profileIcon, profileChatIcon, puzzleIcon, questionIcon, sendIcon, settingsIcon, stackIcon, starIcon, sunIcon, swapIcon, telegramIcon, tickDoubleIcon, tickIcon, tiktokIcon, translatorIcon, trashIcon, twitterIcon, videoIcon, whatsappIcon, accountIcon, getTextStyle, TextTypes, LoadingDimensions, LoadingSizes, ButtonAppearance, BUTTON_DIMENSIONS, ButtonVariations, CIRCLE_DIMENSIONS, ButtonSizes, CardDimensions, InputHeight, friendshipIllustration, groupHandsIllustration, keyIllustration, livingRoomIllustration, laptopWithPhoneIllustration, manOnRocketIllustration, paperPlaneIllustration, peopleTogetherIllustration, questionMarksIllustration, raisingMoneyIllustration, swirlyLinesThickIllustration, swirlyLinesThinIllustration, teacherIllustration, timeFlexibleIllustration, unmatchedIllustration, womanOnRocketIllustration, brokenChainIllustration, PopoverSizes, calculateProgress, TagSizes, TagAppearance, InputWidth, ThemeVariants, defaultThemeVariant } from '@a-little-world/little-world-design-system-core';
import { View, Text as Text$1, StyleSheet, Animated, Easing, Pressable, ScrollView, TouchableOpacity, Linking, TextInput as TextInput$1 } from 'react-native';
import { useTheme, css, ThemeProvider } from 'styled-components/native';
import Svg, { Defs, LinearGradient, Stop, Ellipse, Polyline, Polygon, Line, Rect, Circle, ClipPath, G, Path } from 'react-native-svg';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import { LinearGradient as LinearGradient$1 } from 'expo-linear-gradient';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu';
import { useNavigation } from '@react-navigation/native';
import * as PopoverPrimitive from '@rn-primitives/popover';
import * as ProgressPrimitive from '@rn-primitives/progress';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import * as SeparatorPrimitive from '@rn-primitives/separator';

const getCircleStyles = ({
  theme,
  backgroundColor,
  borderColor
}) => ({
  backgroundColor: backgroundColor || theme.color.surface.secondary,
  borderWidth: 2,
  borderColor: borderColor || theme.color.border.contrast,
  borderRadius: theme.radius.full,
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing.xxsmall
});
const getLabelStyles$1 = ({
  top
}) => ({
  position: "relative",
  marginTop: top
});
const ImageLabel = ({
  children,
  top
}) => jsx(Text$1, {
  accessible: true,
  accessibilityLabel: children,
  style: getLabelStyles$1({
    top
  }),
  children: children
});
const Icon = ({
  backgroundColor,
  borderColor,
  children,
  circular,
  style,
  label,
  labelVisible,
  labelTop = tokens.spacing.xxlarge
}) => {
  const theme = useTheme();
  return jsxs(Fragment, {
    children: [circular ? jsx(View, {
      style: [getCircleStyles({
        theme,
        backgroundColor,
        borderColor
      }), style],
      children: children
    }) : jsx(View, {
      style: style,
      children: children
    }), labelVisible && jsx(ImageLabel, {
      top: labelTop,
      children: label
    })]
  });
};

const IconGradient = ({
  id,
  variation,
  type = GradientTypes.v1
}) => {
  if (type === GradientTypes.v1) return jsx(Defs, {
    children: jsxs(LinearGradient, {
      id: `gradient${id}`,
      x1: "1.84595",
      y1: "16.9964",
      x2: "34.8008",
      y2: "16.9964",
      gradientUnits: "userSpaceOnUse",
      children: [jsx(Stop, {
        stopColor: GradientVariations[variation][0]
      }), jsx(Stop, {
        offset: "1",
        stopColor: GradientVariations[variation][1]
      })]
    })
  });
  if (type === GradientTypes.v2) return jsx(Defs, {
    children: jsxs(LinearGradient, {
      id: `gradient${id}`,
      x1: "27.9721",
      y1: "99.877",
      x2: "116.893",
      y2: "99.877",
      gradientUnits: "userSpaceOnUse",
      children: [jsx(Stop, {
        stopColor: GradientVariations[variation][0]
      }), jsx(Stop, {
        offset: "1",
        stopColor: GradientVariations[variation][1]
      })]
    })
  });
  if (type === GradientTypes.v3) return jsx(Defs, {
    children: jsxs(LinearGradient, {
      id: `gradient${id}`,
      x1: "8.6001",
      y1: "94.48",
      x2: "186.19",
      y2: "94.48",
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(1, 0, 0, 1, 160.535599, 138.286461)",
      children: [jsx(Stop, {
        stopColor: GradientVariations[variation][0]
      }), jsx(Stop, {
        offset: "0.18",
        stopColor: GradientVariations[variation][2]
      }), jsx(Stop, {
        offset: "0.55",
        stopColor: GradientVariations[variation][3]
      }), jsx(Stop, {
        offset: "0.83",
        stopColor: GradientVariations[variation][4]
      }), jsx(Stop, {
        offset: "1",
        stopColor: GradientVariations[variation][5]
      })]
    })
  });
  if (type === GradientTypes.v4) return jsxs(LinearGradient, {
    id: `gradient${id}`,
    x1: "0%",
    y1: "50%",
    x2: "100%",
    y2: "50%",
    gradientUnits: "userSpaceOnUse",
    children: [jsx(Stop, {
      offset: "0%",
      stopColor: GradientVariations[variation][0]
    }), jsx(Stop, {
      offset: "100%",
      stopColor: GradientVariations[variation][1]
    })]
  });
  return null;
};

// Helper function to generate unique keys
const generateUniqueKey = (element, index) => {
  return `${element.type}-${index}-${Math.random().toString(36).substring(2, 11)}`;
};
// Helper function to safely render children, filtering out null values
const renderChildren = (children, options, parentIndex) => {
  return children.map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`)).filter(Boolean); // Filter out null elements and cast to ReactElement[]
};
// Renders SVG elements recursively
const renderSvgElement = (element, options, index) => {
  const {
    gradient,
    gradientId,
    color
  } = options;
  // Get all attributes and override fill for path elements if needed
  const attrs = Object.assign({}, element.attributes);
  // Handle color attributes for SVG elements based on the colorAttribute property
  if (element.colorAttribute && element.colorAttribute !== "none") {
    if (gradient) {
      attrs[element.colorAttribute] = `url(#gradient${gradientId})`;
    } else if (color) {
      attrs[element.colorAttribute] = color;
    }
  } else if (element.type === "path" && color) {
    attrs.fill = color;
  }
  // Add unique key attribute
  const key = generateUniqueKey(element, index);
  switch (element.type) {
    case "path":
      return jsx(Path, Object.assign({}, attrs), key);
    case "g":
      return jsx(G, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "defs":
      return jsx(Defs, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "linearGradient":
      return jsx(LinearGradient, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "stop":
      return jsx(Stop, Object.assign({}, attrs), key);
    case "clipPath":
      return jsx(ClipPath, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "circle":
      return jsx(Circle, Object.assign({}, attrs), key);
    case "rect":
      return jsx(Rect, Object.assign({}, attrs), key);
    case "line":
      return jsx(Line, Object.assign({}, attrs), key);
    case "polygon":
      return jsx(Polygon, Object.assign({}, attrs), key);
    case "polyline":
      return jsx(Polyline, Object.assign({}, attrs), key);
    case "ellipse":
      return jsx(Ellipse, Object.assign({}, attrs), key);
    default:
      console.warn(`Unsupported SVG element type: ${element.type}`);
      return null;
  }
};
const createReactNativeSvg = (svgData, options) => {
  const {
    label,
    width,
    height,
    gradient,
    gradientId,
    style
  } = options;
  return jsx(View, {
    style: style,
    children: jsxs(Svg, {
      accessible: true,
      accessibilityLabel: label,
      width: width,
      height: height,
      viewBox: svgData.viewBox,
      fill: "none",
      children: [gradient && jsx(IconGradient, {
        variation: gradient,
        id: gradientId
      }), svgData.elements.map((element, index) => renderSvgElement(element, options, index))]
    })
  }, `${Math.random().toString(36).substring(2, 11)}`);
};

const createIconComponent = ({
  name,
  svgData
}) => {
  const gradientId = `${name} gradientId`;
  const Component = ({
    height = 24,
    width = 24,
    style,
    color,
    backgroundColor,
    gradient,
    borderColor,
    circular,
    label,
    labelVisible
  }) => {
    // Create the transform options for React Native SVG
    const svgOptions = {
      width,
      height,
      style,
      label,
      color,
      gradient,
      gradientId
    };
    return jsx(Icon, {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      circular: circular,
      style: style,
      color: color,
      label: label,
      labelVisible: labelVisible,
      children: createReactNativeSvg(svgData, svgOptions)
    });
  };
  Component.displayName = `${name}Icon`;
  return Component;
};

const AccountIcon = createIconComponent({
  name: "Account",
  svgData: accountIcon
});
const AppointmentIcon = createIconComponent({
  name: "Appointment",
  svgData: appointmentIcon
});
const ArchiveIcon = createIconComponent({
  name: "Archive",
  svgData: archiveIcon
});
const ArrowLeftIcon = createIconComponent({
  name: "ArrowLeft",
  svgData: arrowLeftIcon
});
const AttachmentIcon = createIconComponent({
  name: "Attachment",
  svgData: attachmentIcon
});
const BellIcon = createIconComponent({
  name: "Bell",
  svgData: bellIcon
});
const CalendarIcon = createIconComponent({
  name: "Calendar",
  svgData: calendarIcon
});
const CallIncomingIcon = createIconComponent({
  name: "CallIncoming",
  svgData: callIncomingIcon
});
const CallOutgoingIcon = createIconComponent({
  name: "CallOutgoing",
  svgData: callOutgoingIcon
});
const CameraIcon = createIconComponent({
  name: "Camera",
  svgData: cameraIcon
});
const CheckIcon = createIconComponent({
  name: "Check",
  svgData: checkIcon
});
const ChevronDownIcon = createIconComponent({
  name: "ChevronDown",
  svgData: chevronDownIcon
});
const ChevronLeftIcon = createIconComponent({
  name: "ChevronLeft",
  svgData: chevronLeftIcon
});
const ChevronRightIcon = createIconComponent({
  name: "ChevronRight",
  svgData: chevronRightIcon
});
const ClockIcon = createIconComponent({
  name: "Clock",
  svgData: clockIcon
});
const CloseIcon = createIconComponent({
  name: "Close",
  svgData: closeIcon
});
const DashboardIcon = createIconComponent({
  name: "Dashboard",
  svgData: dashboardIcon
});
const DotsIcon = createIconComponent({
  name: "Dots",
  svgData: dotsIcon
});
const DownloadIcon = createIconComponent({
  name: "Download",
  svgData: downloadIcon
});
const ExclamationIcon = createIconComponent({
  name: "Exclamation",
  svgData: exclamationIcon
});
const EyeClosedIcon = createIconComponent({
  name: "EyeClosed",
  svgData: eyeClosedIcon
});
const EyeOpenIcon = createIconComponent({
  name: "EyeOpen",
  svgData: eyeOpenIcon
});
const FacebookIcon = createIconComponent({
  name: "Facebook",
  svgData: facebookIcon
});
const FullScreenExitIcon = createIconComponent({
  name: "FullScreenExit",
  svgData: fullScreenExitIcon
});
const FullScreenIcon = createIconComponent({
  name: "FullScreen",
  svgData: fullScreenIcon
});
const GithubIcon = createIconComponent({
  name: "Github",
  svgData: githubIcon
});
const GroupChatIcon = createIconComponent({
  name: "GroupChat",
  svgData: groupChatIcon
});
const HeartIcon = createIconComponent({
  name: "Heart",
  svgData: heartIcon
});
const ImageIcon = createIconComponent({
  name: "Image",
  svgData: imageIcon
});
const ImageSearchIcon = createIconComponent({
  name: "ImageSearch",
  svgData: imageSearchIcon
});
const InclusiveIcon = createIconComponent({
  name: "Inclusive",
  svgData: inclusiveIcon
});
const InfoIcon = createIconComponent({
  name: "Info",
  svgData: infoIcon
});
const InstagramIcon = createIconComponent({
  name: "Instagram",
  svgData: instagramIcon
});
const LinkedInIcon = createIconComponent({
  name: "LinkedIn",
  svgData: linkedinIcon
});
const LogoutIcon = createIconComponent({
  name: "Logout",
  svgData: logoutIcon
});
const Logo = createIconComponent({
  name: "Logo",
  svgData: logoIcon
});
const MenuIcon = createIconComponent({
  name: "Menu",
  svgData: menuIcon
});
const MessageIcon = createIconComponent({
  name: "Message",
  svgData: messageIcon
});
const MessageWithQuestionIcon = createIconComponent({
  name: "MessageWithQuestion",
  svgData: messageWithQuestionIcon
});
const MicIcon = createIconComponent({
  name: "Mic",
  svgData: micIcon
});
const MoonIcon = createIconComponent({
  name: "Moon",
  svgData: moonIcon
});
const PencilIcon = createIconComponent({
  name: "Pencil",
  svgData: pencilIcon
});
const PhoneIcon = createIconComponent({
  name: "Phone",
  svgData: phoneIcon
});
const PhoneSlashIcon = createIconComponent({
  name: "PhoneSlash",
  svgData: phoneSlashIcon
});
const PlusIcon = createIconComponent({
  name: "Plus",
  svgData: plusIcon
});
const ProfileIcon = createIconComponent({
  name: "Profile",
  svgData: profileIcon
});
const ProfileChatIcon = createIconComponent({
  name: "ProfileChat",
  svgData: profileChatIcon
});
const PuzzleIcon = createIconComponent({
  name: "Puzzle",
  svgData: puzzleIcon
});
const QuestionIcon = createIconComponent({
  name: "Question",
  svgData: questionIcon
});
const SendIcon = createIconComponent({
  name: "Send",
  svgData: sendIcon
});
const SettingsIcon = createIconComponent({
  name: "Settings",
  svgData: settingsIcon
});
const StackIcon = createIconComponent({
  name: "Stack",
  svgData: stackIcon
});
const StarIcon = createIconComponent({
  name: "Star",
  svgData: starIcon
});
const SunIcon = createIconComponent({
  name: "Sun",
  svgData: sunIcon
});
const SwapIcon = createIconComponent({
  name: "Swap",
  svgData: swapIcon
});
const TelegramIcon = createIconComponent({
  name: "Telegram",
  svgData: telegramIcon
});
const TickDoubleIcon = createIconComponent({
  name: "TickDouble",
  svgData: tickDoubleIcon
});
const TickIcon = createIconComponent({
  name: "Tick",
  svgData: tickIcon
});
const TiktokIcon = createIconComponent({
  name: "Tiktok",
  svgData: tiktokIcon
});
const TranslatorIcon = createIconComponent({
  name: "Translator",
  svgData: translatorIcon
});
const TrashIcon = createIconComponent({
  name: "Trash",
  svgData: trashIcon
});
const TwitterIcon = createIconComponent({
  name: "Twitter",
  svgData: twitterIcon
});
const VideoIcon = createIconComponent({
  name: "Video",
  svgData: videoIcon
});
const WhatsappIcon = createIconComponent({
  name: "Whatsapp",
  svgData: whatsappIcon
});

const mapCoreStyleToRN = style => ({
  fontSize: style.fontSize * 16,
  // Convert rem to pixels (1rem = 16px)
  fontWeight: style.fontWeight,
  fontFamily: style.styleType === 'body' ? 'SignikaNegative' : 'WorkSans'
});
const Text = ({
  id,
  bold = false,
  center = false,
  children,
  color,
  style,
  type = TextTypes.Body5
}) => {
  const textStyle = Object.assign({
    textAlign: center ? 'center' : 'auto',
    color: color
  }, mapCoreStyleToRN(getTextStyle(type)));
  if (bold) {
    textStyle.fontWeight = 'bold';
  }
  return jsx(Text$1, {
    id: id,
    style: [textStyle, style],
    children: children
  });
};

// export const AccordionRoot = styled(Accordion.Root)`
//   :root {
//     --radix-accordion-content-width: 100%:
//     --radix-collapsible-content-width: 100%;
//   }
// `;
const getAccordionStyles = ({
  theme
}) => StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: theme.radius.xxsmall,
    borderColor: theme.color.border.subtle,
    width: 100
  },
  item: {
    borderBottomWidth: 1,
    borderColor: theme.color.border.subtle,
    margin: 0,
    paddingVertical: theme.spacing.xxsmall,
    paddingHorizontal: theme.spacing.small,
    paddingBottom: 0,
    width: 100
  },
  itemLastChild: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  header: {
    margin: 0,
    width: 100
  },
  content: {
    width: 100,
    backgroundColor: theme.color.surface.tertiary,
    borderRadius: theme.radius.xxsmall,
    padding: theme.spacing.small,
    marginBottom: theme.spacing.small
  },
  trigger: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "none",
    paddingVertical: theme.spacing.xxsmall,
    paddingHorizontal: theme.spacing.small,
    gap: theme.spacing.small,
    width: 100,
    textAlign: "left"
  },
  triggerIcon: {
    flexShrink: 0,
    marginTop: 6
  }
});

const Accordion = ({
  contentStyle,
  headerType,
  headerColor,
  items,
  style
}) => {
  const theme = useTheme();
  const styles = useMemo$1(() => getAccordionStyles({
    theme
  }), [theme]);
  return jsx(AccordionPrimitive.Root, {
    style: [styles.root, style],
    type: "single",
    collapsible: true,
    children: items.map(({
      content,
      header
    }) => jsxs(AccordionPrimitive.Item, {
      value: header,
      style: styles.item,
      children: [jsx(AccordionPrimitive.Header, {
        id: header,
        style: styles.header,
        children: jsxs(AccordionPrimitive.Trigger, {
          style: styles.trigger,
          children: [jsx(Text, {
            type: headerType || TextTypes.Body4,
            color: headerColor,
            children: header
          }), jsx(ChevronDownIcon, {
            label: "accordion toggle icon",
            width: 14,
            height: 14,
            color: headerColor,
            style: styles.triggerIcon
          })]
        })
      }), jsx(AccordionPrimitive.Content, {
        style: [styles.content, contentStyle],
        children: content
      })]
    }, header))
  });
};

const parseGradientString = gradientString => {
  const colors = gradientString.match(/#[a-fA-F0-9]{6}/g) || [];
  if (colors.length < 2) {
    throw new Error('Gradient must have at least 2 colors');
  }
  // Extract angle if present (this is simplified, adjust for your format)
  const angleMatch = gradientString.match(/(\d+\.?\d*)deg/);
  const angle = angleMatch ? parseFloat(angleMatch[1]) : 0;
  // Convert angle to start/end coordinates
  const radians = (angle - 90) * (Math.PI / 180);
  const start = {
    x: 0.5 - Math.cos(radians) / 2,
    y: 0.5 - Math.sin(radians) / 2
  };
  const end = {
    x: 0.5 + Math.cos(radians) / 2,
    y: 0.5 + Math.sin(radians) / 2
  };
  return {
    colors: colors,
    start,
    end
  };
};

const styles = StyleSheet.create({
  fullSize: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
const Gradient = ({
  gradient,
  style,
  children
}) => {
  const {
    colors,
    start,
    end
  } = parseGradientString(gradient);
  return jsx(LinearGradient$1, {
    colors: colors,
    start: start,
    end: end,
    style: [styles.fullSize, style],
    children: children
  });
};

const getLoadingContainerStyles = (align, inline, size) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: align || 'center',
  position: 'relative',
  width: inline ? LoadingDimensions[size || LoadingSizes.Small] : '100%',
  height: '100%',
  minHeight: LoadingDimensions[size || LoadingSizes.Small]
});
const getLoadingElementStyles = (color, size, index) => ({
  position: 'absolute',
  width: LoadingDimensions[size || LoadingSizes.Small],
  height: LoadingDimensions[size || LoadingSizes.Small],
  borderWidth: size === LoadingSizes.Large ? 4 : 2,
  borderColor: color || 'currentColor',
  borderTopColor: 'transparent',
  borderRadius: 9999,
  transform: [{
    rotate: '0deg'
  }]
});

const LOADING_RING_ID = 'loadingRing';
const Loading = ({
  align,
  style,
  color,
  inline = false,
  size = LoadingSizes.Small
}) => {
  const spinValue = useRef$1(new Animated.Value(0)).current;
  useEffect$1(() => {
    const startAnimation = () => {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1400,
        easing: Easing.linear,
        useNativeDriver: false
      }).start(() => {
        spinValue.setValue(0);
        startAnimation();
      });
    };
    startAnimation();
    return () => {
      spinValue.stopAnimation();
    };
  }, []);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  return jsx(View, {
    style: [getLoadingContainerStyles(align, inline, size), style],
    testID: LOADING_RING_ID,
    children: [0, 1, 2, 3].map(index => jsx(Animated.View, {
      style: [getLoadingElementStyles(color, size), {
        transform: [{
          rotate: spin
        }]
      }]
    }, index))
  });
};

const getButtonStyles = ({
  appearance,
  color,
  variation,
  size,
  backgroundColor,
  borderColor,
  theme
}) => {
  const baseStyles = Object.assign({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90
  }, variation === ButtonVariations.Basic ? {
    paddingHorizontal: theme.spacing.small,
    // flex: 1,
    height: BUTTON_DIMENSIONS[size].height,
    minWidth: BUTTON_DIMENSIONS[size].minWidth
    // paddingVertical: BUTTON_DIMENSIONS[size].padding.vertical,
  } : {});
  if (variation === ButtonVariations.Circle) {
    return Object.assign(Object.assign(Object.assign({}, baseStyles), CIRCLE_DIMENSIONS[size]), {
      borderRadius: theme.radius.half,
      borderWidth: 1,
      borderColor: borderColor || backgroundColor || theme.color.border.bold,
      backgroundColor: backgroundColor || "transparent"
    });
  }
  if (variation === ButtonVariations.Icon) {
    return Object.assign(Object.assign({}, baseStyles), {
      backgroundColor: backgroundColor || "transparent",
      padding: 0
    });
  }
  if (variation === ButtonVariations.Option) {
    return Object.assign(Object.assign({}, baseStyles), {
      backgroundColor: backgroundColor || theme.color.surface.tertiary,
      borderWidth: 1,
      borderColor: theme.color.border.subtle,
      borderRadius: 15,
      padding: theme.spacing.xsmall,
      gap: theme.spacing.xxxsmall,
      maxWidth: 144,
      minHeight: 69
    });
  }
  if (variation === ButtonVariations.Inline) {
    return Object.assign(Object.assign({}, baseStyles), {
      display: "flex",
      borderWidth: 0,
      borderRadius: 0,
      borderBottomWidth: 1,
      height: "auto",
      width: "auto",
      paddingHorizontal: 0,
      paddingVertical: theme.spacing.xxxxsmall,
      gap: theme.spacing.xxxsmall,
      backgroundColor: "transparent"
    });
  }
  if (appearance === ButtonAppearance.Primary) {
    return Object.assign(Object.assign({}, baseStyles), {
      backgroundColor: backgroundColor || theme.color.surface.primary,
      borderWidth: 0
    });
  }
  return Object.assign(Object.assign({}, baseStyles), {
    backgroundColor: theme.color.surface.primary,
    borderWidth: 2,
    borderColor: color || theme.color.border.bold
  });
};
const gradientStyles = StyleSheet.create({
  fullSize: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
const getButtonTextStyles = ({
  color,
  variation,
  appearance,
  theme
}) => {
  const baseStyles = {
    color: color || theme.color.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700"
  };
  if (variation === ButtonVariations.Option) {
    return Object.assign(Object.assign({}, baseStyles), {
      color: color || theme.color.text.primary,
      fontWeight: "normal"
    });
  }
  if (variation === ButtonVariations.Basic) {
    return Object.assign(Object.assign({}, baseStyles), {
      color: color || appearance === ButtonAppearance.Primary ? theme.color.text.button : theme.color.text.heading
    });
  }
  return baseStyles;
};
css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background: ${({
  $backgroundColor,
  theme
}) => $backgroundColor || theme.color.surface.tertiary};
  border: 1px solid ${({
  theme
}) => theme.color.border.subtle};
  color: ${({
  $color,
  theme
}) => $color || theme.color.text.primary};
  border-radius: 15px;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({
  theme
}) => theme.spacing.xsmall};
  gap: ${({
  theme
}) => theme.spacing.xxxsmall};
  max-width: 144px;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  min-height: 69px;

  &:not(:disabled):hover {
    filter: brightness(95%);
    cursor: pointer;
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 11%),
      0 0 8px 3px rgb(255 255 255 / 15%);
  }

  ${({
  $appearance,
  $backgroundColor,
  $color,
  theme
}) => $appearance === ButtonAppearance.Secondary && css`
      color: ${$color || theme.color.text.button};
      background: ${$backgroundColor || theme.color.surface.primary};
    `}
`;
//     svg {
//       ${ICON_DIMENSIONS}
//     }
//   `;
// }

const Button = /*#__PURE__*/React.forwardRef(({
  appearance = ButtonAppearance.Primary,
  backgroundColor,
  borderColor,
  color,
  children,
  disabled,
  loading,
  onPress,
  size = ButtonSizes.Medium,
  variation = ButtonVariations.Basic,
  style
}, ref) => {
  const theme = useTheme();
  const buttonStyles = getButtonStyles({
    appearance,
    color,
    variation,
    size,
    backgroundColor,
    borderColor,
    theme
  });
  const textStyles = getButtonTextStyles({
    color,
    variation,
    appearance,
    theme
  });
  const hasGradient = appearance === ButtonAppearance.Primary && variation === ButtonVariations.Basic;
  const content = loading ? jsx(Loading, {
    color: textStyles.color
  }) : jsx(Text, {
    style: [textStyles, disabled ? {
      color: theme.color.text.disabled
    } : {}],
    children: children
  });
  return jsxs(Pressable, {
    ref: ref,
    onPress: onPress,
    disabled: disabled || loading,
    style: ({
      pressed
    }) => [buttonStyles, disabled && {
      backgroundColor: theme.color.surface.disabled,
      borderColor: theme.color.border.disabled
    }, pressed && {
      opacity: 0.8
    }, style],
    children: [hasGradient && jsx(Gradient, {
      gradient: theme.color.gradient.orange10,
      style: Object.assign(Object.assign({}, buttonStyles), gradientStyles.fullSize)
    }), content]
  });
});
Button.displayName = "Button";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const getCardStyles = ({
  borderColor,
  height,
  theme,
  width
}) => Object.assign(Object.assign({
  borderRadius: theme.radius.small,
  backgroundColor: theme.color.surface.primary,
  borderWidth: 1,
  borderColor: borderColor || theme.color.border.subtle,
  shadowColor: theme.color.text.primary,
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.05,
  shadowRadius: 25,
  elevation: 2,
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  flexDirection: 'column',
  padding: theme.spacing.small
}, width && {
  width: CardDimensions[width]
}), height && {
  height
});
const getCardHeaderStyles = ({
  theme
}) => ({
  marginBottom: theme.spacing.small
});
const getCardContentStyles = ({
  align,
  gap,
  marginBottom,
  theme
}) => ({
  flexDirection: 'column',
  alignItems: align || 'center',
  gap: gap || theme.spacing.small,
  marginBottom: marginBottom || theme.spacing.small
});
const getCardFooterStyles = ({
  align,
  theme
}) => ({
  flexDirection: 'row',
  marginTop: 'auto',
  width: '100%',
  gap: theme.spacing.small,
  justifyContent: align || 'flex-start'
});

const CardHeader = ({
  children,
  textColor,
  textType
}) => {
  const theme = useTheme();
  return jsx(Text, {
    style: getCardHeaderStyles({
      theme
    }),
    type: textType || TextTypes.Heading4,
    center: true,
    color: textColor,
    children: children
  });
};
const CardContent = ({
  children,
  align,
  gap,
  marginBottom
}) => {
  const theme = useTheme();
  const styles = getCardContentStyles({
    align,
    gap: gap,
    marginBottom: marginBottom,
    theme
  });
  const {
      flexDirection,
      alignItems,
      gap: contentGap,
      marginBottom: contentMarginBottom
    } = styles,
    containerStyle = __rest(styles, ["flexDirection", "alignItems", "gap", "marginBottom"]);
  return jsx(ScrollView, {
    style: containerStyle,
    contentContainerStyle: {
      flexDirection,
      alignItems,
      gap: contentGap,
      marginBottom: contentMarginBottom
    },
    children: children
  });
};
const CardFooter = ({
  children,
  align
}) => {
  const theme = useTheme();
  return jsx(View, {
    style: getCardFooterStyles({
      align,
      theme
    }),
    children: children
  });
};
const Card = ({
  borderColor,
  children,
  style,
  height,
  width
}) => {
  const theme = useTheme();
  return jsx(View, {
    style: [getCardStyles({
      borderColor,
      height: height,
      width,
      theme
    }), style],
    children: children
  });
};

const ITEM_WIDTH$1 = 16;
// export const CheckboxButtonContainer = styled(Checkbox.Root)<{
//   $hasError?: boolean;
// }>`
//   cursor: pointer;
//   padding: ${({ theme }) => theme.spacing.xxsmall};
//   display: flex;
//   align-items: center;
//   border: 1px solid
//     ${({ theme, checked, $hasError }) =>
//       checked
//         ? $hasError
//           ? theme.color.border.error
//           : theme.color.border.selected
//         : theme.color.border.subtle};
//   border-radius: ${({ theme }) => theme.radius.xxsmall};
//   background: ${({ checked, $hasError, theme }) =>
//     checked
//       ? $hasError
//         ? theme.color.surface.error
//         : theme.color.surface.accent
//       : theme.color.surface.secondary};
//   label {
//     cursor: pointer;
//   }
// `;
const getContainerStyles = ({
  theme
}) => StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: theme.spacing.xxxxsmall
  }
});
const getCheckboxStyles = ({
  theme,
  hasError,
  color,
  checked
}) => StyleSheet.create({
  checkbox: Object.assign({
    color: theme.color.text.primary,
    width: ITEM_WIDTH$1,
    height: ITEM_WIDTH$1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.xxsmall,
    borderWidth: 1,
    borderColor: hasError ? theme.color.border.error : theme.color.border.contrast,
    backgroundColor: checked ? color : theme.color.surface.primary
  }, checked && color && {
    backgroundColor: color,
    borderColor: color,
    color: theme.color.text.reversed
  })
});
const indicatorStyles = StyleSheet.create({
  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
// export const StyledLabel = styled(Label)`
//   margin-left: ${({ theme }) => theme.spacing.xxsmall};
// `;

// export const CheckboxButton: React.FC<CheckboxProps> = ({
//   checked,
//   color,
//   error,
//   required = true,
//   id,
//   inputRef,
//   label,
//   onCheckedChange,
//   readOnly,
//   style,
//   value,
//   ...rest
// }) => (
//   <CheckboxButtonContainer
//     ref={inputRef}
//     id={id}
//     checked={checked}
//     onCheckedChange={onCheckedChange}
//     value={value}
//     $hasError={Boolean(error)}
//     {...rest}
//   >
//     <NonInteractiveCheckbox $color={color} checked={checked}>
//       {checked && (
//         <CheckIcon label="check icon" width={10} />
//       )}
//     </NonInteractiveCheckbox>
//     {label && (
//       <StyledLabel htmlFor={id} inline>
//         {label}
//       </StyledLabel>
//     )}
//   </CheckboxButtonContainer>
// );
const Checkbox = _a => {
  var {
      checked,
      color,
      error,
      required = true,
      id,
      // inputRef,
      label,
      onCheckedChange,
      readOnly,
      style
    } = _a,
    // value,
    rest = __rest(_a, ["checked", "color", "error", "required", "id", "label", "onCheckedChange", "readOnly", "style"]);
  const theme = useTheme();
  const checkboxContainerStyle = useMemo$1(() => getContainerStyles({
    theme
  }), [theme]);
  const checkboxstyles = useMemo$1(() => getCheckboxStyles({
    theme,
    hasError: Boolean(error),
    color,
    checked
  }), [theme, error, color, checked]);
  return jsx(View, {
    style: style,
    children: jsx(View, {
      style: checkboxContainerStyle.container,
      children: readOnly ? jsx(View, {
        style: checkboxstyles.checkbox,
        children: checked && jsx(CheckIcon, {
          label: "check icon",
          width: 10
        })
      }) : jsx(CheckboxPrimitive.Root, Object.assign({
        id: id,
        checked: checked,
        onCheckedChange: onCheckedChange,
        style: checkboxstyles.checkbox
      }, rest, {
        children: jsx(CheckboxPrimitive.Indicator, {
          style: indicatorStyles.indicator,
          children: jsx(CheckIcon, {
            label: "check icon",
            width: 10
          })
        })
      }))
    })
  });
};

css`
  border: 1px solid ${({
  theme
}) => theme.color.border.error};
`;
const InputError = ({
  children,
  top,
  bottom,
  right,
  left,
  visible = true,
  textAlign = 'left'
}) => {
  const theme = useTheme();
  if (!visible) return null;
  const containerStyle = {
    position: 'absolute',
    top: top ? Number(top) : undefined,
    bottom: bottom ? Number(bottom) : undefined,
    right: right ? Number(right) : undefined,
    left: left ? Number(left) : undefined
  };
  const textStyle = {
    color: theme.color.text.error,
    textAlign
  };
  return jsx(View, {
    style: containerStyle,
    children: jsx(Text$1, {
      style: textStyle,
      children: children
    })
  });
};

const getLabelStyles = ({
  theme,
  bold,
  inline,
  marginBottom
}) => {
  const baseStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.xxxsmall,
    fontWeight: bold ? "bold" : "normal",
    flexShrink: inline ? 1 : 0,
    marginBottom: marginBottom ? marginBottom : 0
  };
  return baseStyles;
};

const Label = ({
  children,
  style,
  bold,
  inline,
  marginBottom,
  nativeId
}) => {
  const theme = useTheme();
  return jsx(Text$1, {
    style: [getLabelStyles({
      theme,
      bold,
      inline,
      marginBottom
      //toolTipText,
    }), style],
    nativeID: nativeId,
    children: children
  });
};

// import { INPUT_ERROR_CSS } from '../InputError/InputError';
// import { BODY_5_CSS } from '../Text/styles';
const DROPDOWN_MAX_WIDTH = 300;
const getDropdownStyles = ({
  theme,
  maxWidth,
  height,
  hasError
}) => StyleSheet.create({
  wrapper: {
    position: 'relative',
    maxWidth: maxWidth || DROPDOWN_MAX_WIDTH,
    width: '100%'
  },
  trigger: {
    // all: 'unset',
    // boxSizing: 'border-box',
    // display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xxsmall,
    paddingHorizontal: height === InputHeight.Small ? theme.spacing.small : theme.spacing.xsmall,
    lineHeight: 1.25,
    height: height === InputHeight.Small ? 34 : 40,
    gap: theme.spacing.xsmall,
    backgroundColor: theme.color.surface.primary,
    borderRadius: theme.radius.xxxsmall,
    borderWidth: 2,
    borderColor: theme.color.border.subtle,
    width: '100%',
    color: theme.color.text.secondary,
    marginBottom: theme.spacing.xxxxsmall
  },
  triggerWithError: {
    // input error styles
  }
});
// export const SelectTrigger = styled(Select.Trigger)<{
//   $hasError: boolean;
//   $height?: string;
// }>`
//   > span:first-child,
//   > span:first-child p {
//     ${BODY_5_CSS}
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   svg {
//     color: ${({ theme }) => theme.color.text.secondary};
//   }
//   &[data-placeholder] {
//     background-color: ${({ theme }) => theme.color.surface.primary};
//     color: ${({ theme }) => theme.color.text.tertiary};
//     svg {
//       color: ${({ theme }) => theme.color.text.highlight};
//     }
//   }
// `;
// export const SelectValue = styled(Select.Value)`
//   &[data-placeholder] {
//     background-color: ${({ theme }) => theme.color.surface.primary};
//   }
// `;
// export const SelectContent = styled(Select.Content)`
//   overflow: hidden;
//   background-color: ${({ theme }) => theme.color.surface.primary};
//   border-radius: 6px;
//   box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
//     0px 10px 20px -15px rgba(22, 23, 24, 0.2);
//   z-index: 100;
// `;
// export const SelectViewport = styled(Select.Viewport)`
//   padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xxxsmall};
//   max-height: 200px;
//   overflow: scroll;
// `;
// export const SelectIcon = styled(Select.Icon)`
//   display: flex;
// `;
// export const SelectItem = styled(Select.Item)`
//   font-size: 13px;
//   line-height: 1;
//   border-radius: 3px;
//   display: flex;
//   align-items: center;
//   height: 25px;
//   padding: 0 ${({ theme }) => theme.spacing.large} 0 ${({ theme }) => theme.spacing.medium};
//   position: relative;
//   user-select: none;
//   &:disabled {
//     color: gray;
//     pointer-events: none;
//   }
// `;
// export const SelectItemIndicator = styled(Select.ItemIndicator)`
//   position: absolute;
//   left: 0;
//   width: 25px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
// `;

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;
const isValidValue = (value, options) => options.some(option => option.value === value);
const Option = ({
  children,
  value
}) => {
  return jsxs(DropdownMenuPrimitive.Item
  // value={value}
  , {
    children: [jsx(Text, {
      children: children
    }), jsx(DropdownMenuPrimitive.ItemIndicator, {
      children: jsx(CheckIcon, {
        label: "selected item",
        width: 10
      })
    })]
  });
};
const Dropdown = ({
  ariaLabel,
  error,
  cannotError,
  disabled,
  height,
  inputRef,
  label,
  labelTooltip,
  lockedValue,
  maxWidth,
  onValueChange,
  options,
  placeholder,
  required,
  value,
  style
}) => {
  const theme = useTheme();
  const styles = getDropdownStyles({
    theme,
    maxWidth: maxWidth,
    height: height,
    hasError: Boolean(error)
  });
  lockedValue || (value && isValidValue(value, options) ? value : undefined);
  const canError = !lockedValue && !cannotError;
  return jsxs(View, {
    style: [styles.wrapper, style],
    children: [label && jsx(Label, {
      bold: true,
      children: label
    }), jsxs(DropdownMenuPrimitive.Root
    // disabled={disabled || !!lockedValue}
    // onValueChange={onValueChange}
    // required={required}
    // defaultValue={defaultValue}
    , {
      children: [jsx(DropdownMenuPrimitive.Trigger, {
        "aria-label": ariaLabel || label,
        children: !lockedValue && jsx(ChevronDownIcon, {
          width: ARROW_DOWN_WIDTH,
          height: ARROW_DOWN_HEIGHT,
          label: "dropdown icon"
        })
      }), jsx(DropdownMenuPrimitive.Content, {
        children: options.map(option => jsx(Option, {
          value: option.value,
          children: option.label
        }, option.label))
      })]
    }), canError && jsx(InputError, {
      visible: Boolean(error),
      children: error
    })]
  });
};

const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = tokens.spacing.xxlarge
}) => jsxs(View, {
  children: [children, labelVisible && jsx(ImageLabel, {
    top: labelTop,
    children: label
  })]
});

const createIllustrationComponent = ({
  name,
  svgData
}) => {
  const Component = ({
    height = 24,
    width = 24,
    style,
    color,
    label,
    labelVisible
  }) => {
    // Create the transform options for React Native SVG
    const svgOptions = {
      width,
      height,
      style,
      color,
      label
    };
    return jsx(Illustration, {
      label: label,
      labelVisible: labelVisible,
      children: createReactNativeSvg(svgData, svgOptions)
    });
  };
  Component.displayName = `${name}Image`;
  return Component;
};

const BrokenChainImage = createIllustrationComponent({
  name: "BrokenChain",
  svgData: brokenChainIllustration
});
const FriendshipImage = createIllustrationComponent({
  name: "Friendship",
  svgData: friendshipIllustration
});
const GroupHandsImage = createIllustrationComponent({
  name: "GroupHands",
  svgData: groupHandsIllustration
});
const KeyImage = createIllustrationComponent({
  name: "Key",
  svgData: keyIllustration
});
const LivingRoomImage = createIllustrationComponent({
  name: "LivingRoom",
  svgData: livingRoomIllustration
});
const LaptopWithPhoneImage = createIllustrationComponent({
  name: "LaptopWithPhone",
  svgData: laptopWithPhoneIllustration
});
const ManOnRocketImage = createIllustrationComponent({
  name: "ManOnRocket",
  svgData: manOnRocketIllustration
});
const PaperPlaneImage = createIllustrationComponent({
  name: "PaperPlane",
  svgData: paperPlaneIllustration
});
const PeopleTogetherImage = createIllustrationComponent({
  name: "PeopleTogether",
  svgData: peopleTogetherIllustration
});
const QuestionMarksImage = createIllustrationComponent({
  name: "QuestionMarks",
  svgData: questionMarksIllustration
});
const RaisingMoneyImage = createIllustrationComponent({
  name: "RaisingMoney",
  svgData: raisingMoneyIllustration
});
const SwirlyLinesThickImage = createIllustrationComponent({
  name: "SwirlyLinesThick",
  svgData: swirlyLinesThickIllustration
});
const SwirlyLinesThinImage = createIllustrationComponent({
  name: "SwirlyLinesThin",
  svgData: swirlyLinesThinIllustration
});
const TeacherImage = createIllustrationComponent({
  name: "Teacher",
  svgData: teacherIllustration
});
const TimeFlexibleImage = createIllustrationComponent({
  name: "TimeFlexible",
  svgData: timeFlexibleIllustration
});
const UnmatchedImage = createIllustrationComponent({
  name: "Unmatched",
  svgData: unmatchedIllustration
});
const WomanOnRocketImage = createIllustrationComponent({
  name: "WomanOnRocket",
  svgData: womanOnRocketIllustration
});

const getLinkStyles = ({
  theme
}) => ({});
const getLinkTextStyles = ({
  theme,
  buttonAppearance,
  color,
  textDecoration
}) => ({
  color: buttonAppearance === ButtonAppearance.Primary ? theme.color.text.button : color || theme.color.text.link,
  textDecorationLine: textDecoration ? "underline" : "none"
});

/**
 * Link component for React Native
 * - Uses React Navigation for internal navigation (to)
 * - Uses Linking API for external links (href)
 */
const Link = /*#__PURE__*/forwardRef$1((_a, ref) => {
  var {
      active,
      bold,
      buttonAppearance,
      buttonSize,
      children,
      href,
      to,
      params,
      style,
      textType,
      textDecoration = true,
      onClick
    } = _a,
    props = __rest(_a, ["active", "bold", "buttonAppearance", "buttonSize", "children", "href", "to", "params", "style", "textType", "textDecoration", "onClick"]);
  const theme = useTheme();
  // Use try/catch to handle cases when NavigationContainer isn't available
  let navigation;
  try {
    navigation = useNavigation();
  } catch (error) {
    // Navigation container not available, will handle in onPress
  }
  const handlePress = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      // Handle external link
      Linking.openURL(href).catch(err => {
        console.error("Failed to open URL:", err);
      });
    } else if (to && navigation) {
      // Handle internal navigation if navigation is available
      navigation.navigate(to, params);
    } else if (to) {
      console.warn("Navigation not available. Make sure your Link is inside NavigationContainer.");
    }
  };
  // Choose appropriate component based on link type
  // const Component = href ? ExternalLink : TouchableLink;
  const linkStyles = buttonAppearance ? getButtonStyles({
    theme,
    appearance: buttonAppearance,
    size: buttonSize || ButtonSizes.Stretch,
    variation: ButtonVariations.Basic
  }) : getLinkStyles({
    theme
  });
  return jsx(TouchableOpacity, Object.assign({
    ref: ref,
    onPress: handlePress,
    accessibilityRole: "link",
    style: [linkStyles, style]
  }, props, {
    children: jsx(Text, {
      type: textType || TextTypes.Body5,
      bold: Boolean(bold),
      style: getLinkTextStyles({
        theme,
        buttonAppearance,
        textDecoration
      }),
      children: children
    })
  }));
});

// import {
//   slideDownAndFade,
//   slideLeftAndFade,
//   slideRightAndFade,
//   slideUpAndFade,
// } from "../../utils/animations";
//   &[data-state="delayed-open"][data-side="top"] {
//     animation-name: ${slideDownAndFade};
//   }
//   &[data-state="delayed-open"][data-side="right"] {
//     animation-name: ${slideLeftAndFade};
//   }
//   &[data-state="delayed-open"][data-side="bottom"] {
//     animation-name: ${slideUpAndFade};
//   }
//   &[data-state="delayed-open"][data-side="left"] {
//     animation-name: ${slideRightAndFade};
//   }
// `;
const getPopoverContentStyles = ({
  theme,
  width,
  extraPaddingTop,
  asToolTip
}) => StyleSheet.create({
  content: Object.assign({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 9999,
    borderRadius: theme.radius.xxxsmall,
    padding: theme.spacing.small,
    width: width || undefined,
    maxWidth: PopoverSizes.Large,
    shadowColor: "rgba(20, 25, 30, 0.35)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 6,
    backgroundColor: asToolTip ? theme.color.surface.bold : theme.color.surface.primary,
    paddingRight: asToolTip ? theme.spacing.medium : theme.spacing.small
  }, extraPaddingTop && {
    paddingTop: theme.spacing.medium
  })
});
const getPopoverCloseStyles = ({
  theme,
  asToolTip
}) => StyleSheet.create({
  close: {
    position: "absolute",
    top: theme.spacing.xsmall,
    right: theme.spacing.xsmall,
    width: 12,
    height: 12,
    color: asToolTip ? theme.color.text.reversed : theme.color.text.primary
  }
});
// export const StyledPopoverContent = styled(PopoverContent)<{
//   $asToolTip?: boolean;
//   $extraPaddingTop: boolean;
//   $width: PopoverSizes;
// }>`
//   ${POPOVER_CONTENT_CSS}
//   display: flex;
//   flex-direction: column;
//   z-index: 1000;
//   ${({ $width }) =>
//     $width &&
//     `
//       width: ${$width};
//     `}
//   ${({ $extraPaddingTop, theme }) =>
//     $extraPaddingTop &&
//     `
//     padding-top: ${theme.spacing.medium};
//   `}
//   ${({ $asToolTip, theme }) => css`
//     background-color: ${$asToolTip
//       ? theme.color.surface.bold
//       : theme.color.surface.primary};
//     color: ${$asToolTip ? theme.color.text.reversed : theme.color.text.primary};
//     padding-right: ${$asToolTip
//       ? theme.spacing.medium
//       : theme.spacing.small};
//   `}
//   &[data-state='open'][data-side='top'] {
//     animation-name: ${slideDownAndFade};
//   }
//   &[data-state="open"][data-side="right"] {
//     animation-name: ${slideLeftAndFade};
//   }
//   &[data-state="open"][data-side="bottom"] {
//     animation-name: ${slideUpAndFade};
//   }
//   &[data-state="open"][data-side="left"] {
//     animation-name: ${slideRightAndFade};
//   }
// `;
// export const StyledPopoverClose = styled(PopoverClose)<{
//   $asToolTip?: boolean;
// }>`
//   position: absolute;
//   top: ${({ theme }) => theme.spacing.xsmall};
//   right: ${({ theme }) => theme.spacing.xsmall};
//   width: 12px !important;
//   height: 12px !important;
//   color: ${({ $asToolTip, theme }) =>
//     $asToolTip ? theme.color.text.reversed : theme.color.text.primary};
// `;
// export const StyledPopoverArrow = styled(PopoverArrow)<{
//   $asToolTip?: boolean;
// }>`
//   fill: ${({ $asToolTip, theme }) =>
//     $asToolTip ? theme.color.surface.bold : theme.color.surface.primary};
// `;

const DEFAULT_SIDE_OFFSET$1 = 0; //px
const Popover = ({
  asToolTip,
  children,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET$1,
  showCloseButton,
  trigger,
  width = PopoverSizes.Small
  // defaultOpen,
  // open
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState$1(false);
  const contentStyles = useMemo$1(() => getPopoverContentStyles({
    theme,
    width,
    extraPaddingTop: Boolean(!asToolTip && showCloseButton),
    asToolTip
  }), [theme, width, showCloseButton, asToolTip]);
  const closeStyles = useMemo$1(() => getPopoverCloseStyles({
    theme,
    asToolTip
  }), [theme, asToolTip]);
  return jsxs(PopoverPrimitive.Root, {
    onOpenChange: setIsOpen,
    children: [trigger && jsx(PopoverPrimitive.Trigger, {
      asChild: true,
      children: trigger
    }), jsxs(PopoverPrimitive.Content, {
      side: side,
      sideOffset: sideOffset || DEFAULT_SIDE_OFFSET$1,
      onFocusOutside: () => setIsOpen(false),
      style: contentStyles.content,
      children: [children, showCloseButton && jsx(PopoverPrimitive.Close, {
        asChild: true,
        style: closeStyles.close,
        onPress: () => setIsOpen(false),
        children: jsx(Button, {
          variation: ButtonVariations.Icon,
          children: jsx(CloseIcon, {
            label: "popover close"
          })
        })
      })]
    })]
  });
};

const getProgressBarStyles = ({
  theme
}) => StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.small
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.radius.full,
    backgroundColor: theme.color.surface.tertiary,
    width: 300,
    height: 8
  },
  indicator: {
    backgroundColor: theme.color.surface.indicator,
    width: '100%',
    height: '100%'
  }
});

const ProgressBar = ({
  style,
  max,
  value = 0
}) => {
  const [progress, setProgress] = useState$1(calculateProgress(max, value));
  const theme = useTheme();
  const styles = getProgressBarStyles({
    theme
  });
  useEffect$1(() => {
    setProgress(calculateProgress(max, value));
  }, [max, value]);
  return jsxs(View, {
    style: [styles.wrapper, style],
    children: [jsxs(Text, {
      id: "progressBarIndicator",
      type: TextTypes.Body6,
      children: [value, "/", max]
    }), jsx(ProgressPrimitive.Root, {
      "aria-labelledby": "progressBarIndicator",
      value: value,
      max: max,
      style: styles.root,
      children: jsx(ProgressPrimitive.Indicator, {
        style: [styles.indicator, {
          transform: `translateX(-${100 - progress}%)`
        }]
      })
    })]
  });
};

const ITEM_WIDTH = 13;
const getRadioGroupStyles = ({
  theme
}) => StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xxsmall,
    alignItems: 'flex-start'
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  item: {
    // all: 'unset',
    backgroundColor: theme.color.surface.primary,
    borderWidth: 1,
    borderColor: theme.color.surface.contrast,
    borderRadius: theme.radius.full,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginRight: theme.spacing.xxsmall,
    boxShadow: '0 0 0 2px #eeb612'
  },
  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
});
// export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
//   &::after {
//     content: '';
//     display: block;
//     width: 9px;
//     height: 9px;
//     border-radius: 50%;
//     background-color: ${({ theme }) => theme.color.text.primary};
//   }
// `;

const RadioGroup = _a => {
  var {
      error,
      items,
      label,
      labelTooltip,
      inputRef
    } = _a,
    rest = __rest(_a, ["error", "items", "label", "labelTooltip", "inputRef"]);
  const theme = useTheme();
  const styles = getRadioGroupStyles({
    theme
  });
  return jsxs(View, {
    children: [label && jsx(Label, {
      bold: true,
      children: label
    }), jsxs(RadioGroupPrimitive.Root
    // ref={inputRef}
    // value={undefined}
    // name={label}
    , Object.assign({}, rest, {
      children: [items === null || items === void 0 ? void 0 : items.map(item => jsxs(View, {
        style: styles.itemContainer,
        children: [jsx(RadioGroupPrimitive.Item, {
          value: item.value,
          id: item.id,
          children: jsx(RadioGroupPrimitive.Indicator, {
            style: styles.indicator
          })
        }), item.label && jsx(Label, {
          inline: true,
          children: item.label
        })]
      }, item.id)), jsx(InputError, {
        visible: Boolean(error),
        children: error
      })]
    }))]
  });
};

const getSeparatorStyles = ({
  theme,
  background,
  spacing
}) => StyleSheet.create({
  wrapper: {
    backgroundColor: background || theme.color.border.contrast,
    height: 1,
    width: "100%"
  },
  vertical: {
    height: "100%",
    width: 1,
    marginHorizontal: spacing || theme.spacing.medium
  },
  horizontal: {
    height: 1,
    width: "100%",
    marginVertical: spacing || theme.spacing.medium
  }
});

const Separator = ({
  background,
  orientation = 'horizontal',
  spacing,
  style
}) => {
  const theme = useTheme();
  const styles = getSeparatorStyles({
    theme,
    background,
    spacing: spacing
  });
  return jsx(SeparatorPrimitive.Root, {
    style: [styles.wrapper, orientation === 'vertical' ? styles.vertical : styles.horizontal, style],
    orientation: orientation,
    decorative: true
  });
};

const getTagStyles = ({
  theme,
  size,
  appearance,
  color
}) => {
  const baseStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.xxxsmall,
    backgroundColor: theme.color.surface.primary,
    borderWidth: 2,
    borderColor: color,
    borderRadius: theme.radius.large,
    minWidth: 30,
    width: 120,
    height: size === TagSizes.small ? 32 : 40,
    paddingHorizontal: theme.spacing.xsmall,
    paddingVertical: size === TagSizes.small ? theme.spacing.xsmall : theme.spacing.xxsmall
  };
  if (appearance === TagAppearance.solid) return Object.assign(Object.assign({}, baseStyles), {
    backgroundColor: theme.color.surface.accent
  });
  return baseStyles;
};

const Tag = ({
  children,
  style,
  size,
  color,
  appearance
}) => {
  const theme = useTheme();
  return jsx(View, {
    style: [getTagStyles({
      theme,
      size,
      appearance,
      color
    }), style],
    children: jsx(Text, {
      style: {
        fontSize: size === TagSizes.small ? 14 : 16
      },
      children: children
    })
  });
};
function Tags({
  appearance,
  bold,
  color,
  content,
  size,
  style
}) {
  return jsx(View, {
    style: Object.assign({
      flexDirection: "row",
      gap: tokens.spacing.medium,
      flexWrap: "wrap"
    }, style),
    children: content.map(tag => jsx(Tag, {
      bold: bold,
      size: size,
      color: color,
      appearance: appearance,
      children: jsx(Text, {
        style: {
          fontSize: size === TagSizes.small ? 14 : 16
        },
        children: tag
      })
    }, tag))
  });
}

const createStyles = theme => StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: InputWidth.Large
  },
  inputContainer: {
    position: 'relative',
    width: '100%'
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: theme.color.border.subtle,
    borderRadius: 6,
    padding: theme.spacing.xxsmall,
    marginBottom: theme.spacing.xxxxsmall,
    fontSize: 16,
    // 1rem equivalent
    lineHeight: 20 // 1.25 equivalent
  },
  inputSmall: {
    padding: 5
  },
  inputError: {
    borderColor: theme.color.border.error
  },
  showPasswordToggle: {
    position: 'absolute',
    right: theme.spacing.xxsmall,
    top: theme.spacing.xxsmall
  }
});
const InputWrapper = ({
  children,
  width = InputWidth.Large,
  style
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return jsx(View, {
    style: [styles.inputWrapper, {
      maxWidth: width
    }, style],
    children: children
  });
};
const InputContainer = ({
  children,
  style
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return jsx(View, {
    style: [styles.inputContainer, style],
    children: children
  });
};
const Input = _a => {
  var {
      hasError,
      height,
      style
    } = _a,
    props = __rest(_a, ["hasError", "height", "style"]);
  const theme = useTheme();
  const styles = createStyles(theme);
  return jsx(TextInput$1, Object.assign({
    style: [styles.input, height === InputHeight.Small && styles.inputSmall, hasError && styles.inputError, style]
  }, props));
};
// export const TelephoneInput = styled(PhoneInput)<{
//   $hasError: boolean;
//   $height?: string;
// }>`
//   > input.form-control {
//     ${INPUT_CSS}
//     padding-left: 52px;
//     ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
//   }
//   .flag-dropdown {
//     overflow: hidden;
//     border: 2px solid
//       ${({ theme, $hasError }) =>
//         $hasError ? theme.color.border.error : theme.color.border.subtle};
//   }
//   .flag-dropdown.open {
//     overflow: visible;
//   }
//   .flag-dropdown,
//   .flag-dropdown.open {
//     background: none;
//     border-radius: 6px 0 0 6px;
//   }
//   .react-tel-input .flag-dropdown.open .selected-flag {
//     background: none;
//   }
//   .react-tel-input .selected-flag {
//     padding: 0 0 0 14px;
//     scale: 1.3;
//     width: 51px;
//     transition: background ease 0.2s;
//     > .flag {
//       margin-top: -6px;
//     }
//   }
//   .react-tel-input .selected-flag:focus {
//     background: none;
//   }
//   .flag-dropdown .selected-flag:hover {
//     background: ${({ theme }) => theme.color.border.subtle};
//   }
//   .react-tel-input .flag-dropdown.open .selected-flag {
//     &:hover {
//       background: none;
//       filter: brightness(0.8);
//     }
//   }
//   .react-tel-input .selected-flag,
//   .react-tel-input .flag-dropdown.open .selected-flag {
//     border-radius: 8px 0 0 8px;
//   }
// `;
const ShowPasswordToggle = _a => {
  var {
      children,
      style
    } = _a,
    props = __rest(_a, ["children", "style"]);
  const theme = useTheme();
  const styles = createStyles(theme);
  return jsx(View, Object.assign({
    style: [styles.showPasswordToggle, style]
  }, props, {
    children: children
  }));
};

const PASSWORD_TOGGLE_ICON_SIZE = 20;
const TextInput = _a => {
  var {
      error,
      height,
      id,
      inline,
      inputRef,
      label,
      labelTooltip,
      onChange,
      onSubmit,
      type = "text",
      width = InputWidth.Large
    } = _a,
    inputProps = __rest(_a, ["error", "height", "id", "inline", "inputRef", "label", "labelTooltip", "onChange", "onSubmit", "type", "width"]);
  const [inputType, setInputType] = React.useState(type);
  const [showPassword, setShowPassword] = React.useState(false);
  const {
      defaultValue,
      value
    } = inputProps;
    __rest(inputProps, ["defaultValue", "value"]);
  const errorProps = inline ? {
    bottom: "-16px",
    right: "0px"
  } : {};
  const handlePasswordVisibilityToggle = () => {
    if (inputType === "password") {
      setInputType("text");
      setShowPassword(true);
    } else {
      setInputType("password");
      setShowPassword(false);
    }
  };
  const handleKeyPress = async e => {
    if (onSubmit && e.nativeEvent.key === "Enter") {
      await onSubmit();
    }
  };
  return jsxs(InputWrapper, {
    width: width,
    children: [label && jsx(Label, {
      bold: true,
      nativeId: id,
      children: label
    }), jsxs(InputContainer, {
      children: [jsx(Input, Object.assign({
        "aria-labelledby": id,
        hasError: Boolean(error),
        secureTextEntry: inputType === "password",
        id: id,
        onChange: onChange,
        onKeyPress: handleKeyPress,
        height: height
      }, inputProps)), type === "password" && jsx(ShowPasswordToggle, {
        children: jsx(Button, {
          variation: ButtonVariations.Icon,
          onPress: handlePasswordVisibilityToggle,
          children: showPassword ? jsx(EyeClosedIcon, {
            label: "show password",
            width: PASSWORD_TOGGLE_ICON_SIZE,
            height: PASSWORD_TOGGLE_ICON_SIZE
          }) : jsx(EyeOpenIcon, {
            label: "hide password",
            width: PASSWORD_TOGGLE_ICON_SIZE,
            height: PASSWORD_TOGGLE_ICON_SIZE
          })
        })
      })]
    }), jsx(InputError, Object.assign({
      visible: Boolean(error),
      textAlign: width === InputWidth.Large ? "right" : "left"
    }, errorProps, {
      children: error
    }))]
  });
};

const DEFAULT_SIDE_OFFSET = 4; //px
const ToolTip = ({
  // open,
  side = 'top',
  sideOffset = DEFAULT_SIDE_OFFSET,
  trigger,
  text
  // ...rest
}) => {
  const theme = useTheme();
  return jsx(Popover, {
    asToolTip: true,
    // open={open}
    side: side,
    sideOffset: sideOffset,
    showCloseButton: true,
    trigger: trigger,
    width: PopoverSizes.Large,
    children: jsx(Text, {
      color: theme.color.text.reversed,
      type: TextTypes.Body5,
      children: text
    })
  });
};

const lightTheme = Object.assign(Object.assign({}, tokens), {
  color: tokens.color.theme.light
});
const darkTheme = Object.assign(Object.assign({}, tokens), {
  color: tokens.color.theme.dark
});
const defaultTheme = lightTheme;
const themes = {
  [ThemeVariants.light]: lightTheme,
  [ThemeVariants.dark]: darkTheme
};
const themeContext = /*#__PURE__*/createContext$1({
  toggleMode: () => {},
  currentMode: defaultThemeVariant
});
const {
  Provider
} = themeContext;
const CustomThemeProvider = ({
  children,
  defaultMode = defaultThemeVariant
}) => {
  const [currentMode, setCurrentMode] = useState$1(defaultMode);
  const toggleMode = useCallback$1(() => {
    setCurrentMode(currentMode => currentMode === ThemeVariants.light ? ThemeVariants.dark : ThemeVariants.light);
  }, []);
  const contextValue = useMemo$1(() => ({
    currentMode,
    toggleMode
  }), [currentMode, toggleMode]);
  return jsx(Provider, {
    value: contextValue,
    children: jsx(ThemeProvider, {
      theme: themes[currentMode],
      children: children
    })
  });
};

// Force hooks to be accessed through React
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
  forwardRef
} = React;

export { Accordion, AccountIcon, AppointmentIcon, ArchiveIcon, ArrowLeftIcon, AttachmentIcon, BellIcon, BrokenChainImage, Button, CalendarIcon, CallIncomingIcon, CallOutgoingIcon, CameraIcon, Card, CardContent, CardFooter, CardHeader, CheckIcon, Checkbox, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, CloseIcon, CustomThemeProvider, DashboardIcon, DotsIcon, DownloadIcon, Dropdown, ExclamationIcon, EyeClosedIcon, EyeOpenIcon, FacebookIcon, FriendshipImage, FullScreenExitIcon, FullScreenIcon, GithubIcon, Gradient, GroupChatIcon, GroupHandsImage, HeartIcon, ImageIcon, ImageSearchIcon, InclusiveIcon, InfoIcon, InstagramIcon, KeyImage, Label, LaptopWithPhoneImage, Link, LinkedInIcon, LivingRoomImage, Loading, Logo, LogoutIcon, ManOnRocketImage, MenuIcon, MessageIcon, MessageWithQuestionIcon, MicIcon, MoonIcon, PaperPlaneImage, PencilIcon, PeopleTogetherImage, PhoneIcon, PhoneSlashIcon, PlusIcon, Popover, ProfileChatIcon, ProfileIcon, ProgressBar, PuzzleIcon, QuestionIcon, QuestionMarksImage, RadioGroup, RaisingMoneyImage, SendIcon, Separator, SettingsIcon, StackIcon, StarIcon, SunIcon, SwapIcon, SwirlyLinesThickImage, SwirlyLinesThinImage, Tag, Tags, TeacherImage, TelegramIcon, Text, TextInput, TickDoubleIcon, TickIcon, TiktokIcon, TimeFlexibleImage, ToolTip, TranslatorIcon, TrashIcon, TwitterIcon, UnmatchedImage, VideoIcon, WhatsappIcon, WomanOnRocketImage, darkTheme, defaultTheme, lightTheme, themeContext, themes };
//# sourceMappingURL=index.esm.js.map
