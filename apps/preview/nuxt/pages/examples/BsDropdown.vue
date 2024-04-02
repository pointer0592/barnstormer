<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsDropdown v-bind="state" v-model="state.modelValue">
      <template #trigger>
        <BsButton @click="state.modelValue = !state.modelValue">Toggle</BsButton>
      </template>
      <ul class="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </BsDropdown>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsDropdown, BsButton, BsPopoverPlacement, BsPopoverStrategy } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'boolean',
      modelName: 'modelValue',
      propType: 'boolean',
      isRequired: true,
      description: 'Controls floating content visibility',
    },
    {
      type: 'select',
      modelName: 'placement',
      propType: 'BsPopoverPlacement',
      propDefaultValue: BsPopoverPlacement.bottom,
      options: Object.values(BsPopoverPlacement),
      description:
        'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'BsPopoverStrategy',
      propDefaultValue: BsPopoverStrategy.absolute,
      options: Object.values(BsPopoverStrategy),
      description: 'Dropdown positioning strategy',
    },
  ],
  {
    modelValue: ref(false),
    placement: ref(BsPopoverPlacement.bottom),
    strategy: ref(BsPopoverStrategy.absolute),
  },
);
</script>
