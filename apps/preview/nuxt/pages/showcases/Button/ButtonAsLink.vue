<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <BsButton tag="a" href="#"> Link </BsButton>

    <BsButton :tag="NuxtLink" to="#"> NuxtLink </BsButton>

    <BsButton tag="router-link" to="#"> router-link </BsButton>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { BsButton } from '@barnstormer/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
