<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <BsButton size="sm">Hello</BsButton>

    <BsButton>Hello</BsButton>

    <BsButton size="lg">Hello</BsButton>
  </div>
</template>

<script lang="ts" setup>
import { BsButton } from '@barnstormer/vue';
</script>
