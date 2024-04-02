<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <BsButton @click="state.modelValue = !state.modelValue"> Open Drawer </BsButton>

    <BsDrawer
      v-bind="state"
      v-model="modelValue"
      :class="[
        'bg-neutral-50',
        'p-3',
        { 'max-w-[370px]': placement === BsDrawerPlacement.left || placement === BsDrawerPlacement.right },
      ]"
    >
      <template v-if="SlotDefault">{{ SlotDefault }}</template>
      <div v-else>
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
          deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
          minima debitis dolore.
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </BsDrawer>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { BsDrawer, BsButton, BsDrawerPlacement } from '@barnstormer/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'BsSideSheetExample',
  components: {
    ComponentExample,
    BsDrawer,
    BsButton,
  },
  setup() {
    return {
      BsDrawerPlacement,
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'SlotDefault',
            description: 'Only for demonstration purposes. Default slot, replaces example drawer content',
          },
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
            propDefaultValue: false,
            description: 'If true drawer is visible',
          },
          {
            type: 'select',
            modelName: 'placement',
            options: Object.keys(BsDrawerPlacement),
            propType: 'enum',
            propDefaultValue: BsDrawerPlacement.left,
            description: 'Placement of drawer',
          },
          {
            type: 'text',
            modelName: 'tag',
            propType: 'string',
            propDefaultValue: 'aside',
            description: 'Tag of drawer HTML element',
          },
          {
            type: 'boolean',
            modelName: 'disableClickAway',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If true can't close drawer when clicking outside drawer",
          },
          {
            type: 'boolean',
            modelName: 'disableEsc',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If true can't close drawer when using ESC keyboard button",
          },
        ],
        {
          SlotDefault: ref(),
          modelValue: ref(),
          placement: ref(BsDrawerPlacement.left),
          tag: ref(),
          disableClickAway: ref(),
          disableEsc: ref(),
        },
      ),
    };
  },
};
</script>
