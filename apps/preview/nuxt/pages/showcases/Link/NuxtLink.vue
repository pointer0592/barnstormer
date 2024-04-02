<template>
  <div class="space-x-4">
    <BsLink :tag="NuxtLink" href="#"> NuxtLink </BsLink>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { BsLink } from '@barnstormer/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
