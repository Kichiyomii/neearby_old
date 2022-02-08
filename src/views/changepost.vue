<template>
  <div class="about">
    <HelloWorld :user="user"/>
    <changepostt :login="user.login" :result="result"/>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import changepostt from "@/components/changepostt.vue";
import {Auth} from "../auth"
import Api from "../api"
export default {
  name: "NewPost",
  components: {
    HelloWorld,
    changepostt,
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