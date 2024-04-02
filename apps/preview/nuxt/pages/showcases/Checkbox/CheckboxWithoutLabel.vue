<template>
  <div class="flex">
    <BsCheckbox v-model="modelValue" value="value" />
  </div>
</template>
<script lang="ts" setup>
import { BsCheckbox } from '@barnstormer/vue';

import { ref } from 'vue';
const modelValue = ref([]);
</script>
