<template>
  <button class="menu_bottom" @click="isMenuOpen = true">≡</button>
    <transition name="slide">
      <div class="menu" v-if="isMenuOpen">
        <MenuItem :itemData="MENU_LIST"/>
      </div>
    </transition>
</template>

<script setup>
import { ref,onMounted,onUnmounted } from 'vue';
import MenuItem from "@/components/ui/NavigationMenu/MenuItem.vue";
import { MENU_LIST } from '@/config/index.js';

const isMenuOpen = ref(false)


onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

onMounted(()=>{
  document.addEventListener('click', handleClickOutside);
})

const handleClickOutside = (event) => {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('.menu_bottom');
  
  if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

</script>

<style lang="scss" scoped>
.menu_bottom {
  padding: 0 10px;
  font-size: 20px;
}
.menu {
  padding: 10px 0 10px 5px;
  position: fixed;
  right: 0;
  background: #000;
  top: 0;
  width: 60%;
  height: 100%;
  z-index: 1;
  opacity: .9;
}
</style>