<template>
  <div class="-mt-4">
    <label
      v-for="{ name, value, label } in radioOptions"
      :key="value"
      class="flex items-center justify-between mt-4 mr-6 rounded cursor-pointer"
    >
      <span class="text-sm font-normal leading-5 font-body">{{ label }}</span>
      <BsRadio v-model="radioModel" :value="value" :name="name" />
    </label>
  </div>
  <div class="flex justify-between">
    <p class="typography-hint-xs text-neutral-500 mt-0.5">Help text</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsRadio } from '@barnstormer/vue';

const radioModel = ref('');
const radioOptions = [
  {
    label: 'Label 1',
    value: 'value-1',
    name: 'radio-1',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-1',
  },
];
</script>
