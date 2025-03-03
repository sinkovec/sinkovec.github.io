<template>
  <section class="flex flex-col">
    <ResumeSectionTitle :title="title" class="bg-primary text-slate-100 px-4" />
    <div class="flex flex-col px-4 pt-2 pb-4 gap-4 text-xs">
      <div v-for="(item, index) in items" :key="index" class="flex flex-col">
        <div v-for="(role, roleIndex) in item.roles" :key="roleIndex">
          <div class="flex justify-between">
            <span class="font-bold">{{ role.name }}</span>
            <div
              v-if="role.startDate"
              class="flex self-center gap-0.5 italic text-gray-400"
            >
              <span>{{ formatDate(role.startDate) }}</span>
              <span>-</span>
              <span v-if="role.endDate">{{ formatDate(role.endDate) }}</span>
              <span v-else>Present</span>
            </div>
          </div>
        </div>
        <div>
          <NuxtLink :to="item.organisation.url">
            <span class="italic">{{ item.organisation.name }}</span>
          </NuxtLink>
        </div>
        <span>{{ item.summary }}</span>
        <div class="flex flex-col">
          <div
            v-for="(highlight, hightlightIndex) in item.highlights"
            :key="hightlightIndex"
            class="flex gap-1"
          >
            <span class="translate-y-0.5"
              ><Icon name="fa6-solid:angle-right"
            /></span>
            {{ highlight }}
          </div>
        </div>
        <div class="flex flex-wrap gap-1 pt-1 text-[0.5rem]">
          <Tag
            v-for="(tag, tagIndex) in item.tags"
            :key="tagIndex"
            class="bg-opacity-[0.075] px-1.5 py-0.5"
          >
            {{ tag }}
          </Tag>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import moment from 'moment'

type Role = {
  name: string
  startDate?: Date
  endDate?: Date
}

type Organisation = {
  name: string
  url: string
}

type ExperienceItem = {
  roles: Role[]
  organisation: Organisation
  summary: string
  highlights: string[]
  tags: string[]
}

defineProps<{
  title: string
  items: ExperienceItem[]
}>()

function formatDate(value: Date) {
  return moment(value).format('MMM yyyy')
}
</script>

<style></style>
