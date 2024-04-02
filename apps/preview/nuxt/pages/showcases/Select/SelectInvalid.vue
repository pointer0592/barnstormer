<template>
  <label>
    <span class="pb-1 text-sm font-medium text-neutral-900 font-body"> Label </span>
    <BsSelect invalid placeholder="-- Select --">
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </BsSelect>
  </label>
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
