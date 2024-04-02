<script lang="ts">
const sizeClasses = {
  [BsLoaderLinearSize.minimal]: 'h-1',
  [BsLoaderSize.xs]: 'h-4',
  [BsLoaderSize.sm]: 'h-5',
  [BsLoaderSize.base]: 'h-6',
  [BsLoaderSize.lg]: 'h-7',
  [BsLoaderSize.xl]: 'h-10',
  [BsLoaderSize['2xl']]: 'h-14',
  [BsLoaderSize['3xl']]: 'h-24',
  [BsLoaderSize['4xl']]: 'h-48',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { BsLoaderLinearSize, BsLoaderSize } from '@barnstormer/vue';

defineProps({
  size: {
    type: String as PropType<`${BsLoaderLinearSize | BsLoaderSize}`>,
    default: BsLoaderSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <span
    class="relative inline-block overflow-hidden bg-neutral-300 text-primary-700 after:absolute after:w-2.5 after:h-full after:animate-line after:bg-current after:block"
    :class="sizeClasses[size]"
    aria-live="polite"
    :aria-label="ariaLabel"
    data-testid="loader-linear"
  />
</template>
