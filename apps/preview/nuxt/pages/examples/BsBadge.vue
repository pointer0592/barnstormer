<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge v-bind="state" :max="Number(state.max)" />
    </BsButton>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { BsBadge, BsBadgePlacement, BsBadgeVariant, BsButton, BsIconShoppingCart } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'BsBadgeExample',
  components: {
    ComponentExample,
    BsBadge,
    BsButton,
    BsIconShoppingCart,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'content',
            description: 'Content to display in the badge.',
            propType: 'string | number',
          },
          {
            type: 'text',
            modelName: 'max',
            description: 'Maximum number of counter to show.',
            propType: 'number',
            propDefaultValue: '99',
          },
          {
            type: 'select',
            modelName: 'variant',
            description: 'Badge can have content or be a simple dot.',
            options: Object.values(BsBadgeVariant),
            propType: 'BsBadgeVariant',
            propDefaultValue: 'standard',
          },
          {
            type: 'select',
            modelName: 'placement',
            description: 'Position of the badge relatively to a container.',
            options: Object.values(BsBadgePlacement),
            propType: 'BsBadgePlacement',
            propDefaultValue: 'top-right',
          },
        ],
        {
          content: ref('1'),
          max: ref(99),
          variant: ref(BsBadgeVariant.standard),
          placement: ref(BsBadgePlacement['top-right']),
        },
      ),
    };
  },
};
</script>
