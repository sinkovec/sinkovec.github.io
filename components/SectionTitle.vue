<template>
  <span class="uppercase text-xl tracking-wider font-bold mx-4 rounded-xl">
    {{ title }}
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
