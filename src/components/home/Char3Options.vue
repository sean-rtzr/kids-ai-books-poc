<template>
    <div :class="$style.wrapper">
        <div v-for="object in objects" :key="object.id" :class="$style.item">
            <v-img :src="object.src" :class="$style.obj"></v-img>
            <v-btn
                    :class="$style.btn"
                    :value="object.value"
                    variant="flat"
                    class="btn border-sm"
                    @click="onSelectedItem(object.id-1)">
                선택
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();
const objects = [
    {
        id: 1,
        name: "비치볼",
        value: "obj1",
        src: new URL(
            "@/assets/images/obj_options_sample1.png",
            import.meta.url
        ).href,
    },
    {
        id: 2,
        name: "풍선",
        value: "obj2",
        src: new URL(
            "@/assets/images/obj_options_sample2.png",
            import.meta.url
        ).href,
    },
    {
        id: 3,
        name: "마법사 모자",
        value: "obj3",
        src: new URL(
            "@/assets/images/obj_options_sample3.png",
            import.meta.url
        ).href,
    },
    {
        id: 4,
        name: "로켓",
        value: "obj4",
        src: new URL(
            "@/assets/images/obj_options_sample4.png",
            import.meta.url
        ).href,
    },
    {
        id: 5,
        name: "강아지",
        value: "obj5",
        src: new URL(
            "@/assets/images/obj_options_sample5.png",
            import.meta.url
        ).href,
    },
    {
        id: 6,
        name: "고양이",
        value: "obj6",
        src: new URL(
            "@/assets/images/obj_options_sample6.png",
            import.meta.url
        ).href,
    },

]

const onSelectedItem = (no) => {
    const btns = document.querySelectorAll(".btn");
    if (btns[no].getAttribute("data-selected") === "true") {
        btns[no].setAttribute("data-selected", false);
        store.commit('deleteObjects', objects[no]);
    } else {
        btns[no].setAttribute("data-selected", true);
        store.commit('setObjects', objects[no]);
    }

};
</script>

<style lang="scss" scoped module>
.wrapper {
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .obj {
      width: 84px;
      height: 84px;
    }

    .btn {
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 900;

      &[data-selected="true"] {
        background-color: #00c853;
        color: white;
      }
    }
  }
}
</style>
