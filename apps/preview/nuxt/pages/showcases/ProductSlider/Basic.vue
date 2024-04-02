<template>
  <BsScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <BsButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <BsIconChevronLeft />
      </BsButton>
    </template>
    <div
      v-for="{ id, name, price, img } in products"
      :key="id"
      class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
    >
      <div class="relative">
        <BsLink href="#" class="block">
          <img
            :src="img.src"
            :alt="img.alt"
            class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
            width="146"
            height="146"
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
      <div class="p-2 border-t border-neutral-200 typography-text-sm">
        <BsLink href="#" variant="secondary" class="no-underline">{{ name }}</BsLink>
        <span class="block mt-2 font-bold">{{ price }}</span>
      </div>
    </div>
    <template #nextButton="defaultProps">
      <BsButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <BsIconChevronRight />
      </BsButton>
    </template>
  </BsScrollable>
</template>

<script lang="ts" setup>
import {
  BsLink,
  BsButton,
  BsIconFavorite,
  BsIconChevronLeft,
  BsIconChevronRight,
  BsScrollable,
} from '@barnstormer/vue';

const products = Array.from(Array(10), (_, i) => ({
  id: i.toString(),
  name: 'Athletic mens walking sneakers',
  price: '$2,345.99',
  img: {
    src: 'http://localhost:3100/@assets/sneakers.png',
    alt: 'White sneaker shoe',
  },
}));
</script>
