<template>
  <div class="flex gap-4 flex-wrap">
    <BsLoaderLinear class="w-12 !text-cyan-700" size="lg" />
    <BsLoaderLinear class="w-12" size="lg" />
    <BsLoaderLinear class="w-12 !bg-yellow-200" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { BsLoaderLinear } from '@barnstormer/vue';
</script>
