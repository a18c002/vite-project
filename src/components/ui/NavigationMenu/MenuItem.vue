<template>
  <div class="menu_group" :class="{active:item.key === active}" v-for="item in itemData" :key="item.key">
    <div class="menu_title" :class="{active:item.key === active}" @click="setActive(item.key)">{{ item.text }}</div>
    <div v-if="item.children &&  item.key === active">
      <MenuItem :itemData="item.children" :layer="layer+1"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps,ref } from 'vue';

const menuData = ref(localStorage.getItem('menu')? JSON.parse(localStorage.getItem('menu')) : [])

const props = defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
  layer: {
    type: Number,
    default: 0,
  }
});

const active = ref(menuData.value[props.layer]||'')

const setActive = (key)=>{
  active.value = key
  menuData.value[props.layer] = key
  menuData.value.splice(props.layer,(menuData.value.length-1-props.layer))
  localStorage.setItem('menu',JSON.stringify(menuData.value))
}
</script>

<style lang="scss" scoped>
  .menu_group {

    padding-left: 20px;
    &.active {
      background: #808080;
    }
  }
  .menu_title {
    cursor: pointer;
    color: #fff;
    padding: 10px 0;
    &.active { 
      color: yellow;
    }
  }
</style>