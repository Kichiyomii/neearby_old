<template>
  <div>
     <HelloWorld :user="user"/>
       <adminemaill class="adminleft" />
       <createggroup/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import adminemaill from "../components/adminemaill.vue";
import createggroup from "../components/createggroup.vue"
import { Auth } from "../auth";

export default {
  name: "Home",
  components: {

    HelloWorld,
    adminemaill,
     createggroup,
  },
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
        this.user = await Auth();
  }
};
</script>
<style scoped lang="scss">
</style>
