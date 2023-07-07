<template>
  <AppTopnav></AppTopnav>
  <AppHeader></AppHeader>

  <div class='xtx-goods-page'>
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/">手机</XtxBreadItem>
        <XtxBreadItem to="/">华为</XtxBreadItem>
        <XtxBreadItem to="/">p30</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage></GoodsImage>
          <GoodsSales />
        </div>
          <div class="spec">
            <GoodsName :goods="goods"/>
            <number></number>
          </div>
      </div>
      <!-- 商品推荐 -->
      <!-- <GoodsRelevant /> -->
      <HomeNew></HomeNew>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">
            <GoodsTabs></GoodsTabs>
          </div>
          <!-- 注意事项 -->
          <div class="goods-warn">
            <GoodsWarn />
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <GoodsHot />
          <!-- <GoodsHot :goodsId="goods.id" :type="2" /> -->
        </div>
      </div>
    </div>
  </div>
  <AppFooter></AppFooter>

</template>
<script>
import GoodsWarn from './components/goods-warn'
import GoodsHot from './components/goods-hot'
import GoodsTabs from './components/goods-tabs'
import HomeNew from '@/views/components/home/home-news.vue'
import number from './components/numbox.vue'
import GoodsSales from './components/goods-sales'
import GoodsName from './components/goods-name'
import GoodsImage from './components/goods-image'
import GoodsRelevant from './components/goods-relevant'
  import  AppTopnav from '@/views/components/app-topnav.vue'
  import  AppHeader from '@/views/components/app-header.vue'
  import  AppFooter from '@/views/components/app-footer.vue'
export default {
  name: 'TopCategory',
  components:{
    AppTopnav,
    AppHeader,
    AppFooter,
    GoodsRelevant ,
    GoodsSales,
    GoodsName ,
    GoodsImage,
    number,
    HomeNew,GoodsTabs,GoodsHot,GoodsWarn 
    
  }
}
</script>
<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>