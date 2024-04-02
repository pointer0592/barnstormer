<script lang="ts">
const sizeClasses = {
  [BsThumbnailSize.sm]: 'w-5 h-5',
  [BsThumbnailSize.base]: 'w-6 h-6',
  [BsThumbnailSize.lg]: 'w-10 h-10',
  [BsThumbnailSize.xl]: 'w-14 h-14',
};
</script>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { BsThumbnailSize } from '@barnstormer/vue';

defineProps({
  size: {
    type: String as PropType<`${BsThumbnailSize}`>,
    default: BsThumbnailSize.base,
  },
});
</script>

<template>
  <div :class="['rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size]]" data-testid="chip-thumbnail">
    <slot />
  </div>
</template>
