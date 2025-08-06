export interface AccessibilityProps {
  accessible?: boolean; // Maps to accessibility flag on RN & Web
  accessibilityLabel?: string;
  accessibilityHint?: string; // RN only, fallback on Web
  accessibilityRole?: string;
  labelVisible?: boolean;
}
