<script setup lang="ts">
const { isOpen, toggle } = useDisclosure();
</script>

<template>
  <div>
    <div class="bg-pink-200">You can use Tailwind colors!</div>
    <div v-if="isOpen">hello</div>
    <BsButton @click="toggle()">Toggle</BsButton>
  </div>
</template>
