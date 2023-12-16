<template>
  <section class="flex flex-col">
    <SectionTitle
      :title="title"
      class="bg-slate-100 text-primary text-center"
    />
    <div class="flex flex-wrap justify-center px-4 pt-2 pb-4 gap-1.5">
      <Tag
        v-for="(item, index) in items"
        :key="index"
        :name="item"
        class="px-3 py-0.5"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  items: string[]
}>()
</script>
