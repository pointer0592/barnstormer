<template>
  <div class="flex items-center gap-2 md:flex-row">
    <BsCounter size="3xs" pill>123</BsCounter>
    <BsCounter size="2xs" pill>123</BsCounter>
    <BsCounter size="xs" pill>123</BsCounter>
    <BsCounter size="sm" pill>123</BsCounter>
    <BsCounter pill>123</BsCounter>
    <BsCounter size="lg" pill>123</BsCounter>
  </div>
</template>
<script lang="ts" setup>
import { BsCounter } from '@barnstormer/vue';
</script>
