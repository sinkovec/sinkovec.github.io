<template>
  <div
    class="flex flex-col p-8 bg-slate-100 text-primary"
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
