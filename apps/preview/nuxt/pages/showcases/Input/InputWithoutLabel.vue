<template>
  <div class="flex flex-col gap-y-5">
    <BsInput size="sm" aria-label="Label size sm" />
    <BsInput aria-label="Label size base" />
    <BsInput size="lg" aria-label="Label size lg" />
  </div>
</template>
<script lang="ts" setup>
import { BsInput } from '@barnstormer/vue';
</script>
