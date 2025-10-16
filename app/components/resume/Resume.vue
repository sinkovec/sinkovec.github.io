<template>
  <div class="grid grid-rows-[18%_82%] grid-cols-[30%_70%] h-full">
    <ResumeBioPhoto class="bg-primary" />
    <ResumeHeader
      :name="data.basics.name"
      :label="data.basics.label"
      class="bg-neutral-50 text-primary"
    />
    <div class="flex flex-col gap-4 bg-primary text-neutral-50">
      <ResumeContactSection :contact="contact" />
      <ResumeTagSection title="Skills" :items="data.skills" />
    </div>
    <div class="flex flex-col bg-neutral-50 text-primary">
      <ResumeExperienceSection title="Work Experience" :items="work" />
      <ResumeExperienceSection title="Education" :items="education" />
      <ResumeExperienceSection title="Personal Projects" :items="projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from '../data/resume.yaml'

const contact = computed(() => {
  const result = [
    {
      text: `${data.basics.location.city}, ${data.basics.location.region}`,
      icon: 'fa6-solid:location-dot',
    },
    {
      text: data.basics.email,
      icon: 'fa6-solid:envelope',
      link: 'mailto:' + data.basics.email,
    },
  ]

  data.basics.profiles.forEach(
    (profile: { title: string; icon: string; url: string }) => {
      result.push({
        text: profile.title,
        icon: profile.icon,
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
    let highlights = item.highlights
    if (!highlights) {
      highlights = [`Score: ${item.score}`, `Thesis: ${item.thesis}`]
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

const projects = computed(() =>
  data.projects.map((item: any) => {
    return {
      roles: [
        {
          name: item.title,
        },
      ],
      organisation: {
        name: item.repo,
        url: `${item.url}/${item.repo}`,
      },
      summary: item.summary,
      highlights: item.highlights,
      tags: item.tags,
    }
  }),
)
</script>
