<template>
  <div class="hello">
    <menuList></menuList>
    <flowerList></flowerList>
    <!-- 轮播组件 -->
    <pictures></pictures>
  </div>
</template>

<script>
import menuList from "../../components/menu";
import flowerList from '../../components/flowerList/flowerList';
import pictures from '../../components/pictures/pictures';

export default {
  name: "home",
  components: {
    menuList,
    flowerList,
    pictures
  },
  data() {
    return {
      msg: "Home",
    };
  },
};
</script>

<style scoped>
</style>
