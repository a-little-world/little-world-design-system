# Design System Form Elements Audit

**Date:** June 8, 2026  
**Scope:** Little World Design System (Monorepo: Web, Native, Core)  
**Status:** Comprehensive Analysis Complete

---

## Executive Summary

The Little World Design System has a **robust foundation of form components** with good coverage across web and native platforms. However, there are **3 notable gaps** and **4 naming/consistency adjustments needed** to align with standard Figma form element conventions and improve developer experience.

---

## 1. EXISTING FORM COMPONENTS INVENTORY

### ✅ Core Form Input Components (Web + Native)
| Component | Web | Native | Core Types | Status |
|-----------|-----|--------|-----------|--------|
| **TextInput** | ✅ | ✅ | `TextInputBaseProps` | Complete - Supports text, password, tel |
| **TextArea** | ✅ | ❌ | `TextAreaBaseProps` | Web only - No native equivalent |
| **Checkbox** | ✅ | ✅ | `CheckboxSizes` | Complete - 3 sizes (S, M, L) |
| **RadioGroup** | ✅ | ✅ | `RadioGroupVariations` | Complete - Classic & Pill variants |
| **Dropdown** | ✅ | ✅ | `DropdownBaseProps` | Complete - Single select |
| **Combobox** | ✅ | ❌ | `ComboboxBaseProps` | Web only - Searchable single/multi-select |
| **MultiDropdown** | ✅ | ❌ | `MultiDropdownBaseProps` | Web only - Multi-select |
| **Switch** | ✅ | ❌ | (No core type) | Web only - Toggle control |
| **MultiCheckbox** | ✅ | ❌ | (No core type) | Web only - Multiple checkboxes grid |
| **CheckboxGrid** | ✅ | ❌ | (No core type) | Web only - Checkbox grid layout |

### ✅ Supporting Components
| Component | Purpose | Web | Native |
|-----------|---------|-----|--------|
| **Label** | Form field labeling | ✅ | ✅ |
| **InputError** | Error messaging | ✅ | ✅ |
| **Tooltip** | Helper text & field hints | ✅ | ✅ |

### ✅ Form Layout & Structure Components
| Component | Purpose | Web | Native |
|-----------|---------|-----|--------|
| **Card** | Form container | ✅ | ✅ |
| **Separator** | Visual divider between form sections | ✅ | ✅ |
| **Tabs** | Multi-step forms/form sections | ✅ | ❌ |
| **Stepper** | Progress indicator for multi-step forms | ✅ | ❌ |

---

## 2. FIGMA FORM ELEMENTS MAPPING

### Standard Form Elements in Figma & Their DS Equivalents

#### **Basic Inputs**
```
Figma Element              →  Design System Component
───────────────────────────────────────────────────────
Text Input                 →  TextInput (text, email, password, tel, url)
Text Area                  →  TextArea
Label                      →  Label
Helper Text / Hint         →  Tooltip + InputError
Error State                →  InputError component prop
```

#### **Selection Controls**
```
Figma Element              →  Design System Component
───────────────────────────────────────────────────────
Checkbox                   →  Checkbox
Checkbox Group             →  MultiCheckbox (Web) / Manual composition (Native)
Radio Button               →  RadioGroup (single item)
Radio Group                →  RadioGroup (multiple items)
Toggle / Switch            →  Switch
```

#### **Dropdowns & Selects**
```
Figma Element              →  Design System Component
───────────────────────────────────────────────────────
Dropdown (Single)          →  Dropdown
Dropdown (Multi-select)    →  MultiDropdown (Web) / Dropdown + array (Native)
Searchable Dropdown        →  Combobox (searchable single)
Searchable Multi-Select    →  Combobox (multiple: true)
Autocomplete               →  Combobox (with search)
```

#### **Form Containers & Sections**
```
Figma Element              →  Design System Component
───────────────────────────────────────────────────────
Form Container             →  Card
Form Section Divider       →  Separator
Form Steps / Wizard        →  Stepper + Tabs (for multi-step)
```

