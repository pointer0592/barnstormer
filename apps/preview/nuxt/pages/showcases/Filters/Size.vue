<template>
  <BsAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Size</p>
        <BsIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <ul class="grid grid-cols-5 gap-2">
      <li v-for="({ label, value, isAvailable }, index) in chipSizes" :key="index">
        <BsChip v-model="selectedSizes" class="w-full" size="sm" :input-props="{ value, disabled: !isAvailable }">
          {{ label }}
        </BsChip>
      </li>
    </ul>
  </BsAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsChip, BsAccordionItem, BsIconChevronLeft } from '@barnstormer/vue';

const open = ref(true);
const selectedSizes = ref([]);
const chipSizes = ref([
  { id: 's1', label: '6', value: '6', isAvailable: true },
  { id: 's2', label: '6.5', value: '6.5', isAvailable: true },
  { id: 's3', label: '7', value: '7.5', isAvailable: true },
  { id: 's4', label: '8', value: '8', isAvailable: false },
  { id: 's5', label: '8.5', value: '8.5', isAvailable: false },
  { id: 's6', label: '9', value: '9', isAvailable: true },
  { id: 's7', label: '9.5', value: '9.5', isAvailable: true },
  { id: 's8', label: '10', value: '10', isAvailable: false },
  { id: 's9', label: '10.5', value: '10.5', isAvailable: true },
  { id: 's10', label: '11', value: '11', isAvailable: true },
  { id: 's11', label: '11.5', value: '11.5', isAvailable: true },
  { id: 's12', label: '12', value: '12', isAvailable: true },
]);
</script>
