<template>
  <div class="flex gap-3">
    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="content" :max="99" placement="top-right" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="content" :max="99" placement="bottom-right" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="content" :max="99" placement="top-left" />
    </BsButton>

    <BsButton class="relative" square variant="tertiary">
      <BsIconShoppingCart />
      <BsBadge :content="content" :max="99" placement="bottom-left" />
    </BsButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/vue';

const content = ref(100);
</script>