#### **Feedback Components**
```
Figma Element              →  Design System Component
───────────────────────────────────────────────────────
Error Message              →  InputError
Success Message            →  StatusMessage (or Toast)
Warning Message            →  Banner (or StatusMessage)
Validation Feedback        →  InputError (inline) + Toast (global)
```

---

## 3. MISSING COMPONENTS (Gap Analysis)

### 🔴 CRITICAL GAPS (Should be added)

| Missing Element | Figma Equivalent | Use Case | Priority | Suggested Implementation |
|-----------------|------------------|----------|----------|-------------------------|
| **File Input** | File Upload / Attachment | Document upload, image selection | HIGH | `FileInput` component with native file handling |
| **Date Input** | Date Picker | Booking, event, form date selection | HIGH | `DateInput` component using native date APIs |
| **Time Input** | Time Picker | Appointment scheduling, time selection | MEDIUM | `TimeInput` or `TimePicker` component |

### 🟡 SECONDARY GAPS (Enhancement needed)

| Component | Issue | Impact | Solution |
|-----------|-------|--------|----------|
| **TextArea** (Native) | Missing in native package | Mobile users can't use multiline text | Export native TextArea wrapper or use RN TextInput |
| **Combobox** (Native) | Missing searchable select | Mobile can't search large lists | Create native Combobox with FlatList search |
| **MultiDropdown** (Native) | Missing multi-select | Mobile limited to single-select | Create native MultiDropdown with checkbox list |
| **Switch** (Native) | Missing toggle component | Mobile can't use toggle controls | Port existing switch to native (Radix equivalent) |

---

## 4. NAMING & CONSISTENCY ADJUSTMENTS NEEDED

### Issue A: Inconsistent Component Naming Across Platforms

**Problem:** `ToolTip` (Native) vs `Tooltip` (Web)

```
✅ CURRENT STATE:
  Web:    /components/Tooltip/
  Native: /components/ToolTip/  ← Different casing

✅ RESOLUTION:
  Standardize to: Tooltip (PascalCase, consistent)
  Action: Rename native component folder & exports
```

**Files to update:**
- `packages/native/src/components/ToolTip/` → `Tooltip/`
- `packages/native/src/index.ts` (export statement)

---

### Issue B: Missing Core Types for Web-Only Components

**Problem:** Components like `Switch`, `MultiCheckbox`, `CheckboxGrid` lack Core types

```
✅ CURRENT STATE:
  Component exists in Web but no type definition in Core
  
✅ IMPACT:
  - Native devs can't reference these types
  - No shared interface contracts
  - Harder to maintain consistency

✅ RESOLUTION:
  Create core type definitions:
  - Switch.ts (toggle control interface)
  - MultiCheckbox.ts (checkbox group interface)
  - FileInput.ts (file upload interface)
```

**Action Items:**
1. Create `packages/core/src/types/Switch.ts`
2. Create `packages/core/src/types/MultiCheckbox.ts`
3. Export from `packages/core/src/types/index.ts`

---

### Issue C: Inconsistent Props Naming

**Problem:** Height enums use different naming patterns

```
✅ CURRENT:
  TextInput:   InputHeight (Small, Medium, Large)
  TextArea:    TextAreaSize (xsmall, small, medium, large) ← Different enum name & values
  Checkbox:    CheckboxSizes (Small, Medium, Large)

✅ RECOMMENDED:
  Standardize across all components:
  - Use consistent enum name: ComponentSize or ComponentHeight
  - Use consistent values: Small, Medium, Large (not xsmall, medium, large)
```

**Files to review:**
- `packages/core/src/types/TextAreaSize`
- `packages/web/src/components/TextArea/TextArea.tsx`

---

### Issue D: Missing Accessibility Type Standardization

**Problem:** Some components have accessibility features, but inconsistent typing

