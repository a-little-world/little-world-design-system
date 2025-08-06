import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

// export const AccordionRoot = styled(Accordion.Root)`
//   :root {
//     --radix-accordion-content-width: 100%:
//     --radix-collapsible-content-width: 100%;
//   }
// `;

export const getAccordionStyles = ({ theme }: { theme: DefaultTheme }) =>
  StyleSheet.create({
    root: {
      borderWidth: 1,
      borderRadius: theme.radius.xxsmall,
      borderColor: theme.color.border.subtle,
      width: 100,
    },
    item: {
      borderBottomWidth: 1,
      borderColor: theme.color.border.subtle,
      margin: 0,
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: theme.spacing.small,
      paddingBottom: 0,
      width: 100,
    },
    itemLastChild: {
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    header: {
      margin: 0,
      width: 100,
    },
    content: {
      width: 100,
      backgroundColor: theme.color.surface.secondary,
      borderRadius: theme.radius.xxsmall,
      padding: theme.spacing.small,
      marginBottom: theme.spacing.small,
    },
    trigger: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: 'none',
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: theme.spacing.small,
      gap: theme.spacing.small,
      width: 100,
      textAlign: 'left',
    },
    triggerIcon: {
      flexShrink: 0,
      marginTop: 6,
    },
  });
