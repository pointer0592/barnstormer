<template>
  <BsSwitch v-model="modelCheck" value="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsSwitch } from '@barnstormer/vue';

const modelCheck = ref(false);
</script>
