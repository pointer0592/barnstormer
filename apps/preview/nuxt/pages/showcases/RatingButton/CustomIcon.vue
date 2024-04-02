<template>
  <div>
    <p :id="labelId">Select rating</p>
    <BsRatingButton v-model="modelValue" :aria-labelledby="labelId">
      <template #default="{ isFilled, iconSize }">
        <BsIconFavoriteFilled
          v-if="isFilled"
          role="none"
          :size="iconSize"
          class="text-red-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-500 peer-focus-visible:outline"
        />
        <BsIconFavorite
          v-else
          role="none"
          :size="iconSize"
          class="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-400 peer-focus-visible:outline"
        />
      </template>
    </BsRatingButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsRatingButton, BsIconFavorite, BsIconFavoriteFilled, useId } from '@barnstormer/vue';
const labelId = useId();
const modelValue = ref();
</script>
