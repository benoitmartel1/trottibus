<template>
  <div class="footer">
    <div class="wrapper">
      <NuxtLink to="/">
        <div :class="['index' == route.name ? 'selected' : '', 'btn']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="32"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152zM48 192h352v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z"
            />
          </svg>
        </div>
      </NuxtLink>
      <NuxtLink to="/chat">
        <div :class="['chat' == route.name ? 'selected' : '', 'btn']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2q-6.15 3.15-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5m224 128c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5s2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1c28.8-30.3 46-68.6 46-110.4c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8v.6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18q-6.45-2.85-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480"
            />
          </svg>
        </div>
      </NuxtLink>
      <div class="btn circuit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="32"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M565.6 36.2C572.1 40.7 576 48.1 576 56v336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1.3l-183.9-61.2l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3l183.9 61.2l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5v284.6l120-45.7V90.8zm312 286.2V137.3l-144-48v285.4zm48-1.5l120-45.7V90.9l-120 45.6v284.6z"
          />
        </svg>
      </div>
      <NuxtLink to="/edit" v-if="user.role == 'admin'">
        <div :class="['edit' == route.name ? 'selected' : '', 'btn']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1L377.9 88L407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9l46.1 46.1l-134.3 134.2c-2.9 2.9-6.5 5-10.4 6.1L186.9 325l16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25c-28.1-28.1-73.7-28.1-101.8 0M88 64c-48.6 0-88 39.4-88 88v272c0 48.6 39.4 88 88 88h272c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const route = useRoute();
const { user } = useSettings();

const currentSection = ref(null);

watch(
  route,
  (value) => {
    currentSection.value = route.name;
  },
  { deep: true, immediate: true }
);

console.log(route.name);
</script>

<style lang="scss" scoped>
.footer {
  flex-shrink: 0;
  color: white;
  .wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: auto;
    .selected {
      background-color: red;
    }
  }

  width: 100%;
  height: 80px;
  background-color: black;
  //   position: absolute;
  //   bottom: 0;
}
</style>
