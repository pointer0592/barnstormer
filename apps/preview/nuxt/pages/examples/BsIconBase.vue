<template>
  <ComponentExample :controls-attrs="state.controlsAttrs">
    BsIconPackage imported from `@barnstormer/vue`: <br />
    <BsIconPackage :style="{ color: state.colorExample.value }" :size="state.size.value" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsIconSize, BsIconPackage } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const state = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'BsIconSize.base',
      propType: 'BsIconSize',
      options: Object.keys(BsIconSize),
    },
    {
      type: 'select',
      modelName: 'colorExample',
      description: '(not a prop) example showing possibility to change icons color',
      options: ['black', 'red', 'blue', 'green'],
    },
  ],
  {
    size: ref(BsIconSize.base),
    colorExample: ref('black'),
  },
);
</script>
