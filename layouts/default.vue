<template>
  <div
    class="min-h-screen min-w-full flex justify-center bg-primary text-white"
  >
    <div class="w-4/5 2xl:w-1/2 flex flex-col">
      <AppHeader />
      <div class="grow flex justify-center py-4">
        <div class="lg:w-4/5 xl:w-2/3 *:min-w-full">
          <slot />
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
