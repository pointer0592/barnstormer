<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsSwitch v-model="modelValue" :value="value" :disabled="disabled" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { BsSwitch } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'BsSwitchExample',
  components: {
    BsSwitch,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: 'false',
            propType: 'boolean',
          },
          {
            type: 'text',
            modelName: 'value',
            propDefaultValue: '',
            propType: 'string',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
        ],
        {
          value: ref('value'),
          disabled: ref(false),
          modelValue: ref(),
        },
      ),
    };
  },
};
</script>
