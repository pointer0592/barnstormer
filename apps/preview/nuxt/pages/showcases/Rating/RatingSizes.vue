<template>
  <div class="flex flex-col">
    <BsRating :value="4" size="xs" />
    <BsRating :value="4" size="sm" />
    <BsRating :value="4" size="base" />
    <BsRating :value="4" />
    <BsRating :value="4" size="lg" />
    <BsRating :value="4" size="xl" />
  </div>
</template>

<script lang="ts" setup>
import { BsRating } from '@barnstormer/vue';
</script>
