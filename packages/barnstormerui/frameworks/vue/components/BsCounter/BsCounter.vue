<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { BsCounterSize } from '@barnstormer/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${BsCounterSize}`>,
    default: BsCounterSize.base,
  },
  pill: {
    type: Boolean,
    default: false,
  },
});
const { size, pill } = toRefs(props);

const sizeClasses = computed(() => {
  switch (size?.value) {
    case BsCounterSize['3xs']:
      return ['text-3xs', { 'px-1': pill.value }];
    case BsCounterSize['2xs']:
      return ['text-2xs', { 'px-1.5': pill.value }];
    case BsCounterSize.xs:
      return ['text-xs', { 'px-2': pill.value }];
    case BsCounterSize.sm:
      return ['text-sm', { 'px-2.5': pill.value }];
    case BsCounterSize.lg:
      return ['text-lg', { 'px-3.5': pill.value }];
    default:
      return ['text-base', { 'px-3': pill.value }];
  }
});
</script>

<template>
  <span
    class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500"
    :class="[
      sizeClasses,
      {
        'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none':
          pill,
      },
    ]"
    data-testid="counter"
  >
    <slot />
  </span>
</template>
