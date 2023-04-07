import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import Book from "../pages/Book.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/book', name: 'Book', component: Book },
    ]
});

export default router;