```
✅ CURRENT STATE:
  TextInput:   ariaLabel ✗, accessible (implicit)
  Dropdown:    ariaLabel ✓
  Combobox:    ariaLabel ✓

✅ RESOLUTION:
  Create standardized accessibility type:
  
  // In packages/core/src/types/Accessibility.ts (expand existing)
  export interface AccessibleFormControl {
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaRequired?: boolean;
    role?: string;
  }
```

---

## 5. COMPREHENSIVE RESOLUTION SUMMARY

### Priority 1: IMMEDIATE (Next Sprint)

#### 1.1 Add Missing Core Types
**Effort:** 4 hours | **Impact:** High

```typescript
// packages/core/src/types/Switch.ts
export interface SwitchBaseProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
  label?: string;
}

// packages/core/src/types/FileInput.ts
export interface FileInputBaseProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // bytes
  onFilesSelected: (files: File[]) => void;
  label?: string;
  error?: string;
}
```

**Files to create:**
- `packages/core/src/types/Switch.ts`
- `packages/core/src/types/FileInput.ts`  
- `packages/core/src/types/DateInput.ts`

**Files to update:**
- `packages/core/src/types/index.ts` (add exports)

---

#### 1.2 Standardize Component Naming
**Effort:** 2 hours | **Impact:** Medium

**Action:** Rename `ToolTip` → `Tooltip` in native package
- Rename folder: `packages/native/src/components/ToolTip/` → `Tooltip/`
- Update: `packages/native/src/index.ts`
- Update: `packages/native/src/components/Tooltip/Tooltip.tsx` internal references

---

### Priority 2: SHORT-TERM (Within 2 Sprints)

#### 2.1 Create Missing Components (Web)
**Effort:** 12-16 hours per component | **Impact:** High

**Components to create:**

1. **FileInput Component**
   - Web: `packages/web/src/components/FileInput/`
   - Type-safe file selection
   - Drag-and-drop support
   - Multiple file handling
   - File size validation

2. **DateInput Component**
   - Web: `packages/web/src/components/DateInput/`
   - Calendar picker
   - Format standardization
   - Range support

3. **TimeInput Component**
   - Web: `packages/web/src/components/TimeInput/`
   - Time picker interface
   - 12/24 hour format support

---

#### 2.2 Standardize Props Naming
**Effort:** 3 hours | **Impact:** Medium

**Action:** Normalize size/height props across components

```typescript
// BEFORE (inconsistent)
TextArea: size?: TextAreaSize ('xsmall' | 'small' | 'medium' | 'large')
TextInput: height?: InputHeight ('small' | 'medium' | 'large')

// AFTER (standardized)
TextArea: size?: FormComponentSize ('small' | 'medium' | 'large')
TextInput: height?: FormComponentSize ('small' | 'medium' | 'large')

// packages/core/src/types/index.ts
export enum FormComponentSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
```

**Files to update:**
- `packages/core/src/types/TextArea.ts`
- `packages/web/src/components/TextArea/TextArea.tsx`
- `packages/core/src/types/TextInput.ts`
- Update all references

---

### Priority 3: MEDIUM-TERM (Within 4 Sprints)

#### 3.1 Port Components to Native
**Effort:** 8-12 hours per component | **Impact:** Medium-High

**Components to port:**
1. TextArea → Native RN TextInput wrapper
2. Combobox → Native searchable picker
3. MultiDropdown → Native multi-select
4. Switch → Already exists pattern, enhance
5. FileInput → Native file picker integration
6. DateInput → Native DatePickerIOS/Android

---

#### 3.2 Expand Accessibility Features
**Effort:** 6 hours | **Impact:** Medium

**Actions:**
- Add ARIA labels to all form components
- Create accessibility guidelines in Storybook
- Add accessibility tests for form components
- Document keyboard navigation

---

### Priority 4: LONG-TERM (Roadmap)

#### 4.1 Form Composition Utilities
**Description:** Create form builder utilities
- `useFormField()` hook
- `useFormValidation()` hook
- Auto-labeling and error handling
- Cross-field validation

