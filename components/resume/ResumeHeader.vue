<template>
  <div class="flex flex-col p-10 gap-2 lowercase">
    <div class="flex gap-4 text-7xl">
      <span
        v-for="(item, index) in names"
        :key="index"
        :class="{ 'font-thin': isLastName(index) }"
      >
        {{ item }}
      </span>
    </div>
    <span class="text-3xl font-thin">{{ label }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  label: string
}>()

const names = computed(() => props.name.split(' '))
const isLastName = (index: number) => index === names.value.length - 1
</script>

<style></style>
