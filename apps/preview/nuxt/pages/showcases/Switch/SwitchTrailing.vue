<template>
  <label class="flex items-center justify-between">
    <span class="text-base text-gray-900 cursor-pointer font-body">Label</span>
    <BsSwitch v-model="modelCheck" value="value" />
  </label>
  <span class="typography-hint-xs mt-0.5 block text-gray-500">Help text</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsSwitch } from '@barnstormer/vue';

const modelCheck = ref(false);
</script>
