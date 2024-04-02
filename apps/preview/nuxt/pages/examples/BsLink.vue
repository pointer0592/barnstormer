<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsLink v-bind="state">
      <template v-if="state.SlotDefault" #default>
        {{ state.SlotDefault }}
      </template>
    </BsLink>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsLink, BsLinkVariant } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'href',
      propType: 'string',
      description: 'Only for demonstration purposes. Component href attribute',
    },
    {
      type: 'select',
      modelName: 'variant',
      propType: 'BsLinkVariant',
      propDefaultValue: 'primary',
      options: Object.keys(BsLinkVariant),
    },
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
  ],
  {
    SlotDefault: ref('Link'),
    href: ref('#'),
    variant: ref(BsLinkVariant.primary),
  },
);
</script>
