<template>
  <div>
    <HelloWorld :user="user"/>
    <statisticks :user="user"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import statisticks from "@/components/statisticks.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    statisticks,
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
