<template>
  <section class="flex flex-col text-center">
    <SectionTitle title="Contact" class="bg-slate-100 text-primary" />
    <div class="flex flex-col gap-1 py-2">
      <div v-for="(item, index) in contact" :key="index">
        <NuxtLink :to="item.link" class="space-x-1">
          <FontAwesomeIcon :icon="item.icon" />
          <span>{{ item.text }}</span>
        </NuxtLink>
      </div>
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
