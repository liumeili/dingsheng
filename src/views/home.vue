<template>
  <main id="home" class="view" role="main">
    
    <Footer></Footer>
  </main>
</template>

<script>
  import {IMService} from '../service/RiziServices.js'
  import Footer from "../components/Footer.vue";
  import { Button, Toast } from 'mand-mobile'

  export default {
    // name: 'home-view',
    components: {
      Footer
    },
    moundte(){
      
    }
  }
</script>

<style lang="scss">
  // .heading {
  //   text-align: center;
  //   margin-bottom: 48px;
  //   h1 {
  //     color: #333;
  //     line-height: 1.15;
  //     font-size: 64px;
  //     margin-bottom: 32px;
  //     span {
  //       position: relative;
  //     }
  //     span::after {
  //       content: "";
  //       position: absolute;
  //       z-index: -1;
  //       left: 0;
  //       bottom: 8px;
  //       width: 100%;
  //       height: 20px;
  //       background: #ecf6ff;
  //     }
  //   }
  //   p {
  //     font-size: 32px;
  //     color: #666;
  //     line-height: 56px;
  //   }
  // }

</style>
