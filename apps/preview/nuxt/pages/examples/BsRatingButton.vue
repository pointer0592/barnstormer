<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsRatingButton v-bind="state" v-model="state.modelValue" :max="Number(state.max)" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { BsRatingButton } from '@barnstormer/vue';
import { BsRatingButtonSize } from '@barnstormer/shared';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const max = ref(5);
const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'range',
      modelName: 'modelValue',
      propDefaultValue: 0,
      propType: 'number',
      options: [
        {
          bind: reactive({
            min: 0,
            max,
            step: 1,
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
      type: 'select',
      modelName: 'size',
      propType: 'BsRatingButtonSize',
      propDefaultValue: BsRatingButtonSize.base,
      options: Object.values(BsRatingButtonSize),
    },
    {
      type: 'boolean',
      modelName: 'disabled',
      propType: 'boolean',
      propDefaultValue: false,
    },
  ],
  {
    modelValue: ref(0),
    max,
    disabled: ref(false),
    size: ref(BsRatingButtonSize.base),
  },
);
</script>
