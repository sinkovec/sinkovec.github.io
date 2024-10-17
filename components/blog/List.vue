<template>
  <main>
    <ContentList :query="query">
      <template #default="{ list }">
        <div class="flex flex-col gap-4">
          <div
            v-for="post in list"
            :key="post._path"
            class="flex justify-center"
          >
            <NuxtLink :to="post._path">
              <span class="text-xl py-4">{{ post.title }}</span>
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <div class="flex justify-center">
          <p>Coming soon...</p>
        </div>
      </template>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
const query = { path: 'blog', sort: [{ date: -1 }] }
</script>
