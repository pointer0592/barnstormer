<template>
  <div class="flex items-center">
    <BsCheckbox id="checkbox" v-model="modelValue" value="value" class="peer" />
    <label class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900" for="checkbox">
      Label
    </label>
  </div>
  <div class="flex justify-between ml-8">
    <p class="typography-hint-xs mt-0.5 text-neutral-500">Help text</p>
  </div>
</template>
<script lang="ts" setup>
import { BsCheckbox } from '@barnstormer/vue';
import { ref } from 'vue';

const modelValue = ref([]);
</script>
