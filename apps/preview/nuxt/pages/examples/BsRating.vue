<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsRating v-bind="state" :value="Number(state.value)" :max="Number(state.max)" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { BsRating, BsRatingSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const max = ref(5);
const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'range',
      modelName: 'value',
      propDefaultValue: 0,
      propType: 'number',
      options: [
        {
          bind: reactive({
            min: 0,
            max,
            step: 0.1,
          }),
        },
      ],
    },
    {
      type: 'range',
      modelName: 'max',
      propDefaultValue: 5,
      propType: 'number',
      options: [
        {
          bind: {
            min: 1,
            step: 1,
            max: 10,
          },
        },
      ],
    },
    {
      type: 'boolean',
      modelName: 'halfIncrement',
      propType: 'boolean',
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(BsRatingSize),
      propDefaultValue: BsRatingSize.base,
      propType: 'BsRatingSize',
    },
  ],
  {
    value: ref(3),
    max,
    size: ref(BsRatingSize.base),
    halfIncrement: ref(false),
  },
);
</script>
