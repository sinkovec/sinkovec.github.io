<template>
  <main>
    <ContentList v-slot="{ list }" :query="query">
      <div class="flex flex-col gap-4">
        <div v-for="post in list" :key="post._path" class="flex justify-center">
          <NuxtLink :to="post._path">
            <span
              class="text-xl text-secondary hover:underline underline-offset-2 decoration-1 py-4"
            >
              {{ post.title }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
const query = { path: 'blog', sort: [{ date: -1 }] }
</script>
