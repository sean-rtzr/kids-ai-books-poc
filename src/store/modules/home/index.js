const home = {
    state: {
        options: {
            isOpen: false,
        },
    },
    getters: {
        getOptions: (state) => state.options,
    },
    mutations: {
        setOptions(state, options) {
            state.options = options;
        }
    }
}

export default home;
