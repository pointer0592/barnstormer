# Chip

::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`BsChip` is a toggleable input element. It can be a good alternative to toggle buttons, radio buttons, and single select menus. 

Internally, `BsChip` uses a hidden `<input type="checkbox">` element to handle the selection state. This means that `BsChip` can be used in a form alongside other form elements. If you want to add additional attributes to this hidden input, you can pass `inputProps` to the component.

## Examples

### Sizes

`BsChip` supports 2 sizes that can be set with the `size` prop: `'sm'` and `'base'`. The default size is `'base'`.

<Showcase showcase-name="Chip/ChipSizes">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ChipSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ChipSizes.tsx
::

</Showcase>

### Thumbnails

::vue-only
`BsChip` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `BsThumbnail` to your toggleable chip.
::
::react-only
`BsChip` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `BsThumbnail` to your toggleable chip.

::

<Showcase showcase-name="Chip/ChipWithThumbnail">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ChipWithThumbnail.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ChipWithThumbnail.tsx
::

</Showcase>



### List of chips

We can set attributes in the hidden checkbox input by passing an object to the `inputProps` prop. 

<Showcase showcase-name="Chip/ListOfChips">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ListOfChips.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ListOfChips.tsx
::

</Showcase>


### Deletable behaviour

By adding listeners for change events, we can make `BsChip` act as a deletable item. All chips are active by default, and then, when a chip is clicked, we can remove it by its index in the array.

<Showcase showcase-name="Chip/Deletable">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/Deletable.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/Deletable.tsx
::

</Showcase>

### Rounded chip

`BsChip` accepts a `square` prop that will set equal paddings on all sides of the chip.

<Showcase showcase-name="Chip/WithoutLabel">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/WithoutLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/WithoutLabel.tsx
::

</Showcase>

## Accessibility notes

When using `BsChip` without any text label/description inside, you should specify an `aria-label` on the component so that it can be understood by people using screen readers. 

## Playground

<Generate style="height: 380px" />

#tab-2

## Props

::react-only
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
| `onSelected`| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
| `children`  | `ReactNode`|              |                   |
::

::vue-only
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
| `modelValue`| `boolean`  |  `false`     |                   |


## Slots 

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside chip |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

::
#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/barnstormerui/frameworks/vue/components/BsChip/BsChip.vue
::
::react-only
<<<../../../../../packages/barnstormerui/frameworks/react/components/BsChip/BsChip.tsx
::

::