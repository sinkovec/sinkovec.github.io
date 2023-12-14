<template>
  <div class="bg-primary bg-opacity-90 min-h-screen">
    <div class="flex justify-center py-16 print:p-0">
      <div
        class="grid grid-cols-[40%_60%] w-a4 h-a4 paper:shadow-2xl paper:rounded-xl overflow-hidden"
      >
        <div class="flex justify-center bg-primary">
          <img src="@/assets/img/bio-photo.png" class="block p-12" />
        </div>
        <div class="flex flex-col p-8 bg-slate-100 text-primary text-8xl">
          <span>{{ firstName }}</span>
          <span class="font-thin">{{ lastName }}</span>
          <span class="text-3xl">{{ label }}</span>
        </div>
        <div class="flex flex-col bg-primary text-slate-100">
          <section class="flex flex-col pb-4">
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
          <section class="flex flex-col pb-4">
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
          <section class="flex flex-col pb-4">
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
        <div class="flex flex-col flex-1 text-primary bg-slate-100">
          <section
            v-for="(section, index) in rightColumn"
            :key="index"
            class="flex flex-col pb-4"
          >
            <span
              class="uppercase bg-primary text-slate-100 font-bold text-xl mx-4 px-4 rounded-xl"
              >{{ section.title }}</span
            >
            <span class="text-center">{{ section.text }}</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
  (profile: { username: string; network: string; url: string }) => {
    contact.push({
      text: profile.username,
      icon: ['fab', profile.network.toLowerCase()],
      link: profile.url,
    })
  },
)

const techStack = data.tech

const skills = data.skills

const rightColumn = [
  {
    title: 'Work Experience',
    text: 'Lorem ipsum',
  },
  {
    title: 'Education',
    text: 'Lorem ipsum',
  },
]
</script>
