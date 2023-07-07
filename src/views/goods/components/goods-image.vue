<template>
  <div class="goods-image">
    <div class="large" ></div>
    <div class="middle">
    
    </div>
    <ul class="small">
      <li >
        <img >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle {
    width: 400px;
    height: 400px;
   background-image:
   url('https://yanxuan-item.nosdn.127.net/1ceb6111d13a1fae83ad18a09dd8df2e.png');

  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,&.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>