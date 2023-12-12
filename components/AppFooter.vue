<template>
  <div class="flex justify-center py-3">
    <div class="flex-col">
      <ul class="flex justify-center py-2">
        <li v-for="item of socialItems" :key="item.name" class="px-3">
          <NuxtLink :to="item.link">
            <FontAwesomeIcon :icon="item.icon" size="xl" />
          </NuxtLink>
        </li>
      </ul>
      <p class="text-secondary">
        © Copyright 2023 Brian Sinkovec. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type SocialItem = {
  name: string
  icon: string[]
  link: string
}

const socialItems: SocialItem[] = [
  {
    name: 'mail',
    icon: ['fas', 'envelope'],
    link: 'mailto:bsin1807@gmail.com',
  },
  {
    name: 'github',
    icon: ['fab', 'github'],
    link: 'https://www.github.com/sinkovec',
  },
  {
    name: 'linkedin',
    icon: ['fab', 'linkedin'],
    link: 'https://linkedin.com/in/brian-sinkovec-9541b8242',
  },
  {
    name: 'xing',
    icon: ['fab', 'xing'],
    link: 'https://xing.com/profile/Brian_Sinkovec',
  },
]
</script>
