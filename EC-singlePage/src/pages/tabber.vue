  <template>
    <div class = 'tabber'>
      <router-link to = '/home'
        :class = '{active : path == "/home"}'
        @click.native = 'change(type)'
         >首页</router-link>
      <router-link to = '/youxuan'
        :class = '{active : path == "/youxuan" }'
        @click.native = 'change(type)'
        >优选</router-link>
      <router-link to = '/recom'
        :class = '{active : path == "/recom"}'
        @click.native = 'change(type)'
        >推荐</router-link>
      <router-link to = '/check'
        :class = '{active : path == "/check"}'
        @click.native = 'change(type)'
        >选中</router-link>
    </div>
  </template>

  <script>
    export default{
      name:'tabber',
      data () {
        return {
        // 如果当前路由是'/'说明刚进入这个网站，默认path值为'/home'
          path:this.$route.path == '/' ? '/home' : window.localStorage.getItem('p')
        }
      },

      destroyed () {
        // vue对象每次销毁时都清楚本地缓存'p'
        window.localStorage.removeItem('p')
      },
      computed:{
        // 这里的type不能直接用在元素上来判断当前路径是否与元素路径一致，
        // 如果直接用，二级路由跳转时一级路由的样式会不正常
        // 解决方法在data里声明一个变量用来监测一级路由的变化,并在一级路由上添加
        // 点击时改变这个变量
        type () {
          if(this.$route.path == "/"){
            return "/home"
          }
          return this.$route.path
        }
      },

      methods:{
        change (nowPath) {
            // 这里用本地缓存是为了保证页面刷新时，上一次的path值还在
            window.localStorage.removeItem('p');
            // this.$store.commit('CHANGE_PATH',nowPath);
            if(this.$route.path == '/' || this.$route.path=='/home/one'||this.$route.path == '/home/two'){
              this.path = '/home'
              window.localStorage.setItem('p','/home');
            }else{
              this.path = nowPath
              window.localStorage.setItem('p',nowPath);

            }
        }
      }
    }
  </script>
  <style>
     .tabber{
        height:0.6rem;
        width:100%;
        line-height:0.6rem;
        background:grey;
        font-size:0.3rem;
        position:fixed;
        right:0;
        bottom:0;
        display:flex;
        justify-content:space-around;
      }
      a{
        color:#000;
        text-decoration:none;
        font-weight:bold;
        display:block;
        width: 1.63rem;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      .active{
        background: orange;
        color:blue;
      }
  </style>
