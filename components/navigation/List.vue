<template>
  <ul class="gap-4">
    <li v-for="nav of navigation" :key="nav.title">
      <NuxtLink :to="nav.path">
        <span class="hover:underline underline-offset-2 decoration-1">
          {{ nav.title }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
type NavigationItem = {
  title: string
  path: string
}

const navigation: NavigationItem[] = [
  {
    title: 'blog',
    path: '/blog',
  },
  {
    title: 'resume',
    path: '/resume',
  },
]
</script>
