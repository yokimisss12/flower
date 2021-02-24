<template>
  <div class="menuList">
    <router-link :to="{ path: '/' }"> 你好，有缘人</router-link>
    <router-link :to="{ path: '/getone' }"> 领养一种花吧</router-link>
    <router-link :to="{ path: '/interested' }"> 花朵趣闻</router-link>
    <router-link :to="{ path: '/balcony' }"> 阳台上的花儿</router-link>
    <router-link :to="{ path: '/seasons' }"> 一年四季，只为你盛开</router-link>
  </div>
</template>

<script>

export default {
  name: "menuList",
  data() {
    return {
      msg: "menuList",
    };
  },
};
</script>

<style scoped>
</style>
