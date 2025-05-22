import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

// import { INPUT_ERROR_CSS } from '../InputError/InputError';
// import { BODY_5_CSS } from '../Text/styles';
import { InputHeight } from '@a-little-world/little-world-design-system-core';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
export const DROPDOWN_MAX_WIDTH = 300;


export const getDropdownStyles = ({ theme, maxWidth, height, hasError }: { theme: DefaultTheme, maxWidth: number, height: InputHeight, hasError: boolean }) => StyleSheet.create({
  wrapper: {
    position: 'relative',
    maxWidth: maxWidth || DROPDOWN_MAX_WIDTH,
    width: '100%',
  },
  trigger: {
    all: 'unset',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xxsmall,
    paddingHorizontal: height === InputHeight.Small ? theme.spacing.small : theme.spacing.xsmall,
    lineHeight: 1.25,
    height: height === InputHeight.Small ? '34px' : '40px',
    gap: theme.spacing.xsmall,
    backgroundColor: theme.color.surface.primary,
    borderRadius: theme.radius.xxxsmall,
    borderWidth: 2,
    borderColor: theme.color.border.subtle,
    width: '100%',
    color: theme.color.text.secondary,
    marginBottom: theme.spacing.xxxxsmall,
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
