<script lang="ts">
const variantClasses = {
  [BsLinkVariant.primary]:
    'text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
  [BsLinkVariant.secondary]:
    'underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
};
</script>

<script lang="ts" setup>
import type { PropType, ConcreteComponent } from 'vue';
import { BsLinkVariant } from '@barnstormer/vue';

defineProps({
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'a',
  },
  variant: {
    type: String as PropType<`${BsLinkVariant}`>,
    default: BsLinkVariant.primary,
  },
});
</script>

<template>
  <component
    :is="tag"
    :class="['focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm', variantClasses[variant]]"
    data-testid="link"
  >
    <slot />
  </component>
</template>
