<template>
  <div class="flex flex-col">
    <BsRating class="!text-red-600" :value="4" />
    <BsRating class="!text-purple-500" :value="4" />
    <BsRating class="!text-cyan-700" :value="4" />
  </div>
</template>

<script lang="ts" setup>
import { BsRating } from '@barnstormer/vue';
</script>
