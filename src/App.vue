<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { RouterView } from 'vue-router'
import { useName } from './hooks/useName'
import { request } from './services/request'

const data = ref()

onMounted(async () => {
  data.value = (await request.get('/')).data
})

const { name, setName } = useName()
</script>

<template>
  <div>
    {{ name }}
    {{ data }}
    <RouterView />
    <el-button type="primary" @click="() => setName('sunsiyuan')">修改名称</el-button>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 20px;
}
</style>
