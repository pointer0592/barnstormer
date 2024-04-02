<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="more-vert"
    ><path
      d="M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12m-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8m0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16"
  /></BsIconBase>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { BsIconBase, BsIconSize } from '@barnstormer/vue';

defineProps({
  size: {
    type: String as PropType<`${BsIconSize}`>,
    default: BsIconSize.base,
  },
});
</script>
