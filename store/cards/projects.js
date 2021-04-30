export const state = () => ({
    users: []
  });
  
  export const getters = {
    user(state) {
      return (id) => state.filter((u) => u.text === "chamber404")[0];
    }
  };
  
  export const mutations = {
    addUser(state, user) {
      state.users.push(user);
    }
  };
  
  
  