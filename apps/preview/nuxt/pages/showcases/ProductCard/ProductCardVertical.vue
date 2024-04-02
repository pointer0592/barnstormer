<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <BsLink href="#" class="block">
        <img
          src="http://localhost:3100/@assets/sneakers.png"
          alt="Great product"
          class="block object-cover h-auto rounded-md aspect-square"
          width="300"
          height="300"
        />
      </BsLink>
      <BsButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <BsIconFavorite size="sm" />
      </BsButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <BsLink href="#" variant="secondary" class="no-underline"> Athletic mens walking sneakers </BsLink>
      <div class="flex items-center pt-1">
        <BsRating size="xs" :value="5" :max="5" />

        <BsLink href="#" variant="secondary" class="pl-1 no-underline">
          <BsCounter size="xs">123</BsCounter>
        </BsLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        Lightweight • Non slip • Flexible outsole • Easy to wear on and off
      </p>
      <span class="block pb-2 font-bold typography-text-lg">$2345,99</span>
      <BsButton size="sm">
        <template #prefix>
          <BsIconShoppingCart size="sm" />
        </template>
        Add to cart
      </BsButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BsRating, BsCounter, BsLink, BsButton, BsIconShoppingCart, BsIconFavorite } from '@barnstormer/vue';
</script>
