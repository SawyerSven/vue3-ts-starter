<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useName } from './hooks/useName'

const { name, setName } = useName()
</script>

<template>
  <div>
    {{ name }}
    <RouterView />
    <el-button type="primary" @click="() => setName('sunsiyuan')">修改名称</el-button>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 20px;
}
</style>
