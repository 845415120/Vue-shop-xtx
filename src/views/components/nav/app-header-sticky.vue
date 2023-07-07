<template>
  <div class="app-header-sticky" :class="{show:y>=78}">
    <div class="container" v-show="y>=78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="left">
        <RouterLink to="/" >品牌</RouterLink>
        <RouterLink to="/" >专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from './app-header-nav'
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  setup () {
    const { y } = useWindowScroll()
    return { y }
  }
}
</script>