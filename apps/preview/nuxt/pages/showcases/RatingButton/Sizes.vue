<template>
  <div>
    <BsRatingButton v-model="modelValue1" size="sm" />
    <BsRatingButton v-model="modelValue2" size="base" />
    <BsRatingButton v-model="modelValue3" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsRatingButton } from '@barnstormer/vue';
const modelValue1 = ref();
const modelValue2 = ref();
const modelValue3 = ref();
</script>
