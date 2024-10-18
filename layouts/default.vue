<template>
  <div class="min-h-screen flex justify-center">
    <div class="w-11/12 flex flex-col">
      <AppHeader />
      <div class="flex justify-center grow py-4">
        <div class="lg:w-2/3">
          <slot />
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
