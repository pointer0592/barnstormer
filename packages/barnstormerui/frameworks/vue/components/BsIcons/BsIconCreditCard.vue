<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="credit-card"
    ><path
      d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"
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
