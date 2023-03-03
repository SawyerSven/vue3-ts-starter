<template>
  <div class="home-index">
    <nav :class="{ hidden: !inited }">
      <div
        @mouseenter="(el) => setWidth(el, 0)"
        @mouseleave="(el) => resetWidth(el)"
        :class="['item', { close: isClose }]"
      >
        <div class="content">
          <h1>O</h1>
          <p>搜索</p>
        </div>
      </div>
      <div
        @mouseenter="(el) => setWidth(el, 1)"
        @mouseleave="(el) => resetWidth(el)"
        :class="['item', { close: isClose }]"
      >
        <div class="content">
          <h1>O</h1>
          <p>你好世界</p>
        </div>
      </div>
      <div
        @mouseenter="(el) => setWidth(el, 2)"
        @mouseleave="(el) => resetWidth(el)"
        :class="['item', { close: isClose }]"
      >
        <div class="content">
          <h1>O</h1>
          <p>菜单</p>
        </div>
      </div>
      <div
        @mouseenter="(el) => setWidth(el, 3)"
        @mouseleave="(el) => resetWidth(el)"
        :class="['item', { close: isClose }]"
      >
        <div class="content">
          <h1>O</h1>
          <p>个人中心</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

let contentWidths = reactive([] as number[])

const isClose = ref(false)

const inited = ref(false)

const setWidth = (el: any, index: number) => {
  el.target.setAttribute('style', `width:${contentWidths[index]}px`)
}

const resetWidth = (el: any) => {
  el.target.removeAttribute('style')
}

onMounted(() => {
  const contents = document.querySelectorAll('.content')
  contentWidths = Array.from(contents).map((el: Element) => el.clientWidth)
  isClose.value = true
  contents.forEach((el: Element, index: number) => {
    el.setAttribute('style', `width:${contentWidths[index]}px`)
  })
  console.log(contentWidths)
  setTimeout(() => {
    inited.value = true
  }, 500)
})
</script>

<style lang="scss" scoped>
nav {
  &.hidden {
    visibility: hidden;
  }
  width: 500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  .item {
    &.close {
      width: 20px;
    }
    width: 400px;
    height: 40px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease-in-out;
    text-align: right;
    &::after {
      content: '';
      height: 0;
      clear: both;
      display: block;
      visibility: hidden;
      overflow: hidden;
    }
    & + .item {
      margin-left: 20px;
    }
    .content {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      h1 {
        margin-right: 10px;
      }
    }
  }
}
</style>
