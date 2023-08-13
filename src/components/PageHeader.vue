<template>
  <header class="header">
    <NavigationMenu />
  </header>
</template>

<script setup>
import NavigationMenu from "@/components/ui/NavigationMenu/index.vue"
</script>

<style lang="scss">
.header{
  display: flex;
  justify-content: end;
  padding: 5px;
}
</style>