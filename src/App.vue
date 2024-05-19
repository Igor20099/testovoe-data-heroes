<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import CharacterListComponent from "./components/CharacterListComponent.vue";
import FilterComponent from "./components/FilterComponent.vue";
import PaginatorComponent from "./components/PaginatorComponent.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchData", {
    page: 1,
    filterName: "",
    filterStatus: "",
  });
});
</script>

<template>
  <div class="wrapper">
    <FilterComponent />
    <NotFoundComponent v-if="$store.state.isError" />
    <CharacterListComponent :characters="$store.state.characters" v-else />
    <PaginatorComponent v-if="!$store.state.isError" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
