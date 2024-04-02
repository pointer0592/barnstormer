<template>
  <div class="inline-flex flex-col items-center">
    <div class="flex rounded-md border border-disabled-200 bg-disabled-100">
      <BsButton variant="tertiary" square disabled :aria-controls="inputId" aria-label="Decrease value">
        <BsIconRemove />
      </BsButton>
      <input
        :id="inputId"
        type="number"
        disabled
        class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        placeholder="-"
        :min="min"
        :max="max"
      />

      <BsButton variant="tertiary" square disabled :aria-controls="inputId" aria-label="Increase value">
        <BsIconAdd />
      </BsButton>
    </div>
    <p class="text-negative-700 font-medium text-xs mt-2">Out of stock</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsButton, BsIconAdd, BsIconRemove, useId } from '@barnstormer/vue';

const min = ref(1);
const max = ref(10);
const inputId = useId();
</script>
