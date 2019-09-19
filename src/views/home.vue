<template>
  <main id="home" class="view" role="main">
    <div class="heading">
      <h1><span>Mand Mobile</span></h1>
      <p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
    </div>

    <md-button @click="handleClick">点我</md-button>
    <Footer></Footer>
  </main>
</template>

<script>
  import {IMService} from '../service/RiziServices.js'
  import Footer from "../components/Footer.vue";
  import { Button, Toast } from 'mand-mobile'

  export default {
    name: 'home-view',
    components: {
      [Button.name]: Button,
      Footer
    },
    moundte(){
      IMService.login()
         .then(function(res){
             console.log("success");
         })
         .catch(function(err){
            console.log("err");
         })
    },
    methods: {
      handleClick() {
        Toast.info('不错哟~')
      }
    }
  }
</script>

<style lang="scss">
  .heading {
    text-align: center;
    margin-bottom: 48px;
    h1 {
      color: #333;
      line-height: 1.15;
      font-size: 64px;
      margin-bottom: 32px;
      span {
        position: relative;
      }
      span::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 8px;
        width: 100%;
        height: 20px;
        background: #ecf6ff;
      }
    }
    p {
      font-size: 32px;
      color: #666;
      line-height: 56px;
    }
  }

</style>