#### 4.2 Advanced Components
- **Rich Text Editor** (TextArea variant)
- **Phone Number Input** (Enhanced TextInput)
- **Currency Input** (Specialized TextInput)
- **Color Picker** (Palette selector)
- **Slider/Range** (Already exists, but could expand)
- **Rating Component** (StarRating exists, but underutilized)

---

## 6. DETAILED SOLUTIONS & IMPLEMENTATION GUIDE

### Solution 1: Add FileInput Component

```typescript
// packages/core/src/types/FileInput.ts
export interface FileInputBaseProps {
  accept?: string; // 'image/*', '.pdf', etc.
  multiple?: boolean;
  maxSize?: number; // bytes
  maxFiles?: number;
  disabled?: boolean;
  error?: string;
  label: string;
  labelTooltip?: string;
  onFilesSelected: (files: File[]) => void;
  onError?: (error: string) => void;
}

// packages/web/src/components/FileInput/FileInput.tsx
export interface FileInputProps extends FileInputBaseProps {
  id?: string;
  cannotError?: boolean;
  dragActive?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({
  accept,
  multiple,
  maxSize,
  label,
  onFilesSelected,
  onError,
  error,
  ...props
}) => {
  const [dragActive, setDragActive] = useState(false);
  
  const validateFiles = (files: File[]) => {
    if (maxSize && files.some(f => f.size > maxSize)) {
      onError?.('File size exceeds maximum');
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (validateFiles(Array.from(e.dataTransfer.files))) {
      onFilesSelected(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <FileInputWrapper>
      <Label>{label}</Label>
      <DropZone onDrop={handleDrop}>
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => onFilesSelected(Array.from(e.target.files || []))}
        />
      </DropZone>
      {error && <InputError visible>{error}</InputError>}
    </FileInputWrapper>
  );
};
```

### Solution 2: Add DateInput Component

```typescript
// packages/core/src/types/DateInput.ts
export interface DateInputBaseProps {
  value?: string; // ISO format: YYYY-MM-DD
  onChange: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  error?: string;
  label: string;
  labelTooltip?: string;
}

// packages/web/src/components/DateInput/DateInput.tsx
const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  label,
  error,
  ...props
}) => {
  return (
    <DateInputWrapper>
      <Label>{label}</Label>
      <Input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={minDate}
        max={maxDate}
        {...props}
      />
      {error && <InputError visible>{error}</InputError>}
    </DateInputWrapper>
  );
};
```

### Solution 3: Standardization Script

```bash
# Create a migration guide for developers

## Step 1: Update TextArea Size Enum
OLD: TextAreaSize.Xsmall → NEW: FormComponentSize.Small

## Step 2: Use consistent imports
OLD: import { TextAreaSize } from '@a-little-world/...'
NEW: import { FormComponentSize } from '@a-little-world/...'

## Step 3: Update all usages
OLD: size={TextAreaSize.Small}
NEW: size={FormComponentSize.Small}
```

---

## 7. ACTIONABLE CHECKLIST

### Phase 1: Naming & Types (Week 1)
- [ ] Create `packages/core/src/types/Switch.ts`
- [ ] Create `packages/core/src/types/FileInput.ts`
- [ ] Create `packages/core/src/types/DateInput.ts`
- [ ] Update `packages/core/src/types/index.ts` exports
- [ ] Create `FormComponentSize` enum for consistency
- [ ] Rename `ToolTip` → `Tooltip` in native

### Phase 2: New Components (Weeks 2-3)
- [ ] Implement Web `FileInput` component
- [ ] Implement Web `DateInput` component
- [ ] Implement Web `TimeInput` component
- [ ] Add Storybook stories for each
- [ ] Add unit tests

### Phase 3: Documentation & Porting (Weeks 4-5)
- [ ] Create component migration guide
- [ ] Update design system README
- [ ] Create form composition examples
- [ ] Port components to native (TextArea, Combobox, MultiDropdown)

### Phase 4: Testing & QA (Week 6)
- [ ] Test all new components
- [ ] Update Figma library to match
- [ ] Update design tokens if needed
- [ ] Performance testing

