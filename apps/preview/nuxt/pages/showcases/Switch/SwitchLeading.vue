<template>
  <label class="flex items-center">
    <BsSwitch v-model="modelCheck" value="value" />
    <span class="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Label</span>
  </label>
  <span class="typography-hint-xs mt-0.5 ml-12 block text-gray-500">Help text</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsSwitch } from '@barnstormer/vue';

const modelCheck = ref(false);
</script>
