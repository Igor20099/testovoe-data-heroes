<template>
  <div class="filter">
    <form class="form">
      <input type="text" placeholder="Имя" v-model="name" class="input" />
      <select name="status" id="" v-model="status" class="select">
        <option value="" selected>All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        class="btn"
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
import { ref } from "vue";

const name = ref("");
const status = ref("");
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

.btn {
  cursor: pointer;
  padding: 8px;
}

.select {
  padding: 8px;
}

.input {
  padding: 8px;
}
</style>
