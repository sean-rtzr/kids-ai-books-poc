const home = {
    state: {
        book_init: {
            char1_name: "",
            char2_name: "",
            objects: [],
            book_story: ""
        },
        options: {
            isOpen: false,
        },
        addFriend: {
            isAdded: false,
        },
        currentStory: null,
    },
    getters: {
        getBookInit: (state) => state.book_init,
        getOptions: (state) => state.options,
        getAddFriend: (state) => state.addFriend,
        getCurrentStory: (state) => state.currentStory,
    },
    mutations: {
        setBookInit(state, book_init) {
            state.book_init = book_init;
        },
        setChar1Name(state, name) {
            state.book_init.char1_name = name;
        },
        setChar2Name(state, name) {
            state.book_init.char2_name = name;
        },
        setBookStory(state, story) {
            state.book_init.book_story = story;
        },
        setOptions(state, options) {
            state.options = options;
        },
        setAddFriend(state, addFriend) {
            state.addFriend = addFriend;
        },
        setCurrentStory(state, {id, book_story}) {
            state.currentStory = id;
            state.book_init.book_story = book_story;
        }
    },
};

export default home;
