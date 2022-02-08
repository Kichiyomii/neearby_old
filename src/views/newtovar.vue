<template>
  <div>
    <HelloWorld :user="user"/>
    <newtov  :user="user"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import newtov from "@/components/newtov.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    newtov,
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
