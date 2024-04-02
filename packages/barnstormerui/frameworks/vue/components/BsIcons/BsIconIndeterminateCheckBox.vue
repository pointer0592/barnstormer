<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="indeterminate-check-box"
    ><path
      fill-rule="evenodd"
      d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 7a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
      clip-rule="evenodd"
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
