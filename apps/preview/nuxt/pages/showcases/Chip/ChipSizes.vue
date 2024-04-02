<template>
  <BsChip v-model="chipSmallActive" size="sm" class="mr-2"> Small </BsChip>
  <BsChip v-model="chipBaseActive" size="base" class="mr-2"> Base </BsChip>
  <BsChip v-model="chipDefaultActive" size="base"> Default </BsChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsChip } from '@barnstormer/vue';

const chipSmallActive = ref();
const chipBaseActive = ref();
const chipDefaultActive = ref();
</script>
