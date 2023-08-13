<template>
<main>
  <PageHeader />
  <div class="container">
    <div class="block_wrapper">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="ball">0</div>
      <div class="ball">0</div>
    </div>
  </div>
</main>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
</script>

<style lang="scss" scoped>
/* 样式调整 */
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container {
  background: #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block_wrapper{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding: 0 5px;
  position: relative;
}
.block {
  width: calc(100% / 3 - 5px);
  height: 100px;
  border: black solid 2px;
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);

  &:nth-child(3),&:nth-child(5),&:nth-child(9) {
    animation: blockAnimation 0.3s alternate infinite linear;
  }
}
.ball{
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #A5F12B;
  border-radius: 100%;
  &:nth-child(10) {
    left: 13%;
    top: 10%;
    animation: ballAnimation 1.5s normal infinite ease-in-out;
  }
  &:nth-child(11) {
    left: 13%;
    bottom: 10%;
    animation: ballAnimation 1.5s normal infinite ease-in-out;
  }
}

@keyframes blockAnimation {
  0%   {opacity: 100%;}
  100%  {opacity: 60%;}
}

@keyframes ballAnimation {
  0%   {left: 13%;}
  100%  {left: 75%;}
}
</style>

