<template>
  <div>
    <HelloWorld :user="user"/>
    <vip :user="user" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import vip from "@/components/vip.vue";

import {Auth} from "../auth"

export default {
  name: "Home",
  components: {
    HelloWorld,
    vip,
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
