Vue.component('app-user',{
  data:function(){
    return{
      users:[
        {username:'Owen'},
        {username:'Eiffia'},
        {username:'Jack'}
      ]
    };
  },
  template:'<div><p class="user" v-for="user in users">Username:{{user.username}}</p></div>'
});

new Vue({
  el:'#app',
  data:{
    title:'Hello World!',
    users:[
      {username:'Max'},
      {username:'Chris'},
      {username:'Anna'}
    ]
  }
});
