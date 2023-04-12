const home = {
  state: {
    options: {
      isOpen: false,
    },
    addFriend: {
      isAdded: false,
    },
  },
  getters: {
    getOptions: (state) => state.options,
    getAddFriend: (state) => state.addFriend,
  },
  mutations: {
    setOptions(state, options) {
      state.options = options;
    },
    setAddFriend(state, addFriend) {
      state.addFriend = addFriend;
    },
  },
};

export default home;
