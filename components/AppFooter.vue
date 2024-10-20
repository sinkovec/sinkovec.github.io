<template>
  <div class="flex justify-center py-3">
    <div class="flex-col">
      <ul class="flex justify-center py-2">
        <li v-for="item of socialItems" :key="item.name" class="px-3">
          <NuxtLink :to="item.link" class="text-white text-2xl">
            <Icon :name="item.icon" />
          </NuxtLink>
        </li>
      </ul>
      <p class="text-secondary *:inline-block text-center *:px-0.5">
        <span>© Copyright 2023 Brian Sinkovec.</span>
        <span>All rights reserved.</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type SocialItem = {
  name: string
  icon: string
  link: string
}

const socialItems: SocialItem[] = [
  {
    name: 'mail',
    icon: 'fa6-solid:envelope',
    link: 'mailto:bsin1807@gmail.com',
  },
  {
    name: 'github',
    icon: 'fa6-brands:github',
    link: 'https://www.github.com/sinkovec',
  },
  {
    name: 'linkedin',
    icon: 'fa6-brands:linkedin',
    link: 'https://linkedin.com/in/brian-sinkovec-9541b8242',
  },
  {
    name: 'xing',
    icon: 'fa6-brands:xing',
    link: 'https://xing.com/profile/Brian_Sinkovec',
  },
]
</script>
