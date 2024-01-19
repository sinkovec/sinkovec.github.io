<template>
  <div>
    <div class="bg-primary bg-opacity-90 min-h-screen">
      <div class="flex justify-center py-16 print:p-0">
        <div
          class="flex flex-col w-a4 h-a4 paper:shadow-2xl paper:rounded-xl overflow-hidden p-8 bg-slate-100 text-primary"
        >
          <ResumeExperienceSection
            title="Professional Projects"
            :items="professional"
          />
          <ResumeExperienceSection
            title="Academic Projects"
            :items="academic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from '../data/projects.yaml'

function projectMapper(item: any) {
  return {
    roles: [
      {
        name: item.name,
      },
    ],
    organisation: {},
    summary: item.description,
    highlights: item.highlights,
    tags: item.tags,
  }
}

const professional = computed(() =>
  data.professional.map((item: any) => projectMapper(item)),
)

const academic = computed(() =>
  data.academic.map((item: any) => projectMapper(item)),
)
</script>

<style></style>
