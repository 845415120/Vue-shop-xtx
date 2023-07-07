<template>
<!-- <button @click="geet">axios</button> -->
  <div class='home-category'>
   <ul class="menu">
  <li v-for="item in datalist" :key="item.id">
    <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
    <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`">
            {{sub.name[0,1]}}
          </RouterLink>
        </template>
    <!-- <img :src="item.picture" alt=""> -->
    <!-- {{ item.name }} -->
    <!-- {{ item.children[0].name[1] }} -->
  </li>
</ul>
  </div>
    <!-- 弹层 -->
    <div class="layer">
      <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul >
        <li v-for="item in datalist" :key="item.id">
          {{ item.name }}
          <img :src="item.picture" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
  return{
    datalist:[],
  }

 },
 mounted() {
  axios.get("https://pcapi-xiaotuxian-front.itheima.net/home/category").then(res=>{
      console.log(res.data.result);
      this.datalist =res.data.result
    })
  },
// methods:{
//   geet(){
//     axios.get("http://localhost:3000/01.json").then(res=>{
//       console.log(res.data.result);
//       this.datalist =res.data.result
//     })
//   } 
//  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0,0,0,0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 30px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
.layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
		    width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {  
      display: block;
    }
  }
</style>