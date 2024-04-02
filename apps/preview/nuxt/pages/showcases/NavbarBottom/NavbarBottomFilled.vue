<template>
  <nav class="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch">
    <BsButton
      v-for="item in items"
      :key="item.label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
        { 'text-white bg-primary-900': selectedItem === item.label },
      ]"
      @click="onClickHandler(item.label)"
    >
      <template #prefix>
        <Component :is="item.icon" />
      </template>
      {{ item.label }}
    </BsButton>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { BsButton, BsIconHome, BsIconMenu, BsIconShoppingCart, BsIconFavorite, BsIconPerson } from '@barnstormer/vue';

const items = [
  {
    label: 'Home',
    icon: BsIconHome,
  },
  {
    label: 'Products',
    icon: BsIconMenu,
  },
  {
    label: 'Cart',
    icon: BsIconShoppingCart,
  },
  {
    label: 'Watchlist',
    icon: BsIconFavorite,
  },
  {
    label: 'Account',
    icon: BsIconPerson,
  },
];
const selectedItem = ref('');
function onClickHandler(itemLabel: string) {
  selectedItem.value = itemLabel;
}
</script>
