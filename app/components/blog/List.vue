<template>
  <template v-if="posts?.length">
    <div class="flex flex-col gap-4">
      <div v-for="post in posts" :key="post.path" class="flex justify-center">
        <NuxtLink :to="post.path">
          <span class="text-xl py-4">{{ post.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex justify-center">
      <p>Coming soon...</p>
    </div>
  </template>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)
</script>
