<template>
  <div
    class="flex flex-col p-8 gap-8 bg-neutral-50 text-sm text-primary min-h-full"
  >
    <div class="flex flex-col text-right text-gray-400">
      <span class="font-semibold">{{ basics.name }}</span>
      <span>{{ basics.location.address }}</span>
      <span>{{ basics.location.postalCode }} {{ basics.location.city }}</span>
      <span>{{ basics.location.region }}</span>
      <span>{{ basics.phone }}</span>
      <span>{{ basics.email }}</span>
    </div>
    <div class="flex flex-col">
      <span class="font-bold">{{ data.company.name }}</span>
      <span>{{ data.company.contact.name }}</span>
      <span>{{ data.company.location.address }}</span>
      <span>
        {{ data.company.location.postalCode }}
        {{ data.company.location.city }}
      </span>
      <span>{{ data.company.location.region }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-base font-bold">
        Application as {{ data.position }}
      </span>
      <span class="italic">{{ moment().format('MMM D, YYYY') }}</span>
    </div>
    <span>Dear Sir or Madam,</span>
    <p class="text-wrap whitespace-pre leading-5">{{ data.body }}</p>
    <div class="flex flex-col text-sm">
      <span>Best regards</span>
      <span class="font-semibold">{{ basics.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import resume from '../data/resume.yaml'
import data from '../data/letter.yaml'

const basics = resume.basics
</script>

<style></style>
