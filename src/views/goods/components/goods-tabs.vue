<template>
    <div class="goods-tabs">
    <nav>
      <a class="active" href="javascript:;">商品详情</a>
      <a href="javascript:;">商品评价<span>(500+)</span></a>
    </nav>
    <!-- 切换内容的地方 -->  
    <div class="goods-detail">
    <!-- 属性 -->
    <!-- <ul class="attrs">
      <li v-for="item in goods" :key="item.value">
        <span class="dt">{{item.details.name}}</span>
        <span class="dd">{{item.details.value}}</span>
      </li>
    </ul> -->
    <!-- 图片 -->
    <img v-for="item in goods.pictures" :key="item" :src="item" alt="">
  </div>
  </div>     

</template>
<script>
import axios from 'axios'
import { ref,} from 'vue'
export default {
  setup(){
  const goods = ref([])
  axios.get('https://pcapi-xiaotuxian-front.itheima.net/home/goods/').then(res=>{
    console.log();
    goods.value = res.data.details
  })
  return { goods }
}
}
</script>

<style scoped lang="less">
.goods-detail {
  padding: 40px;
  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;
      .dt {
        width: 100px;
        color: #999;
      }
      .dd {
        flex: 1;
        color: #666;
      }
    }
  }
  > img {
    width: 100%;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}

</style>