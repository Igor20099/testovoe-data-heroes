<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import CharacterListComponent from "./components/CharacterListComponent.vue";
import FilterComponent from "./components/FilterComponent.vue";
import PaginatorComponent from "./components/PaginatorComponent.vue";

const pages = ref(0);
const characters = ref([]);

const store = useStore();

onMounted(() => {
  store.dispatch("fetchData", {
    page: store.state.currentPage,
    filterName: "",
    filterStatus: "",
  });
});

const changePage = async (page) => {};
</script>

<template>
  <FilterComponent />
  <CharacterListComponent :characters="$store.state.characters" />
  <PaginatorComponent />
</template>
