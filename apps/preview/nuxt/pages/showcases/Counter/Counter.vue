<template>
  <div class="flex items-center gap-2 md:flex-row">
    <BsCounter size="3xs">123</BsCounter>
    <BsCounter size="2xs">123</BsCounter>
    <BsCounter size="xs">123</BsCounter>
    <BsCounter size="sm">123</BsCounter>
    <BsCounter>123</BsCounter>
    <BsCounter size="lg">123</BsCounter>
  </div>
</template>
<script lang="ts" setup>
import { BsCounter } from '@barnstormer/vue';
</script>
