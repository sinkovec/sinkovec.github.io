<template>
  <div class="flex justify-between py-2">
    <div>
      <NuxtLink to="/">
        <span
          class="font-thin text-4xl text-secondary hover:underline underline-offset-2 decoration-1"
        >
          brian sinkovec
        </span>
      </NuxtLink>
    </div>
    <nav class="content-center">
      <ul class="flex gap-4">
        <li v-for="nav of navigation" :key="nav.title">
          <NuxtLink :to="nav.path">
            <span
              class="text-secondary hover:underline underline-offset-2 decoration-1"
            >
              {{ nav.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
type NavigationItem = {
  title: string
  path: string
}

const navigation: NavigationItem[] = [
  {
    title: 'blog',
    path: 'blog',
  },
  {
    title: 'resume',
    path: 'resume',
  },
]
</script>
