<template>
  <section class="flex flex-col">
    <ResumeSectionTitle
      :title="title"
      class="bg-slate-100 text-primary text-center"
    />
    <div class="flex flex-wrap justify-center px-4 pt-2 pb-4 gap-1.5 text-sm">
      <Tag v-for="(item, index) in items" :key="index" class="px-3 py-0.5">
        <span>{{ item }}</span>
      </Tag>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  items: string[]
}>()
</script>
