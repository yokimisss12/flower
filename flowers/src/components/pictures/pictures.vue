<template>
  <div class="pictures">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="pic-box">
          <img :src="pictures.cat1" alt="cat1" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="pic-box">
          <img :src="pictures.cat2" alt="cat3" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="pic-box">
          <img :src="pictures.cat3" alt="cat3" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="pic-box">
          <img :src="pictures.cat" alt="cat" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: "pictures",
  data() {
    return {
      msg: "pictures",
      value2: 0,
      pictures: {
        cat: require("../../assets/cat1.jpg"),
        cat1: require("../../assets/cat2.jpg"),
        cat2: require("../../assets/cat3.jpg"),
        cat3: require("../../assets/cat4.jpg"),
      },
    };
  },
};
</script>

<style lang="less" scoped>
.pictures {
padding: 20px 60px;
  .pic-box {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    img {
     width: 600px;
     height: auto;
    }
  }
}
</style>
