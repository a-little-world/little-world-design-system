var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
var littleWorldDesignSystemCore = require('@a-little-world/little-world-design-system-core');
var reactNative = require('react-native');
var native = require('styled-components/native');
var Svg = require('react-native-svg');
var AccordionPrimitive = require('@rn-primitives/accordion');
var expoLinearGradient = require('expo-linear-gradient');
var CheckboxPrimitive = require('@rn-primitives/checkbox');
var DropdownMenuPrimitive = require('@rn-primitives/dropdown-menu');
var native$1 = require('@react-navigation/native');
var PopoverPrimitive = require('@rn-primitives/popover');
var ProgressPrimitive = require('@rn-primitives/progress');
var RadioGroupPrimitive = require('@rn-primitives/radio-group');
var SeparatorPrimitive = require('@rn-primitives/separator');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefault(React);
var Svg__default = /*#__PURE__*/_interopDefault(Svg);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);

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
}) => jsxRuntime.jsx(reactNative.Text, {
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
  labelTop = littleWorldDesignSystemCore.tokens.spacing.xxlarge
}) => {
  const theme = native.useTheme();
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [circular ? jsxRuntime.jsx(reactNative.View, {
      style: [getCircleStyles({
        theme,
        backgroundColor,
        borderColor
      }), style],
      children: children
    }) : jsxRuntime.jsx(reactNative.View, {
      style: style,
      children: children
    }), labelVisible && jsxRuntime.jsx(ImageLabel, {
      top: labelTop,
      children: label
    })]
  });
};

