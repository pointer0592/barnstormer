<script lang="ts" setup>
import { ClassProp } from '@barnstormer/vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  summaryClass: ClassProp,
});

defineEmits<{
  (event: 'update:modelValue', open: boolean): void;
}>();
</script>

<!-- eslint-disable vuejs-accessibility/no-static-element-interactions -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <details :open="modelValue" data-testid="accordion-item">
    <summary
      :class="[
        summaryClass,
        'list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
      ]"
      @click.prevent="$emit('update:modelValue', !modelValue)"
    >
      <slot name="summary" />
    </summary>
    <slot />
  </details>
</template>
