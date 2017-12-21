<template>
  <div id="pend">
    <div class="pend-head">
      <div class="pend-head-title">
        <h3>{{ header.title }}</h3>
      </div>
      <div class="pend-head-des">
        <img src="../assets/images/icon/delete.png" alt="">
      </div>
    </div>
    <div class="pend-content">
      <ul class="pend-content-lists">
        <li v-for="(content, index) in contents" :key="index">
          <div class="pend-content-list">
            <img :src="content.img" alt="">
            <p class="pend-content-title">{{ content.title }}</p>
          </div>
        </li>
      </ul>
      <div class="pend-content-total">
        <p>共{{ total.num }}件商品 实付款：￥{{ total.price }}</p>
      </div>
    </div>
    <div class="pend-footer">
      <ul>
        <li v-for="(list, index) in footer" :key="index">
          <x-button class="diy-button" :type="list.style" :text="list.text" action-type="button" link="/"></x-button>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import { XButton } from 'vux'
export default {
  props: ['header', 'contents', 'footer', 'total'],
  components: {
    XButton
  }
}
</script>

<style lang="less" scoped>
#pend {
  padding:0 15px;
}
.pend-head {
  width: 100%;
  padding: 20px 0 10px;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  .pend-head-title{
    width: 60%;
    float: left;
  }
  .pend-head-des{
    width: 6%;
    img{
      max-width: 100%;
    }
    float: right;
    text-align: right;
  }
}
.pend-content{
  .pend-content-lists{
    padding: 10px 20px 0;
    background: #F9F8EB;
    li{
      border-bottom: 2px solid #87DFD6;
      padding: 10px 0;
      &:last-child {
        border-bottom: 0;
      }
      .pend-content-list{
        img{
          max-width: 20%;
          float: left;
        }
        .pend-content-title {
          font-size: 14px;
          padding-left: 5%;
          width: 80%;
          box-sizing: border-box; 
          display: inline-block;
          height: 60px;
          overflow: hidden;
        }
        &:after{
          content: '';
          display: block;
          clear: both;
        }
      }
    }
  }
  .pend-content-total{
    text-align: right;
  }
}
.pend-footer {
  padding: 20px 0;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  ul{
    li{
      width: 25%;
      margin-left: 10px;
      float: right;
      .diy-button{
        font-size: 14px;
        &:last-child{
          margin-top: 0;
        }
      }
    }
  }
}

</style>
