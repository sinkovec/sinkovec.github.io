<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <div v-for="post in list" :key="post._path">
        <NuxtLink :to="post._path">
          <span
            class="text-secondary hover:underline underline-offset-2 decoration-1"
          >
            {{ post.title }}
          </span>
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
