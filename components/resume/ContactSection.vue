<template>
  <section class="flex flex-col text-center">
    <ResumeSectionTitle title="Contact" class="bg-slate-100 text-primary" />
    <div class="flex flex-wrap justify-center gap-1 px-8 py-2 text-sm">
      <Tag v-for="(item, index) in contact" :key="index" class="px-3 py-0.5">
        <NuxtLink :to="item.link" class="space-x-1">
          <FontAwesomeIcon :icon="item.icon" />
          <span>{{ item.text }}</span>
        </NuxtLink>
      </Tag>
    </div>
  </section>
</template>

<script lang="ts" setup>
type ContactItem = {
  text: string
  icon: string[]
  link?: string
}
defineProps<{
  contact: ContactItem[]
}>()
</script>
