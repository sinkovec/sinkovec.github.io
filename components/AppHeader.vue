<template>
  <div class="py-2">
    <div>
      <NuxtLink to="/">
        <span
          class="font-thin text-4xl text-secondary hover:underline underline-offset-2 decoration-1"
        >
          brian sinkovec
        </span>
      </NuxtLink>
    </div>
    <nav>
      <ul class="flex">
        <li v-for="nav of navigation" :key="nav.title">
          <NuxtLink :to="nav.path">
            {{ nav.title }}
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

const navigation: NavigationItem[] = []
</script>
