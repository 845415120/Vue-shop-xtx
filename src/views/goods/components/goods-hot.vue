<template>
  <div class="goods-hot">
    <h3>24小时热榜</h3>
    <ul ref="pannel" class="goods-list">
      <li v-for="item in goods" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="">
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.alt}}</p>
        </RouterLink>
      </li>
    </ul>
     
 
  </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'GoodsHot',
  setup(){
    const  goods = ref([])
    axios.get('https://pcapi-xiaotuxian-front.itheima.net/home/goods').then(res=>{
      console.log(res.data);
      goods.value = res.data.result
    })
    return {goods}
  }
}
</script>
<style scoped lang="less">
.goods-hot {
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  ::v-deep .goods-item {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 200px;
      height: 200px;
    }
    p {
      margin: 0 10px;
    }
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}</style>