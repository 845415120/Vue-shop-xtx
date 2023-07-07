<template>
  <div class="home-product">
      <HomePanel :title="cate.name" v-for="cate in goods" :key="cate.id">
      <template v-slot:right>
        <div class="sub">
           <RouterLink v-for="sub in cate.children" :key="sub.id" to="/">{{sub.name}}</RouterLink>
        </div>
        <XtxMore />
      </template>
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="cate.picture" alt="">
                    <strong class="label">
             <span>{{cate.name}}馆</span>
            <span>{{cate.saleInfo}}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="item in cate.goods" :key="item.id">
            <RouterLink to="/" class="image">
            <img :src="item.picture" alt="" />    
             </RouterLink>    
            <p class="name ellipsis-2">{{item.name}}</p>
            <p class="desc">{{item.tag}}</p>
             <p class="price">&yen;{{item.price}}</p>
             <div class="extra">
              <RouterLink to="/">
               <span>找相似</span>
              <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  
          </li>
         
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import HomePanel from '../home-panel'
import HomeGoods from './home-goods'
export default {
  name: 'HomeProduct',
  components: { HomePanel, HomeGoods },
  setup(){
    let goods = ref([])
    axios.get('https://pcapi-xiaotuxian-front.itheima.net/home/goods').then(res=>{
      console.log(res.data);
      goods.value = res.data.result
    })
    return {goods}
  }
  
}
</script>

<style scoped lang='less'>
.home-product {
  background: #fff;
  height: 2900px;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0,-50%,0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0,0,0,.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0,0,0,.7);
          }
        }
      }
    }
    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n+4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
      
    }

  }
}
</style>