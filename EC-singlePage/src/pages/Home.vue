  <template>
    <div id='home'>
      <h2>{{ title }}</h2>
      <div class = 'home_nav'>
        <router-link to='/home/one' class="to" 
          :class='{active:pathEr == "/home/one"}'
          @click.native='changeEr(type)'
          >首页一</router-link>
        <router-link to='/home/two' class="to" 
          :class='{active:pathEr == "/home/two"}'
          @click.native='changeEr(type)'
          >首页二</router-link>
      </div>
      <router-view></router-view>

    </div>
  </template>

  <script>
    export default {
      name:'Home',

      data () {
        return {
          title:'我是首页',
          pathEr:'/home/one'
        }
      },

      computed: {
        type () {
          if(this.$router.path == '/'){
            return '/home/one'
          }
          return this.$router.path
        }
      },
      methods:{
        changeEr (nativePath) {
          this.pathEr = nativePath
        }
      }
     
    }
  </script>
  <style>
    .home_nav{
      height:0.4rem;
      width:100%;
      line-height:0.4rem;
      font-size:0.2rem;
      margin:0.05rem 0;
      display:flex;
      justify-content:space-around;
    }
    .to{
      display:inline-block;
      height:0.4rem;
      width:1rem;
      line-height:0.4rem;
      text-align:center;
      background:green;
      color:#fff;
      font-weight:bold;
    }
    .to:hover{
      color:hotpink;
    }
    .home_nav .active{
      background: skyblue;
      color: red;
    }
  </style>
