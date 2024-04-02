<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsLoaderCircular class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { BsLoaderCircular, BsLoaderSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'BsLoaderCircularExample',
  components: {
    ComponentExample,
    BsLoaderCircular,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propType: 'BsLoaderSize',
            options: [...Object.keys(BsLoaderSize)],
            description: 'sets sizes of components',
          },
          {
            type: 'text',
            modelName: 'ariaLabel',
            propType: 'string',
            propDefaultValue: 'loading',
            description: 'sets text available for screen readers',
          },
        ],
        {
          size: ref(BsLoaderSize.lg),
          ariaLabel: ref('loading'),
        },
      ),
    };
  },
};
</script>
