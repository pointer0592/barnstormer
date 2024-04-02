<template>
  <div class="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
    <BsButton>
      <template #prefix>
        <BsIconHome />
      </template>
      Home
    </BsButton>

    <BsButton>
      <template #suffix>
        <BsIconStar />
      </template>
      Hello
    </BsButton>

    <BsButton :square="true" aria-label="Add to cart">
      <BsIconAdd />
    </BsButton>
  </div>
</template>

<script lang="ts" setup>
import { BsButton, BsIconHome, BsIconStar, BsIconAdd } from '@barnstormer/vue';
</script>
