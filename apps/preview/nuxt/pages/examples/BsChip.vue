<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsChip v-model="modelValue" :size="size" :square="square" :input-props="{ disabled, value }">
      <template #prefix>
        <BsThumbnail :size="size === BsChipSize.sm ? BsThumbnailSize.sm : BsThumbnailSize.base" class="bg-gray-500" />
      </template>
      {{ label }}
    </BsChip>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BsChip, BsChipSize, BsThumbnail, BsThumbnailSize } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'BsChipExample',
  components: {
    BsChip,
    ComponentExample,
    BsThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
          },
          {
            type: 'text',
            modelName: 'value',
            propType: 'string',
            description: 'Sets value of the input checkbox element',
          },
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Text next to thumbnail',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(BsChipSize),
            propDefaultValue: BsChipSize.base,
            propType: 'BsChipSize',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'square',
            propType: 'boolean',
            description: 'Useful when only icon and paddings has to be equal',
          },
        ],
        {
          label: ref('Label'),
          size: ref(BsChipSize.base),
          disabled: ref(),
          modelValue: ref(false),
          value: ref(''),
          square: ref(false),
        },
      ),
      BsThumbnailSize,
      BsChipSize,
    };
  },
});
</script>
