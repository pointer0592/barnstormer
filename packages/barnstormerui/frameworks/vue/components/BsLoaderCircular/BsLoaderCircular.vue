<script lang="ts">
const sizeClasses = {
  [BsLoaderSize.xs]: 'h-4 w-4 ring-2',
  [BsLoaderSize.sm]: 'h-5 w-5 ring-2',
  [BsLoaderSize.base]: 'h-6 w-6 ring-2',
  [BsLoaderSize.lg]: 'h-8 w-8 ring-2',
  [BsLoaderSize.xl]: 'h-10 w-10 ring-2',
  [BsLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [BsLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [BsLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};
const strokeSizeClass = {
  [BsLoaderSize.xs]: 'stroke-[10px]',
  [BsLoaderSize.sm]: 'stroke-[8px]',
  [BsLoaderSize.base]: 'stroke-[6px]',
  [BsLoaderSize.lg]: 'stroke-[4px]',
  [BsLoaderSize.xl]: 'stroke-[3px]',
  [BsLoaderSize['2xl']]: 'stroke-[3px]',
  [BsLoaderSize['3xl']]: 'stroke-2',
  [BsLoaderSize['4xl']]: 'stroke-2',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { BsLoaderSize } from '@barnstormer/vue';

defineProps({
  size: {
    type: String as PropType<`${BsLoaderSize}`>,
    default: BsLoaderSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <svg
    class="inline-block rounded-full ring-inset ring-neutral-300 text-primary-700 animate-spin-slow"
    :class="sizeClasses[size]"
    viewBox="25 25 50 50"
    aria-live="polite"
    :aria-label="ariaLabel"
    data-testid="loader-circular"
  >
    <circle
      :class="strokeSizeClass[size]"
      class="stroke-current stroke-2 fill-none animate-stroke-loader-circular"
      cx="50"
      cy="50"
      r="24"
    />
  </svg>
</template>
