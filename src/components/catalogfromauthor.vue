<template>
  <div class="mmaincont">
    <div>
      <div class="forrelev">
        <div class="sort" style="text-align: left">
          <h4>Сортировать по:</h4>
        </div>
        <select @select="sort()" v-model="someinfo" class="selectsubs">
                  <option value="standart">
                      По стандарту
                  </option>
                  <option value="follow">
                      По отслеживающим
                  </option>
                </select>
      </div>
    </div>
    <div class="forgriddddddddddddddddd" v-if="someinfo == 'standart'">
      <b-card v-for="author in authors.slice().reverse()" :key="author.id">
        <b-avatar
          style="margin-right: 10px; width: 120px; height: 120px"
          :src="'https://api.steepmail.com/api/users/' + author.login + '/photo'"
        >
        </b-avatar>
        <p class="name">{{ author.name }} <img v-if="author.id == 1 || author.id ==2" src="../assets/veri.jpg" style="width: 25px;" alt="">  <img v-if="author.id == 3 || author.id ==91" src="../assets/dev.jpg" style="width: 25px; margin-left: 10px;" alt=""></p> 
        <p class="subs">Отслеживающие: {{ author.subc }}</p>
        <b-button :href="'https://' + author.login + '.neearby.com/page'"
          >Перейти на страницу автора</b-button
        >
      </b-card>
    </div>
    <div class="forgriddddddddddddddddd" v-else>
      <b-card v-for="author in sorted" :key="author.id">
        <b-avatar
          style="margin-right: 10px; margin-bottom: 10px; width: 120px; height: 120px"
          :src="'https://api.steepmail.com/api/users/' + author.login + '/photo'"
        >
        </b-avatar>
        <p class="name">{{ author.name }} <img v-if="author.id == 1 || author.id ==2" src="../assets/veri.jpg" style="width: 25px;" alt="">  <img v-if="author.id == 3 || author.id ==91" src="../assets/dev.jpg" style="width: 25px; margin-left: 10px;" alt=""></p> 
        <p class="subs">Отслеживающие: {{ author.subc }}</p>
        <b-button :href="'https://' + author.login + '.neearby.com/page'"
          >Перейти на страницу автора</b-button
        >
      </b-card>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "catalogfromauthor",
  data() {
    return {
      authors: {},
      someinfo: "follow",
      sorted: {},
    };
  },
  async mounted() {
    setTimeout(async () => {
      const result = await Api.users.getgetauthor();
      this.authors = result;
      const arr = [];
      this.authors.forEach((author) => {
        arr.push(author);
      });
      this.sorted = arr;

      this.sorted.sort((a, b) => b.subc - a.subc);
    }, 1000);
  },
};
</script>
<style lang="scss">
.mmaincont {
  padding: 3%;
  background-color: #e9e9e9;
  min-height: 100vh;
}
.forgriddddddddddddddddd {
  text-align: center;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
}
@media only screen and (max-width: 600px) {
  .forgriddddddddddddddddd {
    display: flex;
    flex-direction: column;
  }
}
.name {
  color: black;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.selectsubs {
  width: 300px;
  height: 55px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.forrelev {
  width: 70%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  background-color: white;
  padding: 1% 1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>