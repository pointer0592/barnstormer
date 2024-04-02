<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsProgressCircular :size="state.size" :value="Number(state.value)" :aria-label="state.ariaLabel" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsProgressCircular, BsProgressSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(BsProgressSize),
      propDefaultValue: BsProgressSize.base,
      propType: 'string',
      description: 'This prop is responsible for progress size. There are 8 sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
    },
    {
      type: 'range',
      modelName: 'value',
      propDefaultValue: 0,
      propType: 'number',
      description: 'Progress value',
    },
    {
      type: 'text',
      propType: 'string',
      propDefaultValue: 'Progress element',
      modelName: 'ariaLabel',
      description: 'Aria label value',
    },
  ],
  {
    value: ref(0),
    size: ref(BsProgressSize.base),
    ariaLabel: ref('Progress element'),
  },
);
</script>
