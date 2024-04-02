# LoaderCircular

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`BsLoaderCircular` is animated loading spinner that can be used to show that some content is loading.

## Examples

### Sizes

`BsLoaderCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="LoaderCircular/LoaderCircularSizes" style="min-height:320px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/LoaderCircular/LoaderCircularSizes.tsx
::

</Showcase>

### Customizing colors

By default, `BsLoaderCircular` uses `primary-700` as the animated shape color (customizable by setting text color) and `neutral-300` for the background ring. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using the [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::tip
Learn more about [overriding default styles](/customization/overriding-default-styles) in Barnstormer UI.
::

<Showcase showcase-name="LoaderCircular/LoaderCircularColors">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularColors.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/LoaderCircular/LoaderCircularColors.tsx
::

</Showcase>

## Accessibility notes

`BsLoaderCircular` uses `aria-live="polite"` to allow screen readers to read the loading status. This can be overriden by passing your own `aria-live` value to the component.

It's important to properly set `aria-label` for screen readers to read proper information while target component is loading. Default value is set to `loading`.


## Playground

<Generate style="height: 450px" />

#tab-2

## Props

::vue-only
| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      `BsLoaderSize`        | `'base'`           | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel`    |      `string`                | `'loading'`                     |                                      |
::
::react-only
| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      `BsLoaderSize`        | `'base'`           | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel`    |      `string`                | `'loading'`                     |                                      |
| `className`             |  `string`                    |               |                                  |            |
::

#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/barnstormerui/frameworks/vue/components/BsLoaderCircular/BsLoaderCircular.vue
::
::react-only
<<<../../../../../packages/barnstormerui/frameworks/react/components/BsLoaderCircular/BsLoaderCircular.tsx
::
::
