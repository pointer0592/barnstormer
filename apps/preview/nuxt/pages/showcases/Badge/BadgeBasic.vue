<template>
  <div class="flex gap-3">
    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="content" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="maxContent" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="textContent" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge variant="dot" />
    </BsButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/vue';

const content = ref(10);
const maxContent = ref(10000);
const textContent = ref('New');
</script>
