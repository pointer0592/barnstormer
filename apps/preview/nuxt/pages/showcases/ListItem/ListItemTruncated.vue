<template>
  <BsListItem class="max-w-sm">
    <div class="break-words">Label</div>
    <span class="text-xs text-neutral-500 break-words truncate">
      This text is definitely too long to be displayed in only one line in this component
    </span>
  </BsListItem>
</template>

<script lang="ts" setup>
import { BsListItem } from '@barnstormer/vue';
</script>
