<template>
  <div>
    <HelloWorld :user="user"/>
    <mysubss :user="user" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import mysubss from "@/components/mysubss.vue";
import {Auth} from "../auth"

export default {
  name: "Home",
  components: {
    HelloWorld,
    mysubss,
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
