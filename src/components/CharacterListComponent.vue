<template>
  <ul class="characters">
    <CharacterComponent
      :key="character.id"
      v-for="character in characters"
      :character="character"
    />
  </ul>
</template>

<script setup>
import CharacterComponent from "./CharacterComponent.vue";

defineProps({
  characters: Array,
});
</script>

<style scoped>
.characters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 24px;
  width: 80%;
  margin: 0 auto;
}
</style>
