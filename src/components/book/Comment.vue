<template>
    <v-dialog
            v-model="isOpenComment.value"
            persistent
    >
        <v-card class="px-4 rounded-lg" >
            <v-card-title class="pa-0 py-4 pb-6">메세지 입력</v-card-title>
            <v-textarea
                    v-model="comment"
                    density="compact"
                    bg-color="white"
                    placeholder="멘트를 입력해주세요."
                    ></v-textarea>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text
                        @click="closeComment"
                >취소</v-btn>
                <v-btn
                        text
                        @click="saveComment"
                >저장</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const comment = ref("");
const isOpenComment = reactive(computed(() => store.getters.getOpenComment))
const closeComment = () => {
    store.commit('setOpenComment', false);
}
const saveComment = () => {
    store.commit('setComment', comment.value);
    store.commit('setOpenComment', false);
}
</script>

<style lang="scss" scoped>

</style>
