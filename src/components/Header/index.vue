<template>
  <header class="header">
    <div class="logo">
      <i class="back" />
    </div>
    <div class="tabs">
      <div v-for="item in tabList" class="tab-item" :key="item.name">
        <RouterLink :to="item.link">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <RouterLink class="user" to="/user">
      <i class="iconfont icon-user" />
    </RouterLink>
  </header>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
  @import 'index';
</style>
