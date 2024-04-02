<template>
  <div class="flex flex-col">
    <BsRating :value="0" />
    <BsRating :value="3.5" />
    <BsRating :value="3.5" half-increment />
    <BsRating :value="6" :max="8" />
  </div>
</template>

<script lang="ts" setup>
import { BsRating } from '@barnstormer/vue';
</script>
