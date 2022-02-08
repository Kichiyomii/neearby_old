<template>
  <div>
    <input
      type="file"
      accept="image/*"
      id="uploaddd"
      @change="uploadProf($event)"
      hidden
    />
    <label for="uploaddd" style="font-size: 18px; cursor: pointer">
      <b-icon icon="pencil" style="font-size: 22px; cursor: pointer; color: #fe6637;"></b-icon
    ></label>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "pencil",
  props: {},
  methods: {
    async uploadProf(event) {
      const data = new FormData();
      data.append("photo", event.target.files[0]);
      console.log(data);
      const result = await Api.users.updateProfile(
        data,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result === true) {
        console.log("2");
        window.location.reload();
        document.getElementById("avatarochka").src =
          "https://api.steepmail.com/api/users/" +
          this.$router.currentRoute.params["id"] +
          "/photo?a=" +
          Math.floor(Math.random() * 345678);
        // this.$forceUpdate();
      }
    },
  },
};
</script>
<style lang="scss">
</style>