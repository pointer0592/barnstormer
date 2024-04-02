# useDisclosure

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

The `useDisclosure` utility gives you controls for a Boolean `isOpen` value. This can be used to control the visibility of components.

## Usage



::react-only
```tsx
import { BsButton, useDisclosure } from '@barnstormer/react';

function Basic() {
  const { isOpen, toggle, open, close } = useDisclosure();

  return (
    <>
      <BsButton onClick={open}>Open</BsButton>
      <BsButton onClick={close}>Close</BsButton>
      <BsButton onClick={toggle}>Toggle</BsButton>
      {isOpen && <p>This text shows when isOpen value is true.</p>}
    </>
  );
}
```
::

::vue-only
```vue
<script lang="ts" setup>
import { BsButton, useDisclosure } from '@barnstormer/vue';

const { isOpen, toggle, open, close } = useDisclosure();
</script>

<template>
  <BsButton @click="open">Open</BsButton>
  <BsButton @click="close">Close</BsButton>
  <BsButton @click="toggle()">Toggle</BsButton>
  <p v-if="isOpen">This text shows when isOpen value is true.</p>
</template>
```


::



### With Initial Value

By default, the value of `isOpen` is false. But we can pass an initial value using an option object with an `initialValue`.



::react-only
```tsx
import { BsButton, useDisclosure } from '@barnstormer/react';

function OpenByDefault() {
  const { isOpen, toggle } = useDisclosure({ 
    initialValue: true
  });

  return (
    <>
      <BsButton onClick={toggle}>Toggle</BsButton>
      {isOpen && <p>This will be open by default!</p>}
    </>
  );
}
```
::
::vue-only
```vue
<script lang="ts" setup>
import { BsButton, useDisclosure } from '@barnstormer/vue';

const { isOpen, toggle } = useDisclosure({ 
  initialValue: true
});
</script>

<template>
  <BsButton @click="toggle()">Toggle</BsButton>
  <p v-if="isOpen">This will be open by default!</p>
</template>
```
::


#tab-2

## Parameters

| Name         | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| initialValue | `boolean` | false         |             |

## Return value

| Name   | Type         | Default value | Description |
| ------ | ------------ | ------------- | ----------- |
| isOpen | `boolean`    |               |             |
| open   | `() => void` |               |             |
| close  | `() => void` |               |             |
| toggle | `() => void` |               |             |

#tab-3


::react-only
<<<../../../../../packages/barnstormerui/frameworks/react/hooks/useDisclosure/useDisclosure.ts
::
::vue-only
<<<../../../../../packages/barnstormerui/frameworks/vue/composables/useDisclosure/useDisclosure.ts
::


::
