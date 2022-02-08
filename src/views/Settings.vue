<template>
  <div class="about">
       <HelloWorld :user="user"/>
    <fzf v-if="status.status==false"/>
    <settingsheader :user="user" />
  </div>
</template>
<script>
import Api from "../api";
import {Auth} from "../auth";
import HelloWorld from "@/components/HelloWorld.vue";
import settingsheader from "@/components/settingsheader.vue";
export default {
  name: "About",
  components: {
    HelloWorld,
    settingsheader,
  },
  data() {
    return {
      user: {},
      author: {},
      status: {},
    }
  },
  async mounted(){
    
    this.user = await Auth();
    console.log(localStorage.getItem("token"))
    const id = this.$route.params.id
    const result = await Api.users.getauthor(id)
    this.author = result
    if(result.message){
      this.status = {
        status: false
      }
      return 0
    }
  this.status = {
    status: true,
    login: id,
  }
  },
};
</script>