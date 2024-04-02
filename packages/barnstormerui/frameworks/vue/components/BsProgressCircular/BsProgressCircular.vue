<script lang="ts">
const sizeClasses = {
  [BsProgressSize.xs]: 'h-4 w-4 ring-2',
  [BsProgressSize.sm]: 'h-5 w-5 ring-2',
  [BsProgressSize.base]: 'h-6 w-6 ring-2',
  [BsProgressSize.lg]: 'h-8 w-8 ring-2',
  [BsProgressSize.xl]: 'h-10 w-10 ring-2',
  [BsProgressSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [BsProgressSize['3xl']]: 'h-24 w-24 ring-4',
  [BsProgressSize['4xl']]: 'h-48 w-48 ring-8',
};
const strokeSizeClass = {
  [BsProgressSize.xs]: 'stroke-[10px]',
  [BsProgressSize.sm]: 'stroke-[8px]',
  [BsProgressSize.base]: 'stroke-[6px]',
  [BsProgressSize.lg]: 'stroke-[4px]',
  [BsProgressSize.xl]: 'stroke-[3px]',
  [BsProgressSize['2xl']]: 'stroke-[3px]',
  [BsProgressSize['3xl']]: 'stroke-2',
  [BsProgressSize['4xl']]: 'stroke-2',
};
</script>

<script lang="ts" setup>
import { computed, toRefs, type PropType } from 'vue';
import { BsProgressSize } from '@barnstormer/vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as PropType<`${BsProgressSize}`>,
    default: BsProgressSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'Progress element',
  },
});
const { value } = toRefs(props);

const strokeDasharray = computed(() => `${(value.value / 100) * 151}, 150`);
</script>

<template>
  <svg
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="value"
    :aria-label="ariaLabel"
    class="inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full transition-[stroke-dasharray] ease-in-out duration-500 text-sm"
    :class="sizeClasses[size]"
    viewBox="25 25 50 50"
    :stroke-dasharray="strokeDasharray"
    data-testid="progress"
  >
    <circle
      :class="strokeSizeClass[size]"
      class="origin-bottom-right -rotate-90 stroke-current fill-none"
      cx="50"
      cy="50"
      r="24"
    />
    <slot />
  </svg>
</template>
