<template>
  <div class="filter">
    <form class="form">
      <input type="text" placeholder="Имя" v-model="name" />
      <select name="status" id="" v-model="status">
        <option value="" selected>All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        @click.prevent="
          $store.dispatch('fetchData', {
            page: 1,
            filterName: name,
            filterStatus: status,
          })
        "
      >
        Применить
      </button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const name = ref("");
const status = ref("");

const store = useStore();
</script>

<style scoped>
.filter {
  margin: 0 auto;
  width: 80%;
  margin-top: 24px;
}

.form {
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
