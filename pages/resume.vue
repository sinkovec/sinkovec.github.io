<template>
  <div class="bg-primary bg-opacity-90 min-h-screen">
    <div class="flex justify-center py-16 print:p-0">
      <div
        class="grid grid-cols-[40%_60%] w-a4 h-a4 paper:shadow-2xl paper:rounded-xl overflow-hidden"
      >
        <div class="flex justify-center bg-primary">
          <img
            src="@/assets/img/bio-photo.png"
            class="self-center block w-48 h-48"
          />
        </div>
        <div
          class="flex flex-col p-8 bg-slate-100 text-primary text-8xl lowercase space-y-4"
        >
          <div class="flex flex-col -space-y-4">
            <span>{{ firstName }}</span>
            <span class="font-thin">{{ lastName }}</span>
          </div>
          <span class="text-3xl font-thin">{{ label }}</span>
        </div>
        <div class="flex flex-col bg-primary text-slate-100">
          <section class="flex flex-col">
            <span
              class="uppercase bg-slate-100 text-primary text-center text-xl font-bold mx-4 rounded-xl"
              >Contact</span
            >
            <div class="flex flex-col text-center space-y-1 py-2">
              <div v-for="(item, index) in contact" :key="index">
                <NuxtLink :to="item.link" class="space-x-1">
                  <FontAwesomeIcon :icon="item.icon" />
                  <span>{{ item.text }}</span>
                </NuxtLink>
              </div>
            </div>
          </section>
          <section class="flex flex-col">
            <span
              class="uppercase bg-slate-100 text-primary text-center text-xl font-bold mx-4 rounded-xl"
            >
              Tech Stack
            </span>
            <div class="flex flex-wrap justify-center p-4 gap-2">
              <div v-for="(item, index) in techStack" :key="index">
                <span class="bg-[#2a2a2a] px-3 py-1 rounded-xl">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </section>
          <section class="flex flex-col">
            <span
              class="uppercase bg-slate-100 text-primary text-center text-xl font-bold mx-4 rounded-xl"
            >
              Soft Skills
            </span>
            <div class="flex flex-wrap justify-center p-4 gap-2">
              <div v-for="(item, index) in skills" :key="index">
                <span class="bg-[#2a2a2a] px-3 py-1 rounded-xl">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </section>
        </div>
        <div class="flex flex-col flex-1 text-sm text-primary bg-slate-100">
          <section class="flex flex-col">
            <span
              class="uppercase bg-primary text-slate-100 font-bold text-xl mx-4 px-4 rounded-xl"
            >
              Work experience
            </span>
            <div class="flex flex-col px-4 py-2 space-y-1">
              <div
                v-for="(item, index) in work"
                :key="index"
                class="flex flex-col"
              >
                <div class="flex justify-between">
                  <span class="font-bold">{{ item.position }}</span>
                  <div class="flex space-x-1 italic text-gray-400">
                    <span>{{ formatDate(item.startDate) }}</span>
                    <span>-</span>
                    <span v-if="item.endDate">{{
                      formatDate(item.endDate)
                    }}</span>
                    <span v-else>Present</span>
                  </div>
                </div>
                <NuxtLink :to="item.url">
                  <span class="italic">{{ item.name }}</span>
                </NuxtLink>
                <span class="text-xs">{{ item.summary }}</span>
                <div class="flex flex-col text-xs px-2 pb-1">
                  <span
                    v-for="(highlight, hightlightIndex) in item.highlights"
                    :key="hightlightIndex"
                  >
                    <FontAwesomeIcon icon="circle-check" />
                    {{ highlight }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-0.5 text-[0.5rem]">
                  <span
                    v-for="(tag, tagIndex) in item.tags"
                    :key="tagIndex"
                    class="bg-[#2a2a2a] px-1.5 rounded-xl text-slate-100"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section class="flex flex-col pb-4">
            <span
              class="uppercase bg-primary text-slate-100 font-bold text-xl mx-4 px-4 rounded-xl"
            >
              Education
            </span>
            <div class="flex flex-col px-4 py-2 space-y-1">
              <div
                v-for="(item, index) in education"
                :key="index"
                class="flex flex-col"
              >
                <div class="flex justify-between">
                  <span class="font-bold">
                    {{ item.area }}, {{ item.degree }}
                  </span>
                  <div class="flex space-x-1 italic text-gray-400">
                    <span>{{ formatDate(item.startDate) }}</span>
                    <span>-</span>
                    <span v-if="item.endDate">{{
                      formatDate(item.endDate)
                    }}</span>
                    <span v-else>today</span>
                  </div>
                </div>
                <NuxtLink :to="item.url">
                  <span class="italic">{{ item.institution }}</span>
                </NuxtLink>
                <span class="text-xs">Grade: {{ item.score }}</span>
                <span class="text-xs">Thesis: {{ item.thesis }}</span>
                <div class="flex flex-wrap gap-0.5 text-[0.5rem]">
                  <span
                    v-for="(course, courseIndex) in item.courses"
                    :key="courseIndex"
                    class="bg-[#2a2a2a] px-1.5 rounded-xl text-slate-100"
                  >
                    {{ course }}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment'
import data from '../data/resume.yaml'

definePageMeta({
  layout: 'resume',
})

const firstName = data.basics.firstName
const lastName = data.basics.name
const label = data.basics.label

const contact = [
  {
    text: data.basics.location.city + ', ' + data.basics.location.region,
    icon: ['fas', 'location-dot'],
    link: '',
  },
  {
    text: data.basics.email,
    icon: ['fas', 'envelope'],
    link: 'mailto:' + data.basics.email,
  },
]

data.basics.profiles.forEach(
  (profile: {
    username: string
    network: string
    url: string
    faIcon: string[]
  }) => {
    contact.push({
      text: profile.username,
      icon: profile.faIcon,
      link: profile.url,
    })
  },
)

const techStack = data.tech

const skills = data.skills

const work = data.work

const education = data.education

const rightColumn = [
  {
    title: 'Education',
    text: 'Lorem ipsum',
  },
]

function formatDate(value: string) {
  return moment(value).format('MMM yyyy')
}
</script>
