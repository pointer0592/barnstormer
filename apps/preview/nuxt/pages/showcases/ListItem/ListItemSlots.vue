<template>
  <BsListItem class="max-w-sm">
    <template #prefix><BsIconTune /></template>
    <span class="break-words">
      Label
      <BsCounter class="ml-2">123</BsCounter>
    </span>
    <span class="text-xs break-words text-neutral-500">Secondary text</span>
    <template #suffix><BsIconChevronRight /></template>
  </BsListItem>
</template>

<script lang="ts" setup>
import { BsListItem, BsCounter, BsIconChevronRight, BsIconTune } from '@barnstormer/vue';
</script>
