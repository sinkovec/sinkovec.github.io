<template>
  <div class="bg-primary bg-opacity-90 min-h-screen">
    <div class="flex justify-center py-16 print:p-0">
      <div
        class="grid grid-cols-[40%_60%] max-w-5xl paper:shadow-2xl paper:rounded-xl overflow-hidden"
      >
        <div class="flex justify-center bg-primary">
          <img src="@/assets/img/bio-photo.png" class="w-4/5 p-8" />
        </div>
        <div class="flex flex-col p-8 bg-slate-100 text-primary text-8xl">
          <span>brian</span>
          <span class="font-thin">sinkovec</span>
        </div>
        <div class="flex flex-col bg-primary text-slate-100">
          <section
            v-for="(section, index) in leftColumn"
            :key="index"
            class="flex flex-col pb-4"
          >
            <span
              class="uppercase bg-slate-100 text-primary text-center text-xl font-bold mx-4 rounded-xl"
              >{{ section.title }}</span
            >
            <span class="text-center">{{ section.text }}</span>
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
definePageMeta({
  layout: 'resume',
})

const leftColumn = [
  {
    title: 'Contact',
    text: 'Lorem ispum',
  },
  {
    title: 'Tech',
    text: 'Lorem ipsum',
  },
  {
    title: 'Soft Skills',
    text: 'Lorem ipsum',
  },
]

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
