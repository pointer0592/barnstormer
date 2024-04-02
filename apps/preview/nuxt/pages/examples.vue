<template>
  <div class="e-page-examples">
    <div v-if="isNotIframe" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <header class="sidebar-heading">
        <h2>Barnstormer UI</h2>
        <h3>Vue components</h3>
      </header>
      <BsButton
        class="sidebar-toggle"
        :variant="BsButtonVariant.tertiary"
        :size="BsButtonSize.sm"
        :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
        @click="isOpen = !isOpen"
      >
        <template #prefix>
          <BsIconChevronLeft v-if="isOpen" />
          <BsIconChevronRight v-else />
        </template>
      </BsButton>
      <ul class="sidebar-list flex flex-col">
        <li v-for="component in components" :key="component">
          <NuxtLink v-slot="{ navigate }" :to="`/examples/${component}`" custom>
            <BsListItem
              tag="span"
              :selected="currentRoute.path === `/examples/${component}`"
              :class="{ 'font-medium': currentRoute.path === `/examples/${component}` }"
              @click="navigate"
            >
              {{ component }}
            </BsListItem>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import {
  BsButton,
  BsButtonVariant,
  BsButtonSize,
  BsListItem,
  BsIconChevronLeft,
  BsIconChevronRight,
} from '@barnstormer/vue';
import { onBeforeMount } from 'vue';

const { currentRoute } = useRouter();

const files = import.meta.glob('./examples/*.vue');
const components = Object.keys(files)
  .map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();

const isOpen = ref(true);
const isNotIframe = ref(false);

onBeforeMount(() => {
  if (window.self === window.top) {
    isNotIframe.value = true;
  }
});
</script>
