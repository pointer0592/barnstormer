<template>
  <label>
    <span class="typography-text-sm font-medium">Description</span>
    <BsTextarea
      model-value="Hello! I'm a passionate shopper and a regular user of this ecommerce platform."
      class="w-full !bg-disabled-100 !ring-disabled-300 !ring-1 block"
      readonly
    />
  </label>
  <p class="typography-hint-xs text-neutral-500 mt-0.5">Do not include personal or financial information.</p>
</template>

<script lang="ts" setup>
import { BsTextarea } from '@barnstormer/vue';
</script>
