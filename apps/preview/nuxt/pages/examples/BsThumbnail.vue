<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsThumbnail :size="size" class="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { BsThumbnail, BsThumbnailSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'BsThumbnailExample',
  components: {
    ComponentExample,
    BsThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(BsThumbnailSize),
            propDefaultValue: BsThumbnailSize.base,
            description: 'Component size',
            propType: 'BsThumbnailSize',
          },
        ],
        {
          size: ref(BsThumbnailSize.base),
        },
      ),
    };
  },
};
</script>
