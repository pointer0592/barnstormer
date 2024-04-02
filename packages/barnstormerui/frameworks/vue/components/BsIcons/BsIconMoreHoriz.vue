<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="more-horiz"
    ><path
      d="M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14m4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12m-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12"
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