const IconGradient = ({
  id,
  variation,
  type = littleWorldDesignSystemCore.GradientTypes.v1
}) => {
  if (type === littleWorldDesignSystemCore.GradientTypes.v1) return jsxRuntime.jsx(Svg.Defs, {
    children: jsxRuntime.jsxs(Svg.LinearGradient, {
      id: `gradient${id}`,
      x1: "1.84595",
      y1: "16.9964",
      x2: "34.8008",
      y2: "16.9964",
      gradientUnits: "userSpaceOnUse",
      children: [jsxRuntime.jsx(Svg.Stop, {
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][0]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "1",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][1]
      })]
    })
  });
  if (type === littleWorldDesignSystemCore.GradientTypes.v2) return jsxRuntime.jsx(Svg.Defs, {
    children: jsxRuntime.jsxs(Svg.LinearGradient, {
      id: `gradient${id}`,
      x1: "27.9721",
      y1: "99.877",
      x2: "116.893",
      y2: "99.877",
      gradientUnits: "userSpaceOnUse",
      children: [jsxRuntime.jsx(Svg.Stop, {
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][0]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "1",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][1]
      })]
    })
  });
  if (type === littleWorldDesignSystemCore.GradientTypes.v3) return jsxRuntime.jsx(Svg.Defs, {
    children: jsxRuntime.jsxs(Svg.LinearGradient, {
      id: `gradient${id}`,
      x1: "8.6001",
      y1: "94.48",
      x2: "186.19",
      y2: "94.48",
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(1, 0, 0, 1, 160.535599, 138.286461)",
      children: [jsxRuntime.jsx(Svg.Stop, {
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][0]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "0.18",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][2]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "0.55",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][3]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "0.83",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][4]
      }), jsxRuntime.jsx(Svg.Stop, {
        offset: "1",
        stopColor: littleWorldDesignSystemCore.GradientVariations[variation][5]
      })]
    })
  });
  if (type === littleWorldDesignSystemCore.GradientTypes.v4) return jsxRuntime.jsxs(Svg.LinearGradient, {
    id: `gradient${id}`,
    x1: "0%",
    y1: "50%",
    x2: "100%",
    y2: "50%",
    gradientUnits: "userSpaceOnUse",
    children: [jsxRuntime.jsx(Svg.Stop, {
      offset: "0%",
      stopColor: littleWorldDesignSystemCore.GradientVariations[variation][0]
    }), jsxRuntime.jsx(Svg.Stop, {
      offset: "100%",
      stopColor: littleWorldDesignSystemCore.GradientVariations[variation][1]
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
      return jsxRuntime.jsx(Svg.Path, Object.assign({}, attrs), key);
    case "g":
      return jsxRuntime.jsx(Svg.G, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "defs":
      return jsxRuntime.jsx(Svg.Defs, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "linearGradient":
      return jsxRuntime.jsx(Svg.LinearGradient, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "stop":
      return jsxRuntime.jsx(Svg.Stop, Object.assign({}, attrs), key);
    case "clipPath":
      return jsxRuntime.jsx(Svg.ClipPath, Object.assign({}, attrs, {
        children: renderChildren(element.children, options, index)
      }), key);
    case "circle":
      return jsxRuntime.jsx(Svg.Circle, Object.assign({}, attrs), key);
    case "rect":
      return jsxRuntime.jsx(Svg.Rect, Object.assign({}, attrs), key);
    case "line":
      return jsxRuntime.jsx(Svg.Line, Object.assign({}, attrs), key);
    case "polygon":
      return jsxRuntime.jsx(Svg.Polygon, Object.assign({}, attrs), key);
    case "polyline":
      return jsxRuntime.jsx(Svg.Polyline, Object.assign({}, attrs), key);
    case "ellipse":
      return jsxRuntime.jsx(Svg.Ellipse, Object.assign({}, attrs), key);
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
  return jsxRuntime.jsx(reactNative.View, {
    style: style,
    children: jsxRuntime.jsxs(Svg__default.default, {
      accessible: true,
      accessibilityLabel: label,
      width: width,
      height: height,
      viewBox: svgData.viewBox,
      fill: "none",
      children: [gradient && jsxRuntime.jsx(IconGradient, {
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
    return jsxRuntime.jsx(Icon, {
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
  svgData: littleWorldDesignSystemCore.accountIcon
});
const AppointmentIcon = createIconComponent({
  name: "Appointment",
  svgData: littleWorldDesignSystemCore.appointmentIcon
});
const ArchiveIcon = createIconComponent({
  name: "Archive",
  svgData: littleWorldDesignSystemCore.archiveIcon
});
const ArrowLeftIcon = createIconComponent({
  name: "ArrowLeft",
  svgData: littleWorldDesignSystemCore.arrowLeftIcon
});
const AttachmentIcon = createIconComponent({
  name: "Attachment",
  svgData: littleWorldDesignSystemCore.attachmentIcon
});
const BellIcon = createIconComponent({
  name: "Bell",
  svgData: littleWorldDesignSystemCore.bellIcon
});
const CalendarIcon = createIconComponent({
  name: "Calendar",
  svgData: littleWorldDesignSystemCore.calendarIcon
});
const CallIncomingIcon = createIconComponent({
  name: "CallIncoming",
  svgData: littleWorldDesignSystemCore.callIncomingIcon
});
const CallOutgoingIcon = createIconComponent({
  name: "CallOutgoing",
  svgData: littleWorldDesignSystemCore.callOutgoingIcon
});
const CameraIcon = createIconComponent({
  name: "Camera",
  svgData: littleWorldDesignSystemCore.cameraIcon
});
const CheckIcon = createIconComponent({
  name: "Check",
  svgData: littleWorldDesignSystemCore.checkIcon
});
const ChevronDownIcon = createIconComponent({
  name: "ChevronDown",
  svgData: littleWorldDesignSystemCore.chevronDownIcon
});
const ChevronLeftIcon = createIconComponent({
  name: "ChevronLeft",
  svgData: littleWorldDesignSystemCore.chevronLeftIcon
});
const ChevronRightIcon = createIconComponent({
  name: "ChevronRight",
  svgData: littleWorldDesignSystemCore.chevronRightIcon
});
const ClockIcon = createIconComponent({
  name: "Clock",
  svgData: littleWorldDesignSystemCore.clockIcon
});
const CloseIcon = createIconComponent({
  name: "Close",
  svgData: littleWorldDesignSystemCore.closeIcon
});
const DashboardIcon = createIconComponent({
  name: "Dashboard",
  svgData: littleWorldDesignSystemCore.dashboardIcon
});
const DotsIcon = createIconComponent({
  name: "Dots",
  svgData: littleWorldDesignSystemCore.dotsIcon
});
const DownloadIcon = createIconComponent({
  name: "Download",
  svgData: littleWorldDesignSystemCore.downloadIcon
});
const ExclamationIcon = createIconComponent({
  name: "Exclamation",
  svgData: littleWorldDesignSystemCore.exclamationIcon
});
const EyeClosedIcon = createIconComponent({
  name: "EyeClosed",
  svgData: littleWorldDesignSystemCore.eyeClosedIcon
});
const EyeOpenIcon = createIconComponent({
  name: "EyeOpen",
  svgData: littleWorldDesignSystemCore.eyeOpenIcon
});
const FacebookIcon = createIconComponent({
  name: "Facebook",
  svgData: littleWorldDesignSystemCore.facebookIcon
});
const FullScreenExitIcon = createIconComponent({
  name: "FullScreenExit",
  svgData: littleWorldDesignSystemCore.fullScreenExitIcon
});
const FullScreenIcon = createIconComponent({
  name: "FullScreen",
  svgData: littleWorldDesignSystemCore.fullScreenIcon
});
const GithubIcon = createIconComponent({
  name: "Github",
  svgData: littleWorldDesignSystemCore.githubIcon
});
const GroupChatIcon = createIconComponent({
  name: "GroupChat",
  svgData: littleWorldDesignSystemCore.groupChatIcon
});
const HeartIcon = createIconComponent({
  name: "Heart",
  svgData: littleWorldDesignSystemCore.heartIcon
});
const ImageIcon = createIconComponent({
  name: "Image",
  svgData: littleWorldDesignSystemCore.imageIcon
});
const ImageSearchIcon = createIconComponent({
  name: "ImageSearch",
  svgData: littleWorldDesignSystemCore.imageSearchIcon
});
const InclusiveIcon = createIconComponent({
  name: "Inclusive",
  svgData: littleWorldDesignSystemCore.inclusiveIcon
});
const InfoIcon = createIconComponent({
  name: "Info",
  svgData: littleWorldDesignSystemCore.infoIcon
});
const InstagramIcon = createIconComponent({
  name: "Instagram",
  svgData: littleWorldDesignSystemCore.instagramIcon
});
const LinkedInIcon = createIconComponent({
  name: "LinkedIn",
  svgData: littleWorldDesignSystemCore.linkedinIcon
});
const LogoutIcon = createIconComponent({
  name: "Logout",
  svgData: littleWorldDesignSystemCore.logoutIcon
});
const Logo = createIconComponent({
  name: "Logo",
  svgData: littleWorldDesignSystemCore.logoIcon
});
const MenuIcon = createIconComponent({
  name: "Menu",
  svgData: littleWorldDesignSystemCore.menuIcon
});
const MessageIcon = createIconComponent({
  name: "Message",
  svgData: littleWorldDesignSystemCore.messageIcon
});
const MessageWithQuestionIcon = createIconComponent({
  name: "MessageWithQuestion",
  svgData: littleWorldDesignSystemCore.messageWithQuestionIcon
});
const MicIcon = createIconComponent({
  name: "Mic",
  svgData: littleWorldDesignSystemCore.micIcon
});
const MoonIcon = createIconComponent({
  name: "Moon",
  svgData: littleWorldDesignSystemCore.moonIcon
});
const PencilIcon = createIconComponent({
  name: "Pencil",
  svgData: littleWorldDesignSystemCore.pencilIcon
});
const PhoneIcon = createIconComponent({
  name: "Phone",
  svgData: littleWorldDesignSystemCore.phoneIcon
});
const PhoneSlashIcon = createIconComponent({
  name: "PhoneSlash",
  svgData: littleWorldDesignSystemCore.phoneSlashIcon
});
const PlusIcon = createIconComponent({
  name: "Plus",
  svgData: littleWorldDesignSystemCore.plusIcon
});
const ProfileIcon = createIconComponent({
  name: "Profile",
  svgData: littleWorldDesignSystemCore.profileIcon
});
const ProfileChatIcon = createIconComponent({
  name: "ProfileChat",
  svgData: littleWorldDesignSystemCore.profileChatIcon
});
const PuzzleIcon = createIconComponent({
  name: "Puzzle",
  svgData: littleWorldDesignSystemCore.puzzleIcon
});
const QuestionIcon = createIconComponent({
  name: "Question",
  svgData: littleWorldDesignSystemCore.questionIcon
});
const SendIcon = createIconComponent({
  name: "Send",
  svgData: littleWorldDesignSystemCore.sendIcon
});
const SettingsIcon = createIconComponent({
  name: "Settings",
  svgData: littleWorldDesignSystemCore.settingsIcon
});
const StackIcon = createIconComponent({
  name: "Stack",
  svgData: littleWorldDesignSystemCore.stackIcon
});
const StarIcon = createIconComponent({
  name: "Star",
  svgData: littleWorldDesignSystemCore.starIcon
});
const SunIcon = createIconComponent({
  name: "Sun",
  svgData: littleWorldDesignSystemCore.sunIcon
});
const SwapIcon = createIconComponent({
  name: "Swap",
  svgData: littleWorldDesignSystemCore.swapIcon
});
const TelegramIcon = createIconComponent({
  name: "Telegram",
  svgData: littleWorldDesignSystemCore.telegramIcon
});
const TickDoubleIcon = createIconComponent({
  name: "TickDouble",
  svgData: littleWorldDesignSystemCore.tickDoubleIcon
});
const TickIcon = createIconComponent({
  name: "Tick",
  svgData: littleWorldDesignSystemCore.tickIcon
});
const TiktokIcon = createIconComponent({
  name: "Tiktok",
  svgData: littleWorldDesignSystemCore.tiktokIcon
});
const TranslatorIcon = createIconComponent({
  name: "Translator",
  svgData: littleWorldDesignSystemCore.translatorIcon
});
const TrashIcon = createIconComponent({
  name: "Trash",
  svgData: littleWorldDesignSystemCore.trashIcon
});
const TwitterIcon = createIconComponent({
  name: "Twitter",
  svgData: littleWorldDesignSystemCore.twitterIcon
});
const VideoIcon = createIconComponent({
  name: "Video",
  svgData: littleWorldDesignSystemCore.videoIcon
});
const WhatsappIcon = createIconComponent({
  name: "Whatsapp",
  svgData: littleWorldDesignSystemCore.whatsappIcon
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
  type = littleWorldDesignSystemCore.TextTypes.Body5
}) => {
  const textStyle = Object.assign({
    textAlign: center ? 'center' : 'auto',
    color: color
  }, mapCoreStyleToRN(littleWorldDesignSystemCore.getTextStyle(type)));
  if (bold) {
    textStyle.fontWeight = 'bold';
  }
  return jsxRuntime.jsx(reactNative.Text, {
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
}) => reactNative.StyleSheet.create({
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
  const theme = native.useTheme();
  const styles = React.useMemo(() => getAccordionStyles({
    theme
  }), [theme]);
  return jsxRuntime.jsx(AccordionPrimitive__namespace.Root, {
    style: [styles.root, style],
    type: "single",
    collapsible: true,
    children: items.map(({
      content,
      header
    }) => jsxRuntime.jsxs(AccordionPrimitive__namespace.Item, {
      value: header,
      style: styles.item,
      children: [jsxRuntime.jsx(AccordionPrimitive__namespace.Header, {
        id: header,
        style: styles.header,
        children: jsxRuntime.jsxs(AccordionPrimitive__namespace.Trigger, {
          style: styles.trigger,
          children: [jsxRuntime.jsx(Text, {
            type: headerType || littleWorldDesignSystemCore.TextTypes.Body4,
            color: headerColor,
            children: header
          }), jsxRuntime.jsx(ChevronDownIcon, {
            label: "accordion toggle icon",
            width: 14,
            height: 14,
            color: headerColor,
            style: styles.triggerIcon
          })]
        })
      }), jsxRuntime.jsx(AccordionPrimitive__namespace.Content, {
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

const styles = reactNative.StyleSheet.create({
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
  return jsxRuntime.jsx(expoLinearGradient.LinearGradient, {
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
  width: inline ? littleWorldDesignSystemCore.LoadingDimensions[size || littleWorldDesignSystemCore.LoadingSizes.Small] : '100%',
  height: '100%',
  minHeight: littleWorldDesignSystemCore.LoadingDimensions[size || littleWorldDesignSystemCore.LoadingSizes.Small]
});
const getLoadingElementStyles = (color, size, index) => ({
  position: 'absolute',
  width: littleWorldDesignSystemCore.LoadingDimensions[size || littleWorldDesignSystemCore.LoadingSizes.Small],
  height: littleWorldDesignSystemCore.LoadingDimensions[size || littleWorldDesignSystemCore.LoadingSizes.Small],
  borderWidth: size === littleWorldDesignSystemCore.LoadingSizes.Large ? 4 : 2,
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
  size = littleWorldDesignSystemCore.LoadingSizes.Small
}) => {
  const spinValue = React.useRef(new reactNative.Animated.Value(0)).current;
  React.useEffect(() => {
    const startAnimation = () => {
      reactNative.Animated.timing(spinValue, {
        toValue: 1,
        duration: 1400,
        easing: reactNative.Easing.linear,
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
  return jsxRuntime.jsx(reactNative.View, {
    style: [getLoadingContainerStyles(align, inline, size), style],
    testID: LOADING_RING_ID,
    children: [0, 1, 2, 3].map(index => jsxRuntime.jsx(reactNative.Animated.View, {
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
  }, variation === littleWorldDesignSystemCore.ButtonVariations.Basic ? {
    paddingHorizontal: theme.spacing.small,
    // flex: 1,
    height: littleWorldDesignSystemCore.BUTTON_DIMENSIONS[size].height,
    minWidth: littleWorldDesignSystemCore.BUTTON_DIMENSIONS[size].minWidth
    // paddingVertical: BUTTON_DIMENSIONS[size].padding.vertical,
  } : {});
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Circle) {
    return Object.assign(Object.assign(Object.assign({}, baseStyles), littleWorldDesignSystemCore.CIRCLE_DIMENSIONS[size]), {
      borderRadius: theme.radius.half,
      borderWidth: 1,
      borderColor: borderColor || backgroundColor || theme.color.border.bold,
      backgroundColor: backgroundColor || "transparent"
    });
  }
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Icon) {
    return Object.assign(Object.assign({}, baseStyles), {
      backgroundColor: backgroundColor || "transparent",
      padding: 0
    });
  }
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Option) {
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
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Inline) {
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
  if (appearance === littleWorldDesignSystemCore.ButtonAppearance.Primary) {
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
const gradientStyles = reactNative.StyleSheet.create({
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
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Option) {
    return Object.assign(Object.assign({}, baseStyles), {
      color: color || theme.color.text.primary,
      fontWeight: "normal"
    });
  }
  if (variation === littleWorldDesignSystemCore.ButtonVariations.Basic) {
    return Object.assign(Object.assign({}, baseStyles), {
      color: color || appearance === littleWorldDesignSystemCore.ButtonAppearance.Primary ? theme.color.text.button : theme.color.text.heading
    });
  }
  return baseStyles;
};
native.css`
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
}) => $appearance === littleWorldDesignSystemCore.ButtonAppearance.Secondary && native.css`
      color: ${$color || theme.color.text.button};
      background: ${$backgroundColor || theme.color.surface.primary};
    `}
`;
//     svg {
//       ${ICON_DIMENSIONS}
//     }
//   `;
// }

const Button = /*#__PURE__*/React__default.default.forwardRef(({
  appearance = littleWorldDesignSystemCore.ButtonAppearance.Primary,
  backgroundColor,
  borderColor,
  color,
  children,
  disabled,
  loading,
  onPress,
  size = littleWorldDesignSystemCore.ButtonSizes.Medium,
  variation = littleWorldDesignSystemCore.ButtonVariations.Basic,
  style
}, ref) => {
  const theme = native.useTheme();
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
  const hasGradient = appearance === littleWorldDesignSystemCore.ButtonAppearance.Primary && variation === littleWorldDesignSystemCore.ButtonVariations.Basic;
  const content = loading ? jsxRuntime.jsx(Loading, {
    color: textStyles.color
  }) : jsxRuntime.jsx(Text, {
    style: [textStyles, disabled ? {
      color: theme.color.text.disabled
    } : {}],
    children: children
  });
  return jsxRuntime.jsxs(reactNative.Pressable, {
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
    children: [hasGradient && jsxRuntime.jsx(Gradient, {
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
  width: littleWorldDesignSystemCore.CardDimensions[width]
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(Text, {
    style: getCardHeaderStyles({
      theme
    }),
    type: textType || littleWorldDesignSystemCore.TextTypes.Heading4,
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
  const theme = native.useTheme();
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
  return jsxRuntime.jsx(reactNative.ScrollView, {
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
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
}) => reactNative.StyleSheet.create({
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
}) => reactNative.StyleSheet.create({
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
const indicatorStyles = reactNative.StyleSheet.create({
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
  const theme = native.useTheme();
  const checkboxContainerStyle = React.useMemo(() => getContainerStyles({
    theme
  }), [theme]);
  const checkboxstyles = React.useMemo(() => getCheckboxStyles({
    theme,
    hasError: Boolean(error),
    color,
    checked
  }), [theme, error, color, checked]);
  return jsxRuntime.jsx(reactNative.View, {
    style: style,
    children: jsxRuntime.jsx(reactNative.View, {
      style: checkboxContainerStyle.container,
      children: readOnly ? jsxRuntime.jsx(reactNative.View, {
        style: checkboxstyles.checkbox,
        children: checked && jsxRuntime.jsx(CheckIcon, {
          label: "check icon",
          width: 10
        })
      }) : jsxRuntime.jsx(CheckboxPrimitive__namespace.Root, Object.assign({
        id: id,
        checked: checked,
        onCheckedChange: onCheckedChange,
        style: checkboxstyles.checkbox
      }, rest, {
        children: jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, {
          style: indicatorStyles.indicator,
          children: jsxRuntime.jsx(CheckIcon, {
            label: "check icon",
            width: 10
          })
        })
      }))
    })
  });
};

native.css`
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
  const theme = native.useTheme();
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
  return jsxRuntime.jsx(reactNative.View, {
    style: containerStyle,
    children: jsxRuntime.jsx(reactNative.Text, {
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(reactNative.Text, {
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
}) => reactNative.StyleSheet.create({
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
    paddingHorizontal: height === littleWorldDesignSystemCore.InputHeight.Small ? theme.spacing.small : theme.spacing.xsmall,
    lineHeight: 1.25,
    height: height === littleWorldDesignSystemCore.InputHeight.Small ? 34 : 40,
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
  return jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.Item
  // value={value}
  , {
    children: [jsxRuntime.jsx(Text, {
      children: children
    }), jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, {
      children: jsxRuntime.jsx(CheckIcon, {
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
  const theme = native.useTheme();
  const styles = getDropdownStyles({
    theme,
    maxWidth: maxWidth,
    height: height,
    hasError: Boolean(error)
  });
  lockedValue || (value && isValidValue(value, options) ? value : undefined);
  const canError = !lockedValue && !cannotError;
  return jsxRuntime.jsxs(reactNative.View, {
    style: [styles.wrapper, style],
    children: [label && jsxRuntime.jsx(Label, {
      bold: true,
      children: label
    }), jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.Root
    // disabled={disabled || !!lockedValue}
    // onValueChange={onValueChange}
    // required={required}
    // defaultValue={defaultValue}
    , {
      children: [jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Trigger, {
        "aria-label": ariaLabel || label,
        children: !lockedValue && jsxRuntime.jsx(ChevronDownIcon, {
          width: ARROW_DOWN_WIDTH,
          height: ARROW_DOWN_HEIGHT,
          label: "dropdown icon"
        })
      }), jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, {
        children: options.map(option => jsxRuntime.jsx(Option, {
          value: option.value,
          children: option.label
        }, option.label))
      })]
    }), canError && jsxRuntime.jsx(InputError, {
      visible: Boolean(error),
      children: error
    })]
  });
};

const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = littleWorldDesignSystemCore.tokens.spacing.xxlarge
}) => jsxRuntime.jsxs(reactNative.View, {
  children: [children, labelVisible && jsxRuntime.jsx(ImageLabel, {
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
    return jsxRuntime.jsx(Illustration, {
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
  svgData: littleWorldDesignSystemCore.brokenChainIllustration
});
const FriendshipImage = createIllustrationComponent({
  name: "Friendship",
  svgData: littleWorldDesignSystemCore.friendshipIllustration
});
const GroupHandsImage = createIllustrationComponent({
  name: "GroupHands",
  svgData: littleWorldDesignSystemCore.groupHandsIllustration
});
const KeyImage = createIllustrationComponent({
  name: "Key",
  svgData: littleWorldDesignSystemCore.keyIllustration
});
const LivingRoomImage = createIllustrationComponent({
  name: "LivingRoom",
  svgData: littleWorldDesignSystemCore.livingRoomIllustration
});
const LaptopWithPhoneImage = createIllustrationComponent({
  name: "LaptopWithPhone",
  svgData: littleWorldDesignSystemCore.laptopWithPhoneIllustration
});
const ManOnRocketImage = createIllustrationComponent({
  name: "ManOnRocket",
  svgData: littleWorldDesignSystemCore.manOnRocketIllustration
});
const PaperPlaneImage = createIllustrationComponent({
  name: "PaperPlane",
  svgData: littleWorldDesignSystemCore.paperPlaneIllustration
});
const PeopleTogetherImage = createIllustrationComponent({
  name: "PeopleTogether",
  svgData: littleWorldDesignSystemCore.peopleTogetherIllustration
});
const QuestionMarksImage = createIllustrationComponent({
  name: "QuestionMarks",
  svgData: littleWorldDesignSystemCore.questionMarksIllustration
});
const RaisingMoneyImage = createIllustrationComponent({
  name: "RaisingMoney",
  svgData: littleWorldDesignSystemCore.raisingMoneyIllustration
});
const SwirlyLinesThickImage = createIllustrationComponent({
  name: "SwirlyLinesThick",
  svgData: littleWorldDesignSystemCore.swirlyLinesThickIllustration
});
const SwirlyLinesThinImage = createIllustrationComponent({
  name: "SwirlyLinesThin",
  svgData: littleWorldDesignSystemCore.swirlyLinesThinIllustration
});
const TeacherImage = createIllustrationComponent({
  name: "Teacher",
  svgData: littleWorldDesignSystemCore.teacherIllustration
});
const TimeFlexibleImage = createIllustrationComponent({
  name: "TimeFlexible",
  svgData: littleWorldDesignSystemCore.timeFlexibleIllustration
});
const UnmatchedImage = createIllustrationComponent({
  name: "Unmatched",
  svgData: littleWorldDesignSystemCore.unmatchedIllustration
});
const WomanOnRocketImage = createIllustrationComponent({
  name: "WomanOnRocket",
  svgData: littleWorldDesignSystemCore.womanOnRocketIllustration
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
  color: buttonAppearance === littleWorldDesignSystemCore.ButtonAppearance.Primary ? theme.color.text.button : color || theme.color.text.link,
  textDecorationLine: textDecoration ? "underline" : "none"
});

/**
 * Link component for React Native
 * - Uses React Navigation for internal navigation (to)
 * - Uses Linking API for external links (href)
 */
const Link = /*#__PURE__*/React.forwardRef((_a, ref) => {
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
  const theme = native.useTheme();
  // Use try/catch to handle cases when NavigationContainer isn't available
  let navigation;
  try {
    navigation = native$1.useNavigation();
  } catch (error) {
    // Navigation container not available, will handle in onPress
  }
  const handlePress = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      // Handle external link
      reactNative.Linking.openURL(href).catch(err => {
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
    size: buttonSize || littleWorldDesignSystemCore.ButtonSizes.Stretch,
    variation: littleWorldDesignSystemCore.ButtonVariations.Basic
  }) : getLinkStyles({
    theme
  });
  return jsxRuntime.jsx(reactNative.TouchableOpacity, Object.assign({
    ref: ref,
    onPress: handlePress,
    accessibilityRole: "link",
    style: [linkStyles, style]
  }, props, {
    children: jsxRuntime.jsx(Text, {
      type: textType || littleWorldDesignSystemCore.TextTypes.Body5,
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
}) => reactNative.StyleSheet.create({
  content: Object.assign({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 9999,
    borderRadius: theme.radius.xxxsmall,
    padding: theme.spacing.small,
    width: width || undefined,
    maxWidth: littleWorldDesignSystemCore.PopoverSizes.Large,
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
}) => reactNative.StyleSheet.create({
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
  width = littleWorldDesignSystemCore.PopoverSizes.Small
  // defaultOpen,
  // open
}) => {
  const theme = native.useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const contentStyles = React.useMemo(() => getPopoverContentStyles({
    theme,
    width,
    extraPaddingTop: Boolean(!asToolTip && showCloseButton),
    asToolTip
  }), [theme, width, showCloseButton, asToolTip]);
  const closeStyles = React.useMemo(() => getPopoverCloseStyles({
    theme,
    asToolTip
  }), [theme, asToolTip]);
  return jsxRuntime.jsxs(PopoverPrimitive__namespace.Root, {
    onOpenChange: setIsOpen,
    children: [trigger && jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, {
      asChild: true,
      children: trigger
    }), jsxRuntime.jsxs(PopoverPrimitive__namespace.Content, {
      side: side,
      sideOffset: sideOffset || DEFAULT_SIDE_OFFSET$1,
      onFocusOutside: () => setIsOpen(false),
      style: contentStyles.content,
      children: [children, showCloseButton && jsxRuntime.jsx(PopoverPrimitive__namespace.Close, {
        asChild: true,
        style: closeStyles.close,
        onPress: () => setIsOpen(false),
        children: jsxRuntime.jsx(Button, {
          variation: littleWorldDesignSystemCore.ButtonVariations.Icon,
          children: jsxRuntime.jsx(CloseIcon, {
            label: "popover close"
          })
        })
      })]
    })]
  });
};

const getProgressBarStyles = ({
  theme
}) => reactNative.StyleSheet.create({
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
  const [progress, setProgress] = React.useState(littleWorldDesignSystemCore.calculateProgress(max, value));
  const theme = native.useTheme();
  const styles = getProgressBarStyles({
    theme
  });
  React.useEffect(() => {
    setProgress(littleWorldDesignSystemCore.calculateProgress(max, value));
  }, [max, value]);
  return jsxRuntime.jsxs(reactNative.View, {
    style: [styles.wrapper, style],
    children: [jsxRuntime.jsxs(Text, {
      id: "progressBarIndicator",
      type: littleWorldDesignSystemCore.TextTypes.Body6,
      children: [value, "/", max]
    }), jsxRuntime.jsx(ProgressPrimitive__namespace.Root, {
      "aria-labelledby": "progressBarIndicator",
      value: value,
      max: max,
      style: styles.root,
      children: jsxRuntime.jsx(ProgressPrimitive__namespace.Indicator, {
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
}) => reactNative.StyleSheet.create({
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
  const theme = native.useTheme();
  const styles = getRadioGroupStyles({
    theme
  });
  return jsxRuntime.jsxs(reactNative.View, {
    children: [label && jsxRuntime.jsx(Label, {
      bold: true,
      children: label
    }), jsxRuntime.jsxs(RadioGroupPrimitive__namespace.Root
    // ref={inputRef}
    // value={undefined}
    // name={label}
    , Object.assign({}, rest, {
      children: [items === null || items === void 0 ? void 0 : items.map(item => jsxRuntime.jsxs(reactNative.View, {
        style: styles.itemContainer,
        children: [jsxRuntime.jsx(RadioGroupPrimitive__namespace.Item, {
          value: item.value,
          id: item.id,
          children: jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, {
            style: styles.indicator
          })
        }), item.label && jsxRuntime.jsx(Label, {
          inline: true,
          children: item.label
        })]
      }, item.id)), jsxRuntime.jsx(InputError, {
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
}) => reactNative.StyleSheet.create({
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
  const theme = native.useTheme();
  const styles = getSeparatorStyles({
    theme,
    background,
    spacing: spacing
  });
  return jsxRuntime.jsx(SeparatorPrimitive__namespace.Root, {
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
    height: size === littleWorldDesignSystemCore.TagSizes.small ? 32 : 40,
    paddingHorizontal: theme.spacing.xsmall,
    paddingVertical: size === littleWorldDesignSystemCore.TagSizes.small ? theme.spacing.xsmall : theme.spacing.xxsmall
  };
  if (appearance === littleWorldDesignSystemCore.TagAppearance.solid) return Object.assign(Object.assign({}, baseStyles), {
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
    style: [getTagStyles({
      theme,
      size,
      appearance,
      color
    }), style],
    children: jsxRuntime.jsx(Text, {
      style: {
        fontSize: size === littleWorldDesignSystemCore.TagSizes.small ? 14 : 16
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
  return jsxRuntime.jsx(reactNative.View, {
    style: Object.assign({
      flexDirection: "row",
      gap: littleWorldDesignSystemCore.tokens.spacing.medium,
      flexWrap: "wrap"
    }, style),
    children: content.map(tag => jsxRuntime.jsx(Tag, {
      bold: bold,
      size: size,
      color: color,
      appearance: appearance,
      children: jsxRuntime.jsx(Text, {
        style: {
          fontSize: size === littleWorldDesignSystemCore.TagSizes.small ? 14 : 16
        },
        children: tag
      })
    }, tag))
  });
}

const createStyles = theme => reactNative.StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: littleWorldDesignSystemCore.InputWidth.Large
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
  width = littleWorldDesignSystemCore.InputWidth.Large,
  style
}) => {
  const theme = native.useTheme();
  const styles = createStyles(theme);
  return jsxRuntime.jsx(reactNative.View, {
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
  const theme = native.useTheme();
  const styles = createStyles(theme);
  return jsxRuntime.jsx(reactNative.View, {
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
  const theme = native.useTheme();
  const styles = createStyles(theme);
  return jsxRuntime.jsx(reactNative.TextInput, Object.assign({
    style: [styles.input, height === littleWorldDesignSystemCore.InputHeight.Small && styles.inputSmall, hasError && styles.inputError, style]
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
  const theme = native.useTheme();
  const styles = createStyles(theme);
  return jsxRuntime.jsx(reactNative.View, Object.assign({
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
      width = littleWorldDesignSystemCore.InputWidth.Large
    } = _a,
    inputProps = __rest(_a, ["error", "height", "id", "inline", "inputRef", "label", "labelTooltip", "onChange", "onSubmit", "type", "width"]);
  const [inputType, setInputType] = React__default.default.useState(type);
  const [showPassword, setShowPassword] = React__default.default.useState(false);
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
  return jsxRuntime.jsxs(InputWrapper, {
    width: width,
    children: [label && jsxRuntime.jsx(Label, {
      bold: true,
      nativeId: id,
      children: label
    }), jsxRuntime.jsxs(InputContainer, {
      children: [jsxRuntime.jsx(Input, Object.assign({
        "aria-labelledby": id,
        hasError: Boolean(error),
        secureTextEntry: inputType === "password",
        id: id,
        onChange: onChange,
        onKeyPress: handleKeyPress,
        height: height
      }, inputProps)), type === "password" && jsxRuntime.jsx(ShowPasswordToggle, {
        children: jsxRuntime.jsx(Button, {
          variation: littleWorldDesignSystemCore.ButtonVariations.Icon,
          onPress: handlePasswordVisibilityToggle,
          children: showPassword ? jsxRuntime.jsx(EyeClosedIcon, {
            label: "show password",
            width: PASSWORD_TOGGLE_ICON_SIZE,
            height: PASSWORD_TOGGLE_ICON_SIZE
          }) : jsxRuntime.jsx(EyeOpenIcon, {
            label: "hide password",
            width: PASSWORD_TOGGLE_ICON_SIZE,
            height: PASSWORD_TOGGLE_ICON_SIZE
          })
        })
      })]
    }), jsxRuntime.jsx(InputError, Object.assign({
      visible: Boolean(error),
      textAlign: width === littleWorldDesignSystemCore.InputWidth.Large ? "right" : "left"
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
  const theme = native.useTheme();
  return jsxRuntime.jsx(Popover, {
    asToolTip: true,
    // open={open}
    side: side,
    sideOffset: sideOffset,
    showCloseButton: true,
    trigger: trigger,
    width: littleWorldDesignSystemCore.PopoverSizes.Large,
    children: jsxRuntime.jsx(Text, {
      color: theme.color.text.reversed,
      type: littleWorldDesignSystemCore.TextTypes.Body5,
      children: text
    })
  });
};

const lightTheme = Object.assign(Object.assign({}, littleWorldDesignSystemCore.tokens), {
  color: littleWorldDesignSystemCore.tokens.color.theme.light
});
const darkTheme = Object.assign(Object.assign({}, littleWorldDesignSystemCore.tokens), {
  color: littleWorldDesignSystemCore.tokens.color.theme.dark
});
const defaultTheme = lightTheme;
const themes = {
  [littleWorldDesignSystemCore.ThemeVariants.light]: lightTheme,
  [littleWorldDesignSystemCore.ThemeVariants.dark]: darkTheme
};
const themeContext = /*#__PURE__*/React.createContext({
  toggleMode: () => {},
  currentMode: littleWorldDesignSystemCore.defaultThemeVariant
});
const {
  Provider
} = themeContext;
const CustomThemeProvider = ({
  children,
  defaultMode = littleWorldDesignSystemCore.defaultThemeVariant
}) => {
  const [currentMode, setCurrentMode] = React.useState(defaultMode);
  const toggleMode = React.useCallback(() => {
    setCurrentMode(currentMode => currentMode === littleWorldDesignSystemCore.ThemeVariants.light ? littleWorldDesignSystemCore.ThemeVariants.dark : littleWorldDesignSystemCore.ThemeVariants.light);
  }, []);
  const contextValue = React.useMemo(() => ({
    currentMode,
    toggleMode
  }), [currentMode, toggleMode]);
  return jsxRuntime.jsx(Provider, {
    value: contextValue,
    children: jsxRuntime.jsx(native.ThemeProvider, {
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
} = React__default.default;

exports.Accordion = Accordion;
exports.AccountIcon = AccountIcon;
exports.AppointmentIcon = AppointmentIcon;
exports.ArchiveIcon = ArchiveIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.AttachmentIcon = AttachmentIcon;
exports.BellIcon = BellIcon;
exports.BrokenChainImage = BrokenChainImage;
exports.Button = Button;
exports.CalendarIcon = CalendarIcon;
exports.CallIncomingIcon = CallIncomingIcon;
exports.CallOutgoingIcon = CallOutgoingIcon;
exports.CameraIcon = CameraIcon;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CheckIcon = CheckIcon;
exports.Checkbox = Checkbox;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ClockIcon = ClockIcon;
exports.CloseIcon = CloseIcon;
exports.CustomThemeProvider = CustomThemeProvider;
exports.DashboardIcon = DashboardIcon;
exports.DotsIcon = DotsIcon;
exports.DownloadIcon = DownloadIcon;
exports.Dropdown = Dropdown;
exports.ExclamationIcon = ExclamationIcon;
exports.EyeClosedIcon = EyeClosedIcon;
exports.EyeOpenIcon = EyeOpenIcon;
exports.FacebookIcon = FacebookIcon;
exports.FriendshipImage = FriendshipImage;
exports.FullScreenExitIcon = FullScreenExitIcon;
exports.FullScreenIcon = FullScreenIcon;
exports.GithubIcon = GithubIcon;
exports.Gradient = Gradient;
exports.GroupChatIcon = GroupChatIcon;
exports.GroupHandsImage = GroupHandsImage;
exports.HeartIcon = HeartIcon;
exports.ImageIcon = ImageIcon;
exports.ImageSearchIcon = ImageSearchIcon;
exports.InclusiveIcon = InclusiveIcon;
exports.InfoIcon = InfoIcon;
exports.InstagramIcon = InstagramIcon;
exports.KeyImage = KeyImage;
exports.Label = Label;
exports.LaptopWithPhoneImage = LaptopWithPhoneImage;
exports.Link = Link;
exports.LinkedInIcon = LinkedInIcon;
exports.LivingRoomImage = LivingRoomImage;
exports.Loading = Loading;
exports.Logo = Logo;
exports.LogoutIcon = LogoutIcon;
exports.ManOnRocketImage = ManOnRocketImage;
exports.MenuIcon = MenuIcon;
exports.MessageIcon = MessageIcon;
exports.MessageWithQuestionIcon = MessageWithQuestionIcon;
exports.MicIcon = MicIcon;
exports.MoonIcon = MoonIcon;
exports.PaperPlaneImage = PaperPlaneImage;
exports.PencilIcon = PencilIcon;
exports.PeopleTogetherImage = PeopleTogetherImage;
exports.PhoneIcon = PhoneIcon;
exports.PhoneSlashIcon = PhoneSlashIcon;
exports.PlusIcon = PlusIcon;
exports.Popover = Popover;
exports.ProfileChatIcon = ProfileChatIcon;
exports.ProfileIcon = ProfileIcon;
exports.ProgressBar = ProgressBar;
exports.PuzzleIcon = PuzzleIcon;
exports.QuestionIcon = QuestionIcon;
exports.QuestionMarksImage = QuestionMarksImage;
exports.RadioGroup = RadioGroup;
exports.RaisingMoneyImage = RaisingMoneyImage;
exports.SendIcon = SendIcon;
exports.Separator = Separator;
exports.SettingsIcon = SettingsIcon;
exports.StackIcon = StackIcon;
exports.StarIcon = StarIcon;
exports.SunIcon = SunIcon;
exports.SwapIcon = SwapIcon;
exports.SwirlyLinesThickImage = SwirlyLinesThickImage;
exports.SwirlyLinesThinImage = SwirlyLinesThinImage;
exports.Tag = Tag;
exports.Tags = Tags;
exports.TeacherImage = TeacherImage;
exports.TelegramIcon = TelegramIcon;
exports.Text = Text;
exports.TextInput = TextInput;
exports.TickDoubleIcon = TickDoubleIcon;
exports.TickIcon = TickIcon;
exports.TiktokIcon = TiktokIcon;
exports.TimeFlexibleImage = TimeFlexibleImage;
exports.ToolTip = ToolTip;
exports.TranslatorIcon = TranslatorIcon;
exports.TrashIcon = TrashIcon;
exports.TwitterIcon = TwitterIcon;
exports.UnmatchedImage = UnmatchedImage;
exports.VideoIcon = VideoIcon;
exports.WhatsappIcon = WhatsappIcon;
exports.WomanOnRocketImage = WomanOnRocketImage;
exports.darkTheme = darkTheme;
exports.defaultTheme = defaultTheme;
exports.lightTheme = lightTheme;
exports.themeContext = themeContext;
exports.themes = themes;
//# sourceMappingURL=index.js.map
