<script setup lang="ts">
import axios from '@/requests/restful/axios/index'
import { onMounted, ref } from 'vue'

import { RouterView } from 'vue-router'
import { useName } from './hooks/useName'

const data = ref()

onMounted(async () => {
  data.value = (await axios.get('http://localhost:3000')).data
})

const getError = async () => {
  await axios.get('http://localhost:3000/err')
}

const { name, setName } = useName()
</script>

<template>
  <div>
    {{ name }}
    {{ data }}
    <RouterView />
    <el-button type="primary" @click="() => setName('sunsiyuan')">修改名称</el-button>
    <el-button type="primary" @click="getError">获取error</el-button>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 20px;
}
</style>
