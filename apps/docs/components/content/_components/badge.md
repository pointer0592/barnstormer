# Badge

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

## Examples

### Basic usage

The badge component must be wrapped with a container that has `class="relative"`. You must provide such a container by yourself, but it gives you the flexibility to put the badge wherever you want. Bagde comes with a "dot" variant, which hides the content. When given content is of type number (or string that could be parsed to number), you can set a maximum limit of that number using `max` prop.

<Showcase showcase-name="Badge/BadgeBasic">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Badge/BadgeBasic.vue
::

::react-only
<<<../../../../preview/next/pages/showcases/Badge/BadgeBasic.tsx
::

</Showcase>

### Placement

You can align the Badge in every corner of the container.

<Showcase showcase-name="Badge/BadgePlacement">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Badge/BadgePlacement.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Badge/BadgePlacement.tsx
::

</Showcase>

### Custom outline

A nifty effect that makes the Badge a bit more attractive is to add an outline that separates the Badge from an element.

<Showcase showcase-name="Badge/BadgeOutline">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Badge/BadgeOutline.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Badge/BadgeOutline.tsx
::

</Showcase>

### Avatars

A common use case for the Badge is to place it on a user's avatar.

<Showcase showcase-name="Badge/BadgeAvatar">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Badge/BadgeAvatar.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Badge/BadgeAvatar.tsx
::

</Showcase>

## Accessibility Notes

The component itself does not provide any specific accessibility features. Please make sure that the content displayed in BsBadge component is meaningful and understandable by all users.

## Playground

<Generate style="height: 380px" />

#tab-2

## Props

| Prop name   | Type               | Default value | Possible values                                        |
| ----------- | ------------------ | ------------- | ------------------------------------------------------ |
| `content`   | `string`            | `number`       |                                                        |
| `max`       | `number`           | `99`          |                                                        |
| `placement` | `BsBadgePlacement` | `top-right`   | `top-right`, `top-left`, `bottom-right`, `bottom-left` |
| `variant`   | `BsBadgeVariant`   | `standard`    | `standard`, `dot`                                      |

#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/barnstormerui/frameworks/vue/components/BsBadge/BsBadge.vue

::
::react-only

<<<../../../../../packages/barnstormerui/frameworks/react/components/BsBadge/BsBadge.tsx

::

::
