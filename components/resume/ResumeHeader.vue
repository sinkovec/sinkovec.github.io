<template>
  <div class="flex flex-col p-8 gap-4 lowercase">
    <div class="flex flex-col -space-y-4 text-8xl">
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
