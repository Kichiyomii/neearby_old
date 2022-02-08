<template>
  <div>
    <HelloWorld :user="user"/>
    <chats :user="user" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import chats from "@/components/chats.vue";
import {Auth} from "../auth"

export default {
  name: "Home",
  components: {
    HelloWorld,
    chats,
  },
  data() {
    return {
      user: {}
    }
  },
  async mounted(){
    
    this.user = await Auth();
  }
};
</script>
