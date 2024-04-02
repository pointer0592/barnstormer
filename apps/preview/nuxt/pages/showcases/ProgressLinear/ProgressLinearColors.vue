<template>
  <div class="flex gap-4 flex-wrap">
    <BsProgressLinear class="w-12 !text-cyan-700" :value="60" size="lg" />
    <BsProgressLinear class="w-12" size="lg" :value="60" />
    <BsProgressLinear class="w-12 !bg-yellow-200" :value="60" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { BsProgressLinear } from '@barnstormer/vue';
</script>
