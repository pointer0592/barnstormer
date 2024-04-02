<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <BsTooltip v-bind="state"> Hover me! </BsTooltip>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsTooltip, BsPopoverPlacement, BsPopoverStrategy } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'label',
      propType: 'string',
      description: 'Set label value',
    },
    {
      type: 'select',
      options: Object.keys(BsPopoverPlacement),
      modelName: 'placement',
      propType: 'BsPopoverPlacement',
      propDefaultValue: BsPopoverPlacement.top,
      description: 'Initial position of tooltip in reference to trigger',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'BsPopoverStrategy',
      propDefaultValue: BsPopoverStrategy.absolute,
      options: Object.values(BsPopoverStrategy),
      description: 'Tooltip positioning strategy',
    },
    {
      type: 'boolean',
      modelName: 'showArrow',
      propType: 'boolean',
      description: 'Show pointer arrow',
      propDefaultValue: false,
    },
  ],
  {
    label: ref('Tooltip text'),
    placement: ref(BsPopoverPlacement.top),
    strategy: ref(BsPopoverStrategy.absolute),
    showArrow: ref(false),
  },
);
</script>
