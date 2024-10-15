<template>
  <div class="flex flex-col space-y-4 text-xl">
    <NuxtImg src="/img/bio-photo.png" class="mx-auto w-1/3" />
    <p>
      Hi, my name is Brian Sinkovec and I'm an enthusiastic software engineer
      from Aachen, Germany. I graduated from
      <NuxtLink to="https://www.rwth-aachen.de"
        >RWTH Aachen University
      </NuxtLink>
      in 2023 and obtained my master's degree in computer science with honors.
      Besides being a nerd, I like coffee, hiking, martial arts, Marvel, and
      probably a lot more. Here are four facts about me:
    </p>

    <ul class="list-inside list-disc">
      <li>
        Most interested in DevOps and security a.k.a.
        <span class="font-bold">DevSecOps</span>
      </li>
      <li>
        Proficient in Java + Spring Boot, cloud technologies like k8s, and a few
        other things
      </li>
      <li>Advocates clean code, *-as-code, and to keep it simple.</li>
      <li>Always forgets the fourth one...</li>
    </ul>

    <p>
      Feel free to contact me. Except you're a bot. Or a lizard. Then don't.
    </p>
  </div>
</template>
