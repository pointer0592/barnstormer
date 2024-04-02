<template>
  <div class="flex gap-3">
    <div class="p-3 bg-white">
      <BsButton class="group relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge
          :content="content"
          :max="99"
          class="outline outline-white group-hover:outline-primary-100 group-active:outline-primary-200"
        />
      </BsButton>
    </div>

    <div class="p-3 bg-primary-700">
      <BsButton class="group relative hover:bg-primary-800 active:bg-primary-900" square variant="tertiary">
        <BsIconShoppingCart class="text-white" />
        <BsBadge
          :content="content"
          :max="99"
          class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
        />
      </BsButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/vue';

const content = ref(100);
</script>
