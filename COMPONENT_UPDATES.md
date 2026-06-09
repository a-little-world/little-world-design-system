# Component Naming & Extension Changes

## Summary
This PR implements a comprehensive update to the design system with component renames, new components, and enhanced functionality to better align with industry standards and support modern form/data use cases.

## Changes

### Component Naming Changes

#### 1. Dropdown → Select (Primary)
- **Files Updated:**
  - `packages/core/src/types/Select.ts` (new)
  - `packages/core/src/types/Dropdown.ts` (updated - backwards compatibility)
  - `packages/native/src/components/Select/` (new)
  - `packages/native/src/components/Dropdown/Dropdown.tsx` (marked as deprecated)

- **Details:**
  - Primary component renamed to `Select` to align with industry standards
  - Old `Dropdown` component maintained for backwards compatibility
  - Both components support the same props via `SelectBaseProps` and `DropdownBaseProps` aliases
  - Motivation: "Select" is the standard web terminology for dropdown inputs

#### 2. RadioGroup Enhanced with Orientation
- **Files Updated:**
  - `packages/core/src/types/RadioGroup.ts` - Added `orientation?: 'vertical' | 'horizontal'`
  - `packages/native/src/components/RadioGroup/RadioGroup.tsx` - Implemented orientation support

- **Details:**
  - Default orientation: `'vertical'`
  - Supports both vertical and horizontal layouts
  - Uses flexbox for flexible layout management

#### 3. Status Component Aliases
- **Files Updated:**
  - `packages/core/src/types/Status.ts`

- **Aliases Added:**
  - `StatusMessageBaseProps` → alias for `StatusBaseProps`
  - `AlertBaseProps` → alias for `StatusBaseProps`
  - `FormMessageBaseProps` → alias for `StatusBaseProps`

- **Motivation:** Better semantic naming for different use cases

#### 4. Tooltip Extended with FieldHint
- **Files Updated:**
  - `packages/core/src/types/Tooltip.ts` - Added extended props
  - `packages/core/src/types/FieldHint.ts` (new)
  - `packages/native/src/components/FieldHint/` (new)

- **Extensions:**
  - `TooltipExtendedProps` with optional `icon` and `className`
  - `FieldHintTooltipProps` alias for semantic field help text

### New Components Created

#### Form Components

##### 1. CheckboxGroup
- **Files:**
  - `packages/core/src/types/CheckboxGroup.ts`
  - `packages/native/src/components/CheckboxGroup/`

- **Props:**
  - `items: CheckboxGroupItem[]`
  - `values?: string[]`
  - `onValuesChange?: (values: string[]) => void`
  - `orientation?: 'vertical' | 'horizontal'`
  - `error?: string`
  - `label?: string`
  - `disabled?: boolean`

- **Features:**
  - Group multiple checkboxes
  - Vertical/horizontal layout support
  - Error state management

##### 2. FieldError
- **Files:**
  - `packages/core/src/types/FieldError.ts`
  - `packages/native/src/components/FieldError/`

- **Props:**
  - `children?: ReactNode`
  - `visible?: boolean`
  - `icon?: ReactNode`
  - `className?: string`

- **Purpose:** Dedicated error display for form fields

##### 3. FieldHint
- **Files:**
  - `packages/core/src/types/FieldHint.ts`
  - `packages/native/src/components/FieldHint/`

- **Props:**
  - `text: string`
  - `trigger?: ReactNode`
  - `icon?: ReactNode`
  - `open?: boolean`
  - `side?: 'top' | 'right' | 'bottom' | 'left'`

- **Purpose:** Semantic help text for form fields

##### 4. DatePicker
- **Files:**
  - `packages/core/src/types/DatePicker.ts`
  - `packages/native/src/components/DatePicker/`

- **Props:**
  - `value?: Date | null`
  - `onChange: (date: Date | null) => void`
  - `minDate?: Date`
  - `maxDate?: Date`
  - `format?: string`
  - `placeholder?: string`
  - `label?: string`
  - `error?: string`
  - `disabled?: boolean`

- **Note:** Currently placeholder implementation; ready for full calendar UI integration

##### 5. TimePicker
- **Files:**
  - `packages/core/src/types/TimePicker.ts`
  - `packages/native/src/components/TimePicker/`

- **Props:**
  - `value?: string | null`
  - `onChange: (time: string | null) => void`
  - `format?: '12' | '24'`
  - `step?: number`
  - `placeholder?: string`
  - `label?: string`
  - `error?: string`

- **Note:** Currently placeholder implementation; ready for full time picker UI

##### 6. SearchableSelect
- **Files:**
  - `packages/core/src/types/SearchableSelect.ts`
  - `packages/native/src/components/SearchableSelect/`

- **Props:**
  - `options: Array<{ value: string; label: string }>`
  - `value?: string`
  - `onValueChange: (value: string) => void`
  - `onSearch?: (searchTerm: string) => void`
  - `searchPlaceholder?: string`
  - `clearable?: boolean`

- **Purpose:** Select component with search/filter for large option lists

##### 7. FormRow
- **Files:**
  - `packages/core/src/types/FormRow.ts`
  - `packages/native/src/components/FormRow/`

- **Props:**
  - `children: ReactNode`
  - `gap?: 'small' | 'medium' | 'large'`
  - `columns?: number`

- **Purpose:** Horizontal field alignment for form layouts

#### Layout/Overlay Components

##### 1. Modal
- **Files:**
  - `packages/core/src/types/Modal.ts`
  - `packages/native/src/components/Modal/`

- **Props:**
  - `isOpen: boolean`
  - `onClose: () => void`
  - `title?: ReactNode`
  - `children: ReactNode`
  - `footer?: ReactNode`
  - `size?: 'small' | 'medium' | 'large'`
  - `closeButton?: boolean`
  - `backdrop?: boolean`

