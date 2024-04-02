<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row">
    <BsProgressLinear :value="30" class="w-12" size="xs" />
    <BsProgressLinear :value="30" class="w-12" size="sm" />
    <BsProgressLinear :value="30" class="w-12" size="base" />
    <BsProgressLinear :value="30" class="w-12" />
    <BsProgressLinear :value="30" class="w-12" size="lg" />
    <BsProgressLinear :value="30" class="w-12" size="xl" />
    <BsProgressLinear :value="30" class="w-12" size="2xl" />
    <BsProgressLinear :value="30" class="w-12" size="3xl" />
    <BsProgressLinear :value="30" class="w-12" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { BsProgressLinear } from '@barnstormer/vue';
</script>
