<template>
  <div>
    <HelloWorld :user="user"/>
    <catalogfromauthor :user="user"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import catalogfromauthor from "@/components/catalogfromauthor.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    catalogfromauthor,
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
