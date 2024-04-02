<template>
  <BsButton @click="open">To Checkout</BsButton>

  <!-- Backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-neutral-700 bg-opacity-50" />
  </transition>

  <!-- Modal -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <BsModal
      v-model="isOpen"
      class="max-w-[90%] md:max-w-lg"
      tag="section"
      role="alertdialog"
      aria-labelledby="promoModalTitle"
      aria-describedby="promoModalDesc"
    >
      <header>
        <BsButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
          <BsIconClose />
        </BsButton>
        <h3 id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
          You might miss out on great deals
        </h3>
      </header>
      <p id="promoModalDesc" class="mt-2">
        There are special offers for some of the items on your wishlist. Do you want to see these deals before
        proceeding to checkout page?
      </p>
      <footer class="flex justify-end gap-4 mt-4">
        <BsButton variant="secondary" @click="close">Skip</BsButton>
        <BsButton @click="close">Yes!</BsButton>
      </footer>
    </BsModal>
  </transition>
</template>

<script lang="ts" setup>
import { BsModal, BsButton, BsIconClose, useDisclosure } from '@barnstormer/vue';

const { isOpen, open, close } = useDisclosure({ initialValue: false });
</script>
