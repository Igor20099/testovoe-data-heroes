<template>
  <li class="character">
    <img :src="character.image" alt="charcter" class="image" />
    <div class="info">
      <h2 class="title">{{ character.name }}</h2>
      <div class="status-container">
        <div class="circle" :class="getColorCircle(character.status)"></div>
        <p class="status">
          {{ character.status }} -
          {{ character.species }}
        </p>
      </div>
      <p class="location">Last known location:</p>
      <p class="location-name">{{ character.location.name }}</p>
      <p class="first-seen">First seen in:</p>
      <p class="first-seen-episode">{{ character.firstSeen }}</p>
    </div>
  </li>
</template>

<script setup>
import { getColorCircle } from "../utils/getColorCircle";
defineProps({
  character: {},
});
</script>

<style scoped>
.character {
  display: flex;
  border: 1px solid #000;
  border-radius: 16px;
  background-color: #3c3e44;
}

.title {
  font-size: 32px;
  margin-top: 8px;
}

.status-container {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.circle {
  width: 9px;
  height: 9px;
  border: 1px solid black;
  margin-right: 8px;
  border-radius: 50%;
}

.circle-red {
  background-color: red;
}

.circle-green {
  background-color: rgb(63, 241, 36);
}

.circle-grey {
  background-color: grey;
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
