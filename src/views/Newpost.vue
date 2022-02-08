<template>
  <div class="about">
    <HelloWorld :user="user"/>
    <post :login="user.login" :result="result"/>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import post from "@/components/post.vue";
import {Auth} from "../auth"
import Api from "../api"
import {getCookie, setCookie, deleteCookie} from "../utils.js"
export default {
  name: "NewPost",
  components: {
    HelloWorld,
    post,
  },
  data() {
    return {
      user: {},
      result: {}
    }
  },
  async mounted(){
    
    this.user = await Auth();

    if(!this.user.id){
        window.location.href="/";
    }
    if(this.user.status == "user"){
       window.location.href="/";
    }

    let result = await Api.users.chtoto(this.user.id, localStorage.getItem("token"));
    this.result = result;
  }
};
</script>