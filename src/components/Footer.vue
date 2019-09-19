<template>
    <div class="fotter">
        <ul class="fotter-Ul">
            <li v-for="(item,index) in title" :key="index"  :style="item.selected?'color:#FF372E':''" @click="navChoice(item.id,item.name)">
                <img :src="item.selected ? item.icon_y : item.icon_n" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:"chat",
            title:[
                {
                    id:1,
                    title:'大厅',
                    selected:true,
                    icon_y:require('../assets/images/index_Y.png'),
                    icon_n:require('../assets/images/index_N.png'),
                    name:'chat'
                },
                {
                    id:2,
                    title:'所有游戏',
                    selected:false,
                    icon_y:require('../assets/images/game_Y.png'),
                    icon_n:require('../assets/images/game_N.png'),
                    name:'contact'
                },
                {
                    id:3,
                    // title:'充值',
                    selected:false,
                    icon_y:require('../assets/images/topUp.gif'),
                    icon_n:require('../assets/images/topUp.gif'),
                    name:'task'
                },
                {
                    id:4,
                    title:'活动',
                    selected:false,
                    icon_y:require('../assets/images/activity_Y.png'),
                    icon_n:require('../assets/images/activity_N.png'),
                    name:'set'
                },
                {
                    id:5,
                    title:'我的',
                    selected:false,
                    icon_y:require('../assets/images/my_Y.png'),
                    icon_n:require('../assets/images/my_N.png'),
                    name:'set'
                }
            ]
        }
    },
    mounted(){
      let url= document.location.toString().split('#')[1];
      console.log("取地址栏地址");
      console.log(url);
      let id='';
      if(url=='/'){
         id=1;
      }else if(url=='/Contact'){
         id=2;
      }else if(url=='/Task'){
         id=3;
      }else if(url=='/Set'){
         id=4;
      }
      console.log(id);
       let title=this.title;
       title.forEach(function(item,index){
           if(item.id==id){
                item.selected=true;
            }else{
                item.selected=false;
            }  
       })
    },
    methods:{
        navChoice:function(id,name){
            let that=this;
            let title=this.title;
            title.forEach(function(item,index){
                if(item.id==id){
                   item.selected=true;
                }else{
                   item.selected=false;
                }  
            });
            that.$router.push({name:name})
           
        },
    },
    
}

</script>

<style scoped>
    .fotter{
        width:100%;
        margin: auto;
        font-size:18px;
        text-align: center;
        background: #fff;
        border-top:1px solid #eaeaea;
        position: fixed;
        bottom: 0;
        color: rgb(165, 165, 165);;
        height: 98px;
        left: 0;
    }
    .fotter-Ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .fotter-Ul li{
        text-align: center;
    }
    .fotter-Ul img{
       width: 44px;
       height: 44px;
       display: block;
       margin: auto;
       margin-top:10px;
    }
    .fotter-Ul li:nth-child(3) img{
        width: 74px;
        height: 74px;
    }
    .fotter-Ul p{
      margin:0.05rem  0 0.15rem 0;
    }

</style>
