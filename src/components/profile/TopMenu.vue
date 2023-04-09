<template>
    <div :class="$style.wrapper">
        <v-btn width="130px" height="130px" :class="$style.btn_book" variant="flat">
            <div class="d-flex flex-column">
                <p :class="$style.title">내 이야기책</p>
                <div class="d-flex flex-row align-center">
                    <v-img :src="book" width="32px"></v-img>
                    <p :class="$style.book_counts">225</p>
                </div>
            </div>
        </v-btn>
        <v-btn width="130px" height="130px" :class="$style.btn_card" variant="flat">
            <div class="d-flex flex-column">
                <p :class="$style.title">내 이야기책</p>
                <div class="d-flex flex-row align-center">
                    <v-img :src="card" width="32px"></v-img>
                    <p :class="$style.book_counts">**55</p>
                </div>
            </div>
        </v-btn>
    </div>
</template>

<script setup>
const book = new URL('@/assets/images/icon_book.png', import.meta.url).href;
const card = new URL('@/assets/images/icon_card.png', import.meta.url).href;
</script>

<style lang="scss" scoped module>
.wrapper {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    z-index: 1;

    .btn_book {
        background-color: #00c853;
        color: white;
        font-weight: 900;
        border-radius: 24px;
        margin: 0 8px;

        .title {
            font-size: 1rem;
            font-weight: 900;
            letter-spacing: -0.2px;
            margin-bottom: 12px;
        }

        .book_counts {
            font-size: 1.24rem;
            font-weight: 900;
            letter-spacing: -0.2px;
            margin-left: 8px;
        }
    }

    .btn_card {
        background-color: #FFD14C;
        color: #222;
        font-weight: 900;
        border-radius: 24px;
        margin: 0 8px;

        .title {
            font-size: 1rem;
            font-weight: 900;
            letter-spacing: -0.2px;
            margin-bottom: 12px;
        }

        .book_counts {
            font-size: 1.24rem;
            font-weight: 900;
            letter-spacing: -0.2px;
            margin-left: 8px;
        }
    }
}

</style>
