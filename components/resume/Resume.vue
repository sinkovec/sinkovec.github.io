<template >
  <div
    class="grid grid-cols-[33%_67%] min-h-full"
  >
    <ResumeBioPhoto class="bg-primary" />
    <ResumeHeader
      :name="data.basics.name"
      :label="data.basics.label"
      class="bg-slate-100 text-primary"
    />
    <div class="flex flex-col gap-4 bg-primary text-slate-100">
      <ResumeContactSection :contact="contact" />
      <ResumeTagSection title="Technical" :items="data.tech" />
      <ResumeTagSection title="Soft Skills" :items="data.skills" />
    </div>
    <div class="flex flex-col bg-slate-100 text-primary">
      <ResumeExperienceSection title="Work Experience" :items="work" />
      <ResumeExperienceSection title="Education" :items="education" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from '../data/resume.yaml'

const contact = computed(() => {
  const result = [
    {
      text: `${data.basics.location.city}, ${data.basics.location.region}`,
      icon: ['fas', 'location-dot'],
    },
    {
      text: data.basics.email,
      icon: ['fas', 'envelope'],
      link: 'mailto:' + data.basics.email,
    },
  ]

  data.basics.profiles.forEach(
    (profile: { username: string; faIcon: string[]; url: string }) => {
      result.push({
        text: profile.username,
        icon: profile.faIcon,
        link: profile.url,
      })
    },
  )

  return result
})

const work = computed(() =>
  data.work.map((item: any) => {
    return {
      roles: item.positions,
      organisation: {
        name: item.company,
        url: item.url,
      },
      summary: item.summary,
      highlights: item.highlights,
      tags: item.tags,
    }
  }),
)

const education = computed(() =>
  data.education.map((item: any) => {
    const highlights = [`Score: ${item.score}`, `Thesis: ${item.thesis}`]

    if (item.description) {
      highlights.push(item.description)
    }

    const role = {
      name: `${item.area}, ${item.degree}`,
      startDate: item.startDate,
      endDate: item.endDate,
    }

    return {
      roles: [role],
      organisation: {
        name: item.institution,
        url: item.url,
      },
      highlights,
      tags: item.courses,
    }
  }),
)
</script>
