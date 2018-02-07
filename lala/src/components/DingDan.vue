<template>
 <div id="lala">
     <div class="top">
         <h2>{{ name }}</h2>
     </div>
     <div class="bottom">
         <div class="b_left">
             <img :src='url'/>
         </div>
         <div class="b_right">
             <div class="colors">
                 <div class="color_left">颜色</div>
                 <div class="color_right">
                    <ul>
                        <li v-for='item in colors' 
                        :key='item.id'
                        :class="{color:item == nowColor}"
                        @click="changeCheckColor(item)"
                        >{{ item }}</li>
                    </ul>
                 </div>
             </div>
             <div class="check">
                 <div class="size">尺码</div>
                 <div class="size_check">
                     <table>
                         <tr v-for="(value,key) in nowCheck" :key="key">
                             <td id="size">{{ key }}</td>
                             <td>{{ price }}元</td>
                             <td>{{ wait }}天</td>
                             <td>
                                 <button class="red" @click="reduce(value,key)">-</button>
                                 <input type='text' class='count' :value="value" @keyup='change(e,key)'>
                                 <button class="add" @click="add(value,key)">+</button>
                            </td>
                         </tr>
                     </table>
                 </div>
             </div>
             <div class="check_result" v-show="flag">
                 <h2>你的选择结果:</h2>
                 <ul>
                     <li v-for="item in checkList" :key="item.id">
                         <div>{{ item.color }}</div>
                         <div>{{ item.count }}件</div>
                         <div>
                             <span v-for="(value,key) in item.size" :key="key" v-if="value>0">{{key}}({{value}})</span>
                         </div>
                     </li>
                 </ul>
                 <div class='all'>
                     <span>你共订购：<i>{{allCount}}</i>件</span>
                     <span>需要支付：<i>{{allMoney}}</i>元</span>
                </div>
                <button class="addCar" @click="addStore">添加到购物车</button>
             </div>
         </div>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
     return {
         colors:['黑色','白色','红色'],
         name:'流行服饰',
         url:'http://www.wndhw.com/shishang/reci/images/chunjifuzhuang1.jpg',
         nowColor:'黑色',
         wait:7,
         whiteCheck:{S:0,M:0,L:0,XL:0},
         blackCheck:{S:0,M:0,L:0,XL:0},
         redCheck:{S:0,M:0,L:0,XL:0}
     }

   },
   computed:{
        // 此件商品订单的总数量
        allCount () {
           return this.blackCount + this.whiteCount + this.redCount;
       },
        //  订单的总价钱
       allMoney () {
           return this.price*this.allCount;
       },
        // 订单的单价(总数量小于30件:145/件,30-100件:140/件,大于100件:135/件)
        price () {
            if(this.allCount<30){
                return 145;
            }else if(this.allCount>=30 && this.allCount<100){
                return 140;
            }else{
                return 135
            }
        },
        //黑色订单的总数量 
        blackCount () {
            let blackCount = 0;
            for(let i in this.blackCheck){
                blackCount += this.blackCheck[i]
            }
            return blackCount;
        },
        // 白色订单的总数量
         whiteCount () {
            let whiteCount = 0;
            for(let i in this.whiteCheck){
                whiteCount += this.whiteCheck[i]
            }
            return whiteCount;
        },
        // 红色订单的总数量
         redCount () {
            let redCount = 0;
            for(let i in this.redCheck){
                redCount += this.redCheck[i]
            }
            return redCount;
        },
        //nowCheck的值是根据当前选择的颜色值变化的
        nowCheck () {
            if(this.nowColor=='黑色'){
                return this.blackCheck;
            }else if(this.nowColor=='白色'){
                return this.whiteCheck;
            }else{
                return this.redCheck;
            }
        },

        flag () {
            if(this.allCount >0 ) {
                return true;
            }else{
                return false;
            }
        },
        // 一个总的选择列表，渲染页面用,并把最后的选择结果提交给仓库
        checkList () {
            let checkList = [];
            if(this.blackCount>0){
                // 在新创一个对象用来存储所有黑色订单的信息
                let blackList ={};
                // 衣服的名字添加进去
                blackList.name = this.name;
                // 衣服的图片添加进去
                blackList.pic = this.url;
                // 颜色加进去
                blackList.color = '黑色';
                // 数量加进去
                blackList.count = this.blackCount;
                blackList.size = this.blackCheck;
                // 把选择的黑色订单的所有信息添加到checkList数组中
                checkList.push(blackList);
            }
            if(this.whiteCount>0){
                // 在新创一个对象用来存储所有白色订单的信息
                let whiteList ={};
                // 衣服名字
                whiteList.name = this.name;
                // 衣服图片
                whiteList.pic = this.url;
                // 颜色加进去
                whiteList.color = '白色';
                // 数量加进去
                whiteList.count = this.whiteCount;
                whiteList.size = this.whiteCheck;
                // 把选择的白色订单的所有信息添加到checkList数组中
                checkList.push(whiteList);
            }

            if(this.redCount>0){
                // 在新创一个对象用来存储所有黑色订单的信息
                let redList ={};
                // 衣服名字
                redList.name = this.name;
                // 衣服图片
                redList.pic = this.url;
                // 颜色加进去
                redList.color = '红色';
                // 数量加进去
                redList.count = this.redCount;
                redList.size =this.redCheck;
                // 把选择的红色订单的所有信息添加到checkList数组中
                checkList.push(redList);
            }
            return checkList;
        }
   },
   methods:{
       changeCheckColor (color) {
           this.nowColor = color;
       },
       add (value,key) {
            // 判断当前选中的是什么颜色
            if(this.nowColor == '黑色'){
                // 黑色里面对应的型号加一
                this.blackCheck[key]++;
            }else if(this.nowColor == '白色'){
                // 白色里面对应的型号加一
                this.whiteCheck[key]++;
            }else{
                // 红色里面对应的型号加一
                this.redCheck[key]++;
            }           
       },
       reduce (value, key) {
            if(value>0){
                // 判断当前选中的是什么颜色
                if(this.nowColor == '黑色'){
                    // 黑色里面对应的型号减一
                    this.blackCheck[key]--;
                }else if(this.nowColor == '白色'){
                     // 白色里面对应的型号减一
                    this.whiteCheck[key]--;
                }else{
                     // 红色里面对应的型号减一
                    this.redCheck[key]--;
                }
           }         
       },
        change (e,key) {
            e = e || window.event;
            // 判断当前选中的是什么颜色
            if(this.nowColor == '黑色'){
                // 黑色里面对应的型号加一
                this.blackCheck[key] = Number(e.target.value);
            }else if(this.nowColor == '白色'){
                // 白色里面对应的型号加一
                this.whiteCheck[key] = Number(e.target.value);
            }else{
                // 红色里面对应的型号加一
                this.redCheck[key] = Number(e.target.value);
            }           
       },
       addStore () {
           this.$store.commit('ADD',this.checkList);
           alert("添加成功！")
       }
   }
 }
