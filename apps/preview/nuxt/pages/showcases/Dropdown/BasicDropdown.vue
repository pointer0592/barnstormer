<template>
  <BsDropdown v-model="isOpen">
    <template #trigger>
      <BsButton @click="toggle()">Toggle</BsButton>
    </template>
    <ul class="p-2 rounded bg-gray-100">
      <li>More</li>
      <li>About</li>
      <li>Settings</li>
    </ul>
  </BsDropdown>
</template>

<script lang="ts" setup>
import { BsDropdown, useDisclosure, BsButton } from '@barnstormer/vue';

const { isOpen, toggle } = useDisclosure();
</script>
