import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const ITEM_WIDTH = 13;

export const getRadioGroupStyles = ({ theme }: { theme: DefaultTheme }) => StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xxsmall,
    alignItems: 'flex-start',
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
    height: '100%',
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
