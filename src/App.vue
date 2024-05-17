<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";

const pages = ref(0);
const characters = ref([]);
const currentPage = ref(1);

onMounted(async () => {
  console.log(currentPage.value);
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${currentPage.value}`
  );
  console.log(response.data.results);
  pages.value = response.data.info.pages;
  characters.value = response.data.results;
  characters.value.forEach(async (char) => {
    const firstEpisode = await axios.get(char.episode[0]);
    console.log(firstEpisode.data.name);
    char.firstSeen = firstEpisode.data.name;
  });
});

const changePage = async (page) => {
  currentPage.value = page;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${currentPage.value}`
  );
  console.log(response.data.results);
  pages.value = response.data.info.pages;
  characters.value = response.data.results;
  characters.value.forEach(async (char) => {
    const firstEpisode = await axios.get(char.episode[0]);
    console.log(firstEpisode.data.name);
    char.firstSeen = firstEpisode.data.name;
  });
};
</script>

<template>
  <ul class="characters">
    <li :key="character.id" v-for="character in characters" class="character">
      <img :src="character.image" alt="charcter" class="image" />
      <div class="info">
        <h2>{{ character.name }}</h2>
        <p>{{ character.status }} - {{ character.species }}</p>
        <p>Last known location:</p>
        <p>{{ character.location.name }}</p>
        <p>First seen in:</p>
        <p>{{ character.firstSeen }}</p>
      </div>
    </li>
  </ul>
  <div class="pagination">
    <ul class="list">
      <li
        @click.prevent="changePage(page)"
        class="page"
        :key="i"
        v-for="(page, i) in pages"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.characters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
}

.character {
  display: flex;
  border: 1px solid #000;
  border-radius: 16px;
}

.list {
  display: flex;
  list-style-type: none;
}

.page {
  margin-right: 8px;
  cursor: pointer;
}

.image {
  border-radius: 16px;
}
</style>
