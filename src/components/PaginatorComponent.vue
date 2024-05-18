<template>
  <div class="paginator">
    <ul class="list">
      <li
        @click.prevent="
          $store.dispatch('fetchData', {
            page: page,
            filterName: $store.state.filterName,
            filterStatus: $store.state.filterStatus,
          })
        "
        class="page"
        :class="$store.state.currentPage === page ? 'active' : ''"
        :key="i"
        v-for="(page, i) in $store.state.pages"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.paginator {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.list {
  display: flex;
  list-style-type: none;
}

.page {
  margin-right: 8px;
  cursor: pointer;
}

.active {
  color: #5a5a5a;
}
</style>
