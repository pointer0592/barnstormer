<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsLoaderLinear class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsLoaderLinear, BsLoaderSize, BsLoaderLinearSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propType: 'BsLoaderLinearSize | BsLoaderSize',
      options: [...Object.keys(BsLoaderLinearSize), ...Object.keys(BsLoaderSize)],
      propDefaultValue: BsLoaderSize.base,
      description: 'sets sizes of components',
    },
    {
      type: 'text',
      modelName: 'ariaLabel',
      propType: 'string',
      propDefaultValue: 'loading',
      description: 'sets description text available for screen readers',
    },
  ],
  {
    size: ref(BsLoaderSize.base),
    ariaLabel: ref('loading'),
  },
);
</script>
