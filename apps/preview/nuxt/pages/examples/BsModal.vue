<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsButton @click="state.modelValue = !state.modelValue"> Open Modal </BsButton>

    <BsModal v-bind="state" v-model="state.modelValue" class="max-w-sm">
      <template v-if="state.SlotDefault">{{ state.SlotDefault }}</template>
      <template v-else>
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
          deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
          minima debitis dolore.
        </p>
        <strong>You can close Modal by clicking outside or focus and use ESC button</strong>
      </template>
    </BsModal>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsModal, BsButton } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot, replaces example modal content',
    },
    {
      type: 'boolean',
      modelName: 'modelValue',
      propType: 'boolean',
      propDefaultValue: false,
      description: 'If true modal is visible',
    },
    {
      type: 'text',
      modelName: 'tag',
      propType: 'string',
      propDefaultValue: 'div',
      description: 'Tag of modal HTML element',
    },
    {
      type: 'boolean',
      modelName: 'disableClickAway',
      propType: 'boolean',
      propDefaultValue: false,
      description: "If true can't close modal when clicking outside of modal",
    },
    {
      type: 'boolean',
      modelName: 'disableEsc',
      propType: 'boolean',
      propDefaultValue: false,
      description: "If true can't modal drawer when using ESC keyboard button",
    },
  ],
  {
    SlotDefault: ref(),
    modelValue: ref(),
    tag: ref(),
    disableClickAway: ref(),
    disableEsc: ref(),
  },
);
</script>
