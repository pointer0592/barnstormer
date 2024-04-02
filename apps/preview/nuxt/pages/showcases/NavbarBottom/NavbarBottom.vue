<template>
  <nav class="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
    <BsButton
      v-for="item in items"
      :key="item.label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200',
        { 'text-primary-900 bg-primary-200': selectedItem === item.label },
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
