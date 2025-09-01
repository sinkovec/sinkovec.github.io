<template>
  <div class="grid grid-cols-[33%_67%] min-h-full">
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
      <ResumeExperienceSection title="Personal" :items="personal" />
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
    (profile: { username: string; icon: string; url: string }) => {
      result.push({
        text: profile.username,
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
    var highlights = item.highlights
    if (!highlights) {
      highlights = [`Score: ${item.score}`, `Thesis: ${item.thesis}`]

      if (item.description) {
        highlights.push(item.description)
      }
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

const personal = computed(() => 
  data.personal.map((item: any) => {
    return {
      roles: [
        {
          name: item.title
        }
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
