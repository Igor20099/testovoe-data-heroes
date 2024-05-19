import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      characters: [],
      pages: 0,
      currentPage: 0,
      filterName: "",
      filterStatus: "",
      isError: false,
    };
  },
  actions: {
    async fetchData({ commit, state }, { page, filterName, filterStatus }) {
      try {
        commit("setFilterName", filterName);
        commit("setFilterStatus", filterStatus);
        commit("setCurrentPage", page);
        commit("setIsError", false);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character`,
          {
            params: {
              page: page,
              name: state.filterName,
              status: state.filterStatus,
            },
          }
        );
        commit("setPages", response.data.info.pages);
        commit("setCharacters", response.data.results);
        state.characters.forEach(async (char) => {
          const firstEpisode = await axios.get(char.episode[0]);
          char.firstSeen = firstEpisode.data.name;
        });
        window.scrollTo(0, 0);
      } catch {
        commit("setIsError", true);
        commit("setCharacters", []);
      }
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setFilterName(state, filterName) {
      state.filterName = filterName;
    },
    setFilterStatus(state, filterStatus) {
      state.filterStatus = filterStatus;
    },
    setIsError(state, isError) {
      state.isError = isError;
    },
  },
});
