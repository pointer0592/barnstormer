<template>
  <BsIconBase :size="size" viewBox="0 0 24 24" data-testid="vuejs"
    ><path
      d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3zM3.736 3.871h2.641L12 13.605l5.618-9.734h2.642L12 18.024z"
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
