---
'@a-little-world/little-world-design-system': minor
'@a-little-world/little-world-design-system-core': minor
---

Add `required` support and accessible error wiring to form components.

- `required` is now a first-class, documented prop on `TextInput`,
  `DatePicker`, `TimePicker` and `RadioGroup` (core types). It renders the
  `*` required indicator via `Label`, forwards native `required` to real form
  elements and `aria-required` to custom controls.
- `Label` accepts `required` and renders the `*` indicator.
- `InputError` accepts an optional `id` so inputs can reference the error
  text through `aria-describedby`.
- Every form control with an `error` prop now exposes `aria-invalid` (and,
  where an `id` is available, `aria-describedby` pointing at the rendered
  `InputError`).
- `CheckboxGroup` is announced as a labelled `group` with `aria-required`.
- Bug fix: `Slider` renders its `error` (previously typed but ignored).
- Bug fix: `TextInput` applies the error border style when `error` is set.
- `InputError` visibility transition sped up from 1s to 0.2s. The reserved
  `min-height` is kept so showing an error does not shift the layout.
