<template>
  <div>
    <button class="flex items-center" @click="isOpen = !isOpen">
      <Icon name="fa6-solid:bars" class="text-xl" />
    </button>
    <Transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-500"
      leave-active-class="transition duration-500"
    >
      <div
        v-if="isOpen"
        class="fixed z-10 inset-0 w-full h-full bg-primary/90 backdrop-blur-sm"
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
        class="fixed z-20 inset-y-0 right-0 w-2/5 h-full bg-primary shadow-2xl shadow-black"
        @click="isOpen = false"
      >
        <NavigationList class="flex flex-col py-8 text-center" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false)
</script>
