<template>
  <label>
    Placement
    <select class="p-2 mx-2 border-2 rounded border-primary-700" @blur="chagePlacement">
      <option value="top">top</option>
      <option value="right">right</option>
      <option value="bottom">bottom</option>
      <option value="left" selected>left</option>
    </select>
  </label>
  <BsButton @click="open = true"> Open Drawer </BsButton>

  <BsDrawer
    v-model="open"
    :placement="placement"
    :class="[
      'bg-neutral-50',
      'p-3',
      'border',
      'border-gray-300',
      { 'max-w-[370px]': placement === 'left' || placement === 'right' },
    ]"
  >
    <div>
      <p class="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
        deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
        minima debitis dolore.
      </p>
      <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
    </div>
  </BsDrawer>
</template>

<script lang="ts" setup>
import { BsDrawer, BsDrawerPlacement, BsButton } from '@barnstormer/vue';
import { ref } from 'vue';

const placement = ref<`${BsDrawerPlacement}`>('left');
const open = ref(false);
const chagePlacement = (event: Event) =>
  (placement.value = (event.target as HTMLSelectElement)?.value as BsDrawerPlacement);
</script>
