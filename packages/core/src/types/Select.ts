// Select types - new preferred names
// Re-export from Dropdown for shared implementation
export type { Options, DropdownBaseProps } from './Dropdown';

// Create SelectBaseProps as the primary export (same as DropdownBaseProps for now)
import type { DropdownBaseProps } from './Dropdown';
export type SelectBaseProps = DropdownBaseProps;
