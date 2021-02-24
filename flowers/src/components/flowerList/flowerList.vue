<template>
  <div class="flowerList">
    <Card :bordered="false">
      <p slot="title">Borderless card</p>
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </Card>

    <Card shadow>
      <p slot="title">Use a card with a shadow effect</p>
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </Card>
  </div>
</template>

<script>
export default {
  name: "flowerList",
  data() {
    return {
      flowers: [
        { id: 1, name: "梅花" },
        { id: 2, name: "桃花" },
        { id: 3, name: "樱花" },
        { id: 4, name: "菊花" },
        { id: 5, name: "玫瑰" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@color:red;

p{
background: @color;
}
</style>
