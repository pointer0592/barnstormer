<template>
  <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
    <div
      v-for="({ icon, title, description, buttonText, isDisabled }, index) in cardDetails"
      :key="`${title}-${index}`"
      class="flex flex-col w-full max-w-[325px] sm:w-[375px] lg:w-[496px] items-center"
    >
      <component :is="icon" size="2xl" :class="{ 'text-disabled-900': isDisabled }" />
      <div class="p-4 flex flex-col items-center">
        <p :class="['font-medium typography-text-base', { 'text-disabled-900': isDisabled }]">{{ title }}</p>
        <p
          :class="[
            'mt-1 mb-4 font-normal typography-text-sm text-neutral-700 text-center',
            { 'text-disabled-700': isDisabled },
          ]"
        >
          {{ description }}
        </p>
        <BsButton size="sm" variant="secondary" :disabled="isDisabled" class="mt-auto">{{ buttonText }}</BsButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BsButton, BsIconPackage, BsIconWarehouse, BsIconPublishedWithChanges } from '@barnstormer/vue';

const cardDetails = [
  {
    icon: BsIconPackage,
    title: 'Free shipping',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: BsIconWarehouse,
    title: 'Click & Collect',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: BsIconPublishedWithChanges,
    title: 'Free 30-Day returns',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: true,
  },
];
</script>
