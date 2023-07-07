<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
      <HomeBanner />
          <!-- 新鲜好物 -->
    <HomeNews />
      <!-- 人气推荐 -->
      <HomeHot />
    <!-- 热门品牌 -->
    <HomeBrand />
        <!-- 商品区域 -->
    <HomeProduct />
    <!-- 最新区域 -->
    <HomeSpecial />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './home-category.vue'
import HomeBanner from './home-banner.vue';
import HomeNews from './home-news.vue';
import HomeHot from './home-hot.vue';
import HomeBrand from './home-brand.vue';
import HomeProduct from './shop/home-product.vue';
import HomeSpecial from './shop/home-special.vue';

export default {
  name: 'PageHome',
  components: { 
    HomeCategory,
    HomeBanner,
    HomeNews,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial, }
}
</script>
<style scoped lang="less">

</style>