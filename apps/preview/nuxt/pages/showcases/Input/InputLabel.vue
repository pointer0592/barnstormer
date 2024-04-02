<template>
  <div class="flex flex-col gap-y-5">
    <label>
      <span class="text-sm font-medium">Label</span>
      <BsInput size="sm" />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <BsInput />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <BsInput size="lg" />
    </label>
  </div>
</template>
<script lang="ts" setup>
import { BsInput } from '@barnstormer/vue';
</script>
