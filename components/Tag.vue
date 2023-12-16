<template>
  <span class="bg-[#2a2a2a] rounded-xl">
    {{ name }}
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
