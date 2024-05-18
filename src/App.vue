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
        <h2 class="title">{{ character.name }}</h2>
        <p class="status">{{ character.status }} - {{ character.species }}</p>
        <p class="location">Last known location:</p>
        <p class="location-name">{{ character.location.name }}</p>
        <p class="first-seen">First seen in:</p>
        <p class="first-seen-episode">{{ character.firstSeen }}</p>
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
  padding: 24px;
  width: 80%;
  margin: 0 auto;
}

.character {
  display: flex;
  border: 1px solid #000;
  border-radius: 16px;
  background-color: #3c3e44;
}

.list {
  display: flex;
  list-style-type: none;
}

.page {
  margin-right: 8px;
  cursor: pointer;
}

.title {
  font-size: 32px;
}

.status {
  margin-bottom: 24px;
}

.location {
  color: #a09f9d;
  margin-bottom: 8px;
}

.location-name {
  margin-bottom: 24px;
  font-size: 20px;
}

.first-seen {
  color: #a09f9d;
  margin-bottom: 8px;
}

.first-seen-episode {
  font-size: 20px;
}

.image {
  border-radius: 16px;
  width: 230px;
  margin-right: 16px;
}
</style>
