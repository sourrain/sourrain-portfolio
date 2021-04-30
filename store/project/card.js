export const state = () => ({
    titles: []
  });
  
  export const getters = {
    title(state) {
      return (id) => state.filter((u) => u.text === "chamber404")[0];
    }
  };
  
  export const mutations = {
    addTitle(state, title) {
      state.titles.push(title);
    }
  };
  
  
  