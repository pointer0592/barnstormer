<template>
  <label>
    <span class="text-sm font-medium">Label</span>
    <BsInput>
      <template #prefix><BsIconPerson /></template>
      <template #suffix><BsIconLockOpen /></template>
    </BsInput>
  </label>
</template>
<script lang="ts" setup>
import { BsInput, BsIconPerson, BsIconLockOpen } from '@barnstormer/vue';
</script>
