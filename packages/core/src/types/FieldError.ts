/**
 * Inline field-level validation message — a standardized, always-visible error
 * displayed beneath a form field when validation fails. Use for per-field errors
 * rather than form-level banners.
 */
export interface FieldErrorBaseProps {
  /** The validation error text. */
  text: string;
  /**
   * Render the leading exclamation icon.
   * @default true
   */
  withIcon?: boolean;
}
