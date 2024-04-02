<template>
  <div class="flex flex-col gap-y-6 font-body">
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <BsSelect size="sm" placeholder="-- Select --">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </BsSelect>
    </label>
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <BsSelect size="base" placeholder="-- Select --">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </BsSelect>
    </label>
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <BsSelect size="lg" placeholder="-- Select --">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </BsSelect>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { BsSelect } from '@barnstormer/vue';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];
</script>
