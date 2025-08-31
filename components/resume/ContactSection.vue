<template>
  <section class="flex flex-col text-center">
    <ResumeSectionTitle title="Contact" class="bg-slate-100 text-primary" />
    <div class="flex flex-wrap justify-center gap-2 px-8 py-2 text-sm">
      <Tag v-for="(item, index) in contact" :key="index" class="px-2.5 py-0.5">
        <NuxtLink
          :to="item.link"
          class="text-slate-100 flex items-center gap-1.5"
        >
          <Icon :name="item.icon" />
          <span>{{ item.text }}</span>
        </NuxtLink>
      </Tag>
    </div>
  </section>
</template>

<script lang="ts" setup>
type ContactItem = {
  text: string
  icon: string
  link?: string
}
defineProps<{
  contact: ContactItem[]
}>()
</script>
