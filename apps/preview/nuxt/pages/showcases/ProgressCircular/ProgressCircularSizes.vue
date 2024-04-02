<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row mr-6 mb-6">
    <BsProgressCircular :value="30" size="xs" />
    <BsProgressCircular :value="30" size="sm" />
    <BsProgressCircular :value="30" size="base" />
    <BsProgressCircular :value="30" />
    <BsProgressCircular :value="30" size="lg" />
    <BsProgressCircular :value="30" size="xl" />
    <BsProgressCircular :value="30" size="2xl" />
    <BsProgressCircular :value="30" size="3xl" />
    <BsProgressCircular :value="30" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { BsProgressCircular } from '@barnstormer/vue';
</script>