---

## 8. COMPONENT INVENTORY TABLE (Complete)

| Component | Core Type | Web | Native | Status | Notes |
|-----------|-----------|-----|--------|--------|-------|
| TextInput | ✅ | ✅ | ✅ | Complete | Supports text, password, tel |
| TextArea | ✅ | ✅ | ❌ | Partial | Missing native |
| Label | ❌ | ✅ | ✅ | Complete | Supporting component |
| Checkbox | ✅ | ✅ | ✅ | Complete | 3 sizes |
| RadioGroup | ✅ | ✅ | ✅ | Complete | Classic & Pill |
| Dropdown | ✅ | ✅ | ✅ | Complete | Single select |
| Combobox | ✅ | ✅ | ❌ | Partial | Searchable, missing native |
| MultiDropdown | ✅ | ✅ | ❌ | Partial | Multi-select, web only |
| **Switch** | ❌ | ✅ | ❌ | Partial | **Needs core type & native** |
| MultiCheckbox | ❌ | ✅ | ❌ | Partial | **Needs core type** |
| CheckboxGrid | ❌ | ✅ | ❌ | Partial | **Needs core type** |
| InputError | ❌ | ✅ | ✅ | Complete | Supporting component |
| Tooltip | ❌ | ✅ | ✅ | Complete | Native needs rename |
| **FileInput** | ❌ | ❌ | ❌ | **MISSING** | **HIGH PRIORITY** |
| **DateInput** | ❌ | ❌ | ❌ | **MISSING** | **HIGH PRIORITY** |
| **TimeInput** | ❌ | ❌ | ❌ | **MISSING** | **MEDIUM PRIORITY** |
| Button | ❌ | ✅ | ✅ | Complete | Not form-specific |
| Card | ❌ | ✅ | ✅ | Complete | Form container |
| Separator | ❌ | ✅ | ✅ | Complete | Section divider |
| Tabs | ❌ | ✅ | ❌ | Partial | For form sections |
| Stepper | ❌ | ✅ | ❌ | Partial | Multi-step forms |
| StatusMessage | ❌ | ✅ | ❌ | Partial | Form feedback |
| Toast | ❌ | ✅ | ❌ | Partial | Global notifications |
| Banner | ❌ | ✅ | ✅ | Complete | Form-level messages |

---

## 9. QUICK REFERENCE: MIGRATION EXAMPLES

### Example 1: Using New FileInput
```tsx
<FileInput
  label="Upload Document"
  accept=".pdf,.doc,.docx"
  maxSize={5 * 1024 * 1024} // 5MB
  onFilesSelected={(files) => handleUpload(files)}
  error={uploadError}
/>
```

### Example 2: Using New DateInput
```tsx
<DateInput
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
  minDate="2024-01-01"
  maxDate="2024-12-31"
/>
```

### Example 3: Using Standardized Enums
```tsx
// OLD
<TextArea size={TextAreaSize.Small} />

// NEW
<TextArea size={FormComponentSize.Small} />
```

---

## Summary of Findings

✅ **Strengths:**
- Solid foundation of form components
- Good coverage across Web and Native
- Well-typed components in Core
- Consistent error handling pattern
- Accessible component structure

⚠️ **Gaps:**
- 3 critical missing components (File, Date, Time inputs)
- Limited native support for some Web-only components
- Naming inconsistencies (`ToolTip` vs `Tooltip`)
- Missing core types for Switch, MultiCheckbox

📋 **Quick Wins:**
1. Rename `ToolTip` → `Tooltip` (1 hour)
2. Add core types for existing Web components (2 hours)
3. Standardize size enums (2 hours)

🚀 **Next Steps:**
1. Create core types (Week 1)
2. Build FileInput, DateInput (Weeks 2-3)
3. Update documentation (Week 4)
4. Port to Native (Weeks 5-6)

---

**Generated:** June 8, 2026  
**Prepared for:** Design System Team  
**Recommended Review:** Design System Lead + Product Team