- **Features:**
  - Configurable sizes
  - Backdrop click handling
  - Header and footer slots

##### 2. FileUploader
- **Files:**
  - `packages/core/src/types/FileUploader.ts`
  - `packages/native/src/components/FileUploader/`

- **Props:**
  - `onFilesSelected: (files: File[]) => void`
  - `accept?: string`
  - `multiple?: boolean`
  - `maxFileSize?: number`
  - `maxFiles?: number`
  - `dragAndDrop?: boolean`

- **Features:**
  - Multiple file selection
  - File type filtering
  - Size validation support

#### Data/Visualization Components

##### 1. DataGrid/Table
- **Files:**
  - `packages/core/src/types/DataGrid.ts`
  - `packages/native/src/components/DataGrid/`

- **Props:**
  - `columns: DataGridColumn[]`
  - `data: any[]`
  - `paginated?: boolean`
  - `pageSize?: number`
  - `sortable?: boolean`
  - `selectable?: boolean`

- **Features:**
  - Column configuration
  - Pagination support
  - Custom row rendering

##### 2. PDFViewer
- **Files:**
  - `packages/core/src/types/PDFViewer.ts`
  - `packages/native/src/components/PDFViewer/`

- **Props:**
  - `src: string | ArrayBuffer`
  - `zoom?: boolean`
  - `download?: boolean`
  - `print?: boolean`
  - `controls?: boolean`

- **Features:**
  - PDF preview
  - Control toolbar options

##### 3. ChartLibrary
- **Files:**
  - `packages/core/src/types/ChartLibrary.ts`
  - `packages/native/src/components/ChartLibrary/`

- **Props:**
  - `type: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'radar'`
  - `data: Array<{ label: string; value: number }>`
  - `legend?: boolean`
  - `tooltip?: boolean`
  - `responsive?: boolean`

- **Features:**
  - Multiple chart types
  - Legend and tooltip support
  - Responsive design

##### 4. Signature
- **Files:**
  - `packages/core/src/types/Signature.ts`
  - `packages/native/src/components/Signature/`

- **Props:**
  - `onSignatureSave: (signatureDataUrl: string) => void`
  - `penColor?: string`
  - `penSize?: number`
  - `backgroundColor?: string`

- **Features:**
  - Signature capture
  - Clear/Save/Cancel buttons

### Files Modified

#### Core Package (`packages/core/src/types/`)
- `index.ts` - Added new type exports
- `Dropdown.ts` - Added backwards compatibility re-export
- `RadioGroup.ts` - Added `orientation` prop
- `Status.ts` - Added semantic aliases
- `Tooltip.ts` - Extended with additional props

#### Native Package (`packages/native/src/`)
- `index.ts` - Updated with all new component exports
- `components/RadioGroup/RadioGroup.tsx` - Added orientation support
- `components/Dropdown/Dropdown.tsx` - Marked as deprecated
- All new component folders created

### New Type Files Created
- `Select.ts` - Primary select component types
- `CheckboxGroup.ts` - Checkbox group types
- `FieldError.ts` - Field error types
- `FieldHint.ts` - Field hint types
- `DatePicker.ts` - Date picker types
- `TimePicker.ts` - Time picker types
- `SearchableSelect.ts` - Searchable select types
- `FormRow.ts` - Form row layout types
- `Modal.ts` - Modal dialog types
- `FileUploader.ts` - File uploader types
- `DataGrid.ts` - Data grid/table types
- `PDFViewer.ts` - PDF viewer types
- `ChartLibrary.ts` - Chart types
- `Signature.ts` - Signature capture types

### New Component Folders Created
All in `packages/native/src/components/`:
- `Select/` - Primary select component
- `CheckboxGroup/` - Checkbox group
- `FieldError/` - Field error display
- `FieldHint/` - Field help text
- `DatePicker/` - Date picker
- `TimePicker/` - Time picker
- `SearchableSelect/` - Searchable select
- `FormRow/` - Form row layout
- `Modal/` - Modal dialog
- `FileUploader/` - File upload
- `DataGrid/` - Data grid/table
- `PDFViewer/` - PDF viewer
- `ChartLibrary/` - Charts
- `Signature/` - Signature capture

## Migration Guide

### For existing Dropdown users:
```typescript
// Old (still works)
import { Dropdown } from '@a-little-world/little-world-design-system';

// New (recommended)
import { Select } from '@a-little-world/little-world-design-system';
```

### For new RadioGroup usage:
```typescript
// Vertical (default)
<RadioGroup items={items} />

// Horizontal
<RadioGroup items={items} orientation="horizontal" />
```

### Using new Status aliases:
```typescript
// All equivalent to Status
<Alert type={StatusTypes.Error} />
<FormMessage type={StatusTypes.Success} />
<StatusMessage type={StatusTypes.Warning} />
```

## Testing Notes

- All new components include placeholder implementations ready for full feature development
- Type safety maintained across all new components
- Backwards compatibility preserved for existing APIs
- All exports properly updated in index files

## Breaking Changes
None - All changes are backwards compatible. `Dropdown` still exports the same component, and all new APIs are additive.

## Future Enhancements

The following components are ready for advanced feature implementation:
- `DatePicker` - Integrate calendar UI library
- `TimePicker` - Add time wheel/spinner UI
- `DataGrid` - Add column sorting, advanced filtering
- `PDFViewer` - Integrate PDF.js or similar library
- `ChartLibrary` - Integrate chart library (recharts, chart.js, etc.)
- `Signature` - Add actual signature pad library (react-signature-canvas, etc.)
