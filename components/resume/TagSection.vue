<template>
  <section class="flex flex-col">
    <ResumeSectionTitle
      :title="title"
      class="bg-slate-100 text-primary text-center"
    />
    <div class="flex flex-col gap-1 pt-2 text-xs">
      <div v-for="(item, index) in items" :key="index" class="flex flex-col">
        <div class="mb-1">
          <span class="px-4 py-0.5 font-light tracking-wider text-gray-300 bg-nord-1 rounded-r-xl text-sm">
            <Icon :name=item.icon class="translate-y-0.5"/>
            {{ item.category }}
          </span>
        </div>
        <div class="flex flex-wrap justify-center px-4 pt-1 pb-3 gap-1">
          <Tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="px-2.5 py-0.5">
            <span>{{ tag }}</span>
          </Tag>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type TagCategory = {
  category: string
  icon: string
  tags: string[]
}

defineProps<{
  title: string
  items: TagCategory[]
}>()
</script>
