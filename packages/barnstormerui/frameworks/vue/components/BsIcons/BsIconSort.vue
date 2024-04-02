<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="sort"
    ><path
      d="M4 18a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 6a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"
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
