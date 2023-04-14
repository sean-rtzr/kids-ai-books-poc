const home = {
    state: {
        isLoading: false,
        isOpenComment: false,
        book_init: {
            char1_name: "",
            char1_src: new URL(
                "@/assets/images/char_sample1.gif",
                import.meta.url
            ).href,
            char2_name: "",
            char2_src: new URL(
                "@/assets/images/char_sample7.gif",
                import.meta.url
            ).href,
            objects: [],
            title: "",
            cover: "",
            comment: "산이 어머님 윤이가 요즘 산이랑 친하게 <br/>지내서 너무 행복해해요.<br/>이야기를 읽고 산이도 행복했으면 좋겠어요.",
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
        getIsLoading: (state) => state.isLoading,
        getBookInit: (state) => state.book_init,
        getOptions: (state) => state.options,
        getAddFriend: (state) => state.addFriend,
        getCurrentStory: (state) => state.currentStory,
        getBookCover: (state) => state.book_init.cover,
        getChar1Src: (state) => state.book_init.char1_src,
        getChar2Src: (state) => state.book_init.char2_src,
        getObjects: (state) => state.book_init.objects,
        getOpenComment: (state) => state.isOpenComment,
        getComment: (state) => state.book_init.comment,
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setOpenComment(state, val) {
            state.isOpenComment = val;
        },
        setComment(state, comment) {
            state.book_init.comment = comment;
        },
        setBookInit(state, book_init) {
            state.book_init = book_init;
        },
        setChar1Name(state, name) {
            state.book_init.char1_name = name;
        },
        setChar2Name(state, name) {
            state.book_init.char2_name = name;
        },
        setBookTitle(state, title) {
            state.book_init.title = title;
        },
        setBookStory(state, story) {
            state.book_init.book_story = story;
        },
        setBookCover(state, cover) {
            state.book_init.cover = cover;
        },
        setChar1Src(state, src) {
            state.book_init.char1_src = src;
        },
        setChar2Src(state, src) {
            state.book_init.char2_src = src;
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
        },
        setObjects(state, object) {
            state.book_init.objects.push(object);
        },
        deleteObjects(state, object) {
            state.book_init.objects = state.book_init.objects.filter(item => item.value !== object.value)
        },
        resetObjects(state) {
            state.book_init.objects = [];
        }
    },
};

export default home;
