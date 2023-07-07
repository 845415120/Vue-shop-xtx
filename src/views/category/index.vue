<template>
  <AppTopnav></AppTopnav>
  <AppHeader></AppHeader>
  <div class='xtx-bread'>
  <div class="xtx-bread-item">
      <RouterLink to="/">首页</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <RouterLink to="/category/10000">电器</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span>空调</span>
    </div>
  </div>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <!-- <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>空调</XtxBreadItem>
      </XtxBread> -->
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height:500px" />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in 8" :key="i">
            <a href="javascript:;">
              <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(9).png" >
              <p>空调</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 不同分类商品 -->
    </div>
  </div>

  <AppFooter></AppFooter>
</template>
<script>
import GoodsItem from './components/goods-item'
  import  AppTopnav from '@/views/components/app-topnav.vue'
  import  AppHeader from '@/views/components/app-header.vue'
  import  AppFooter from '@/views/components/app-footer.vue'
export default {
  name: 'TopCategory',
  components:{
    AppTopnav,
    AppHeader,
    AppFooter,
    GoodsItem
  }
}
</script>
<style scoped lang='less'>
.xtx-bread{
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}

// 1
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>
