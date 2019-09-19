<template>
    <div class="fotter">
        <ul class="fotter-Ul">
            <li v-for="(item,index) in title" :key="index"  :style="item.selected?'color:#26a2ff':''" @click="navChoice(item.id,item.name)"><i :class="item.icons"></i>
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
                    icons:'iconfont iconconversation_icon',
                    name:'chat'
                },
                {
                    id:2,
                    title:'所有游戏',
                    selected:false,
                    icons:'iconfont iconlianxiren',
                    name:'contact'
                },
                {
                    id:3,
                    title:'充值',
                    selected:false,
                    icons:'iconfont iconrenwu',
                    name:'task'
                },
                {
                    id:4,
                    title:'活动',
                    selected:false,
                    icons:'iconfont iconshezhi',
                    name:'set'
                },
                {
                    id:4,
                    title:'我的',
                    selected:false,
                    icons:'iconfont iconshezhi',
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
        font-size:.26rem;
        text-align: center;
        background: #fff;
        border-top:1px solid #eaeaea;
        position: fixed;
        bottom: 0;
        color: rgb(165, 165, 165);;
        height: 1.1rem;
    }
    .fotter-Ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .fotter-Ul li{
        text-align: center;
    }
    .fotter-Ul i{
       font-size: 0.38rem;  
       margin-top:0.2rem;
       display: block;
    }
    .fotter-Ul p{
      margin:0.05rem  0 0.15rem 0;
    }

</style>
