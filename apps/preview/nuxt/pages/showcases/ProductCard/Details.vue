<template>
  <section class="md:max-w-[640px]">
    <div
      class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4"
    >
      <BsIconSell size="sm" class="mr-1.5" />
      Sale
    </div>
    <h1 class="mb-1 font-bold typography-headline-4">Mini Foldable Drone with HD Camera FPV Wifi RC Quadcopter</h1>
    <strong class="block font-bold typography-headline-3">$2,345.99</strong>
    <div class="inline-flex items-center mt-4 mb-2">
      <BsRating size="xs" :value="3" :max="5" />
      <BsCounter class="ml-1" size="xs">123</BsCounter>
      <BsLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> 123 reviews </BsLink>
    </div>
    <ul class="mb-4 font-normal typography-text-sm">
      <li>HD Pictures & Videos and FPV Function</li>
      <li>Intelligent Voice Control</li>
      <li>Multiple Fun Flights</li>
      <li>Easy to Use</li>
      <li>Foldable Design & Double Flight Time</li>
    </ul>
    <div class="py-4 mb-4 border-gray-200 border-y">
      <div
        class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md"
      >
        <BsIconShoppingCartCheckout />
        1 in cart
      </div>
      <div class="items-start xs:flex">
        <div class="flex flex-col items-stretch xs:items-center xs:inline-flex">
          <div class="flex border border-neutral-300 rounded-md">
            <BsButton
              variant="tertiary"
              :disabled="count <= min"
              square
              class="rounded-r-none p-3"
              :aria-controls="inputId"
              aria-label="Decrease value"
              @click="dec()"
            >
              <BsIconRemove />
            </BsButton>
            <input
              :id="inputId"
              v-model="count"
              type="number"
              class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
              :min="min"
              :max="max"
              @input="handleOnChange"
            />
            <BsButton
              variant="tertiary"
              :disabled="count >= max"
              square
              class="rounded-l-none p-3"
              :aria-controls="inputId"
              aria-label="Increase value"
              @click="inc()"
            >
              <BsIconAdd />
            </BsButton>
          </div>
          <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
            <strong class="text-neutral-900">{{ max }}</strong> in stock
          </p>
        </div>
        <BsButton size="lg" class="w-full xs:ml-4">
          <template #prefix>
            <BsIconShoppingCart size="sm" />
          </template>
          Add to cart
        </BsButton>
      </div>
      <div class="flex justify-center mt-4 gap-x-4">
        <BsButton size="sm" variant="tertiary">
          <template #prefix>
            <BsIconCompareArrows size="sm" />
          </template>
          Compare
        </BsButton>
        <BsButton size="sm" variant="tertiary">
          <BsIconFavorite size="sm" />
          Add to list
        </BsButton>
      </div>
    </div>
    <div class="flex first:mt-4">
      <BsIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free shipping, arrives by Thu, Apr 7. Want it faster?
        <BsLink href="#" variant="secondary" class="mx-1"> Add an address </BsLink>
        to see options
      </p>
    </div>
    <div class="flex mt-4">
      <BsIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Pickup not available at your shop.
        <BsLink href="#" variant="secondary" class="ml-1"> Check availability nearby </BsLink>
      </p>
    </div>
    <div class="flex mt-4">
      <BsIconSafetyCheck size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free 30-days returns.
        <BsLink href="#" variant="secondary" class="ml-1"> Details </BsLink>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  BsButton,
  BsCounter,
  BsLink,
  BsRating,
  BsIconSafetyCheck,
  BsIconCompareArrows,
  BsIconWarehouse,
  BsIconPackage,
  BsIconFavorite,
  BsIconSell,
  BsIconShoppingCart,
  BsIconAdd,
  BsIconRemove,
  useId,
  BsIconShoppingCartCheckout,
} from '@barnstormer/vue';
import { clamp } from '@barnstormer/shared';
import { useCounter } from '@vueuse/core';

const inputId = useId();
const min = ref(1);
const max = ref(999);
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
</script>
