<template>
  <div class="flex gap-4 flex-wrap">
    <BsProgressCircular class="!text-cyan-700" :value="70" size="3xl" />
    <BsProgressCircular size="3xl" :value="70" />
    <BsProgressCircular class="!ring-yellow-200" :value="70" size="3xl" />
  </div>
</template>

<script lang="ts" setup>
import { BsProgressCircular } from '@barnstormer/vue';
</script>