</script>

<style>
    .top{
        padding: 10px;
    }
    .b_left{
        padding: 10px;
        float: left;
    }
    .b_left img{
        height: 300px;
        width: 200px;
    }
    .b_right{
        height: 600px;
        width: 600px;
        border:1px solid red;
        margin-left:20px;
        float: left;
        padding: 10px;
    }
    .color_left,.size{
        float: left;
        margin-bottom:10px;
        padding: 5px 10px;
        color:grey;
    }
    .check{
        margin-top: 20px;
    }
    .color_right,.size_check{
        display: inline-block;
        margin-left: 30px;
    }
    .color_right li{
        display: inline-block;
        margin-left: 20px;
        padding: 5px 10px;
        border:1px solid #999;
    }
    table{
        border-collapse: collapse;
    }
    table tr{
        border-bottom:1px dotted gray;
        height: 40px;
        line-height: 40px;
    }
    table td{
        padding-left: 50px;
    }
    table .count{
        height: 25px;
        width: 50px;
        text-align: center;
        line-height: 25px;
    }
    table button{
        width: 25px;
        height: 25px;
        background: #fff;
        line-height: 25px;
        text-align: center;
        border:1px solid #999;
        font-size: 20px;
    }
    .red{
        position: relative;
        top: 3px;
        left:6px;
    }
    .add{
        position: relative;
        top: 3px;
        left:-5px;
    }
    .check_result li{
        height:40px;
        line-height:40px;
        border-bottom:1px dotted gray;        
    }
    .check_result h2{
        color:blue;
        border-bottom:1px solid black;
        padding:5px 10px;
        margin-top:10px;
    }
    .check_result li div{
        float:left;
        margin-right:30px;
        margin-left:20px;
    }
    .check_result li div span{
        margin-right:10px;
    }
    .check_result .all{
        height:40px;
        line-height:40px;
        margin-top:20px;
        font-size:20px;
    }
    .check_result .all span{
        margin-right:30px;
    }
    .check_result .all span i{
        font-style:normal;
        font-size:23px;
        font-weight:bold;
        padding:0 10px;
        color:green;
    }
    .addCar{
        width:150px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size:22px;
        background:orangered;
        color: white;
        margin-top: 30px;
        margin-left: 200px;
    }
    .color_right .color{
        border:2px solid red;
    }
    
</style>
