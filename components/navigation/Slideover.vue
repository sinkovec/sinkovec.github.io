<template>
  <div>
    <button @click="isOpen = !isOpen">
      <FontAwesomeIcon icon="bars" />
    </button>
    <Transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-500"
      leave-active-class="transition duration-500"
    >
      <div
        v-if="isOpen"
        class="fixed z-10 inset-0 w-full h-full bg-primary bg-opacity-90"
        @click="isOpen = false"
      />
    </Transition>
    <Transition
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
      enter-active-class="transition duration-500"
      leave-active-class="transition duration-500"
    >
      <div
        v-if="isOpen"
        class="fixed z-20 inset-y-0 right-0 w-1/3 h-full bg-primary"
      >
        <NavigationList
          class="flex flex-col py-8 text-center"
          @click="isOpen = false"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isOpen = ref(false)
</script>
