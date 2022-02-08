<template>
  <div>
    <HelloWorld :user="user" :meow="'meow'"/>
    <landing :user="user" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import landing from "@/components/landing.vue";
import {Auth} from "../auth"

export default {
  name: "Home",
  components: {
    HelloWorld,
    landing,
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
