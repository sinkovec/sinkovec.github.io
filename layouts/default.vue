<template>
  <div
    class="min-h-screen min-w-full flex justify-center bg-primary text-white"
  >
    <div class="w-4/5 2xl:w-1/2 flex flex-col divide-y divide-[#404040]">
      <AppHeader />
      <div class="flex-1 py-4">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
