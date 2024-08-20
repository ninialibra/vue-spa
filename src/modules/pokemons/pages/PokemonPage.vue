<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`"
      alt="Pokemon"
      class="mt-5"
    />

    <router-link
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-700"
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      >Siguiente</router-link
    >
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number
}

defineProps<Props>()
</script>
