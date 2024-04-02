<script lang="ts">
const sizeClasses = {
  [BsProgressLinearSize.minimal]: 'h-1',
  [BsProgressSize.xs]: 'h-4',
  [BsProgressSize.sm]: 'h-5',
  [BsProgressSize.base]: 'h-6',
  [BsProgressSize.lg]: 'h-7',
  [BsProgressSize.xl]: 'h-10',
  [BsProgressSize['2xl']]: 'h-14',
  [BsProgressSize['3xl']]: 'h-24',
  [BsProgressSize['4xl']]: 'h-48',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { BsProgressSize, BsProgressLinearSize } from '@barnstormer/vue';

defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as PropType<`${BsProgressSize | BsProgressLinearSize}`>,
    default: BsProgressSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'Progress element',
  },
});
</script>

<template>
  <progress
    data-testid="progress-linear"
    max="100"
    class="bg-neutral-300 text-primary-700 [&::-webkit-progress-bar]:bg-inherit [&::-webkit-progress-value]:bg-current [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-current"
    :class="sizeClasses[size]"
    :aria-label="ariaLabel"
    :value="value"
  />
</template>
