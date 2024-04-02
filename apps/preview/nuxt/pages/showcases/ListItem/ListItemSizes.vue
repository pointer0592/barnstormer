<template>
  <div class="flex flex-col max-w-sm gap-4">
    <BsListItem size="sm">
      <span class="break-words">Label</span>
    </BsListItem>
    <BsListItem>
      <span class="break-words">Label</span>
    </BsListItem>
    <BsListItem size="lg">
      <span class="break-words">Label</span>
    </BsListItem>
  </div>
</template>

<script lang="ts" setup>
import { BsListItem } from '@barnstormer/vue';
</script>
