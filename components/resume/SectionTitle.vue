<template>
  <span class="uppercase font-bold tracking-wider mx-4 rounded-xl">
    {{ title }}
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
