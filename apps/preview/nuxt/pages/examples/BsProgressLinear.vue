<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsProgressLinear :size="state.size" :value="Number(state.value)" :aria-label="state.ariaLabel" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsProgressLinear, BsProgressSize, BsProgressLinearSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      options: [...Object.keys(BsProgressLinearSize), ...Object.keys(BsProgressSize)],
      propDefaultValue: BsProgressSize.base,
      propType: 'BsProgressLinearSize | BsProgressSize',
      description:
        'This prop is responsible for progress size. There are 9 sizes: minimal, xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
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
