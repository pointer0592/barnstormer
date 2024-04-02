<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row">
    <BsLoaderLinear class="w-12" size="minimal" />
    <BsLoaderLinear class="w-12" size="xs" />
    <BsLoaderLinear class="w-12" size="sm" />
    <BsLoaderLinear class="w-12" />
    <BsLoaderLinear class="w-12" size="base" />
    <BsLoaderLinear class="w-12" size="lg" />
    <BsLoaderLinear class="w-12" size="xl" />
    <BsLoaderLinear class="w-12" size="2xl" />
    <BsLoaderLinear class="w-12" size="3xl" />
    <BsLoaderLinear class="w-12" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { BsLoaderLinear } from '@barnstormer/vue';
</script>
