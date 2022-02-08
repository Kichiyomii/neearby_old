<template>
  <div class="maincont">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table
      id="my-table"
      :fields="fields"
      :items="users"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template #cell(Индекс)="data">
        {{ data.item.id }}
      </template>
      <template #cell(Объект_Жалобы)="data">
        <b-button
          @click="
            showcomplain(
              data.item.id_obj,
              data.item.type,
              data.item.description,
              data.item.id
            )
          "
          >Показать объект</b-button
        >
      </template>
      <template #cell(Кто_Пожаловался)="data">
        <b-button @click="showuser(data.item.id_user)">Показать</b-button>
      </template>
      <template #cell(Описание_Жалобы)="data">
        <b-form-textarea
          :value="data.item.description"
          plaintext
          rows="2"
          max-rows="2"
          no-resize
        >
        </b-form-textarea>
      </template>
      <template #cell(Дата_Создания)="data">
        {{ data.item.createdAt.split('.')[0] }}
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-modal id="forcomplain">
      <template #modal-header="{}">
        <!-- Emulate built in modal header close button action -->
        <h5>Модальное окно для жалоб</h5>
      </template>

      <template #default="{}">
        <div class="complainn" v-if="currentcomp.type == 'user'">
          <h5>Жалоба на пользователя</h5>
          <b-avatar
            style="width: 150px; height: 150px"
            :src="
              'https://api.steepmail.com/api/users/' +
              currentcomp.login +
              '/photo'
            "
          >
          </b-avatar>
          <p>{{ currentcomp.Name }}</p>
          <b-button :href="'https://' + currentcomp.login + '.neearby.com/page'"
            >Перейти на страницу данного автора</b-button
          >
        </div>
        <div class="complainn" v-if="currentcomp.type == 'tovar'">
          <h5>Жалоба на Товар</h5>

          <b-avatar
            rounded
            style="margin-right: 10px; width: 150px; height: 100px"
            :src="
              'https://api.steepmail.com/api/publication/storage/' +
              currentcomp.img
            "
          >
          </b-avatar>
          <p>{{ currentcomp.tittle }}</p>
          <p>{{ currentcomp.description }}</p>
          <b-button
            :href="'https://' + forlogin + '.neearby.com/page'"
            >Перейти на страницу данного автора</b-button
          >
        </div>
        <div class="complainn" v-if="currentcomp.type == 'sub'">
          <h5>Жалоба на Подписку</h5>
          <img
            :src="
              'https://api.steepmail.com/api/subscriptions/photo/' +
              currentcomp.id
            "
            alt=""
            class="photage"
          />
          <p>{{ currentcomp.tittle }}</p>
          <p>{{ currentcomp.description }}</p>
          <b-button
            :href="'https://' + forlogin + '.neearby.com/page'"
            >Перейти на страницу данного автора</b-button
          >
        </div>
        <div class="complainn" v-if="currentcomp.type == 'post'">
          <h5>Жалоба на Пост</h5>
          <img
            v-if="currentcomp.img"
            :src="
              'https://api.steepmail.com/api/publication/storage/' +
              currentcomp.img
            "
            alt=""
          />
          <p>{{ currentcomp.tittle }}</p>
          <p>{{ currentcomp.description }}</p>
          <b-button
            :href="'https://' + forlogin + '.neearby.com/page'"
            >Перейти на страницу данного автора</b-button
          >
        </div>
        <p style="font-weight: 600; margin-top: 5px; margin-bottom: 5px">
          Описание жалобы
        </p>
        <b-form-textarea
          rows="2"
          max-rows="10"
          no-resize
          :value="currentcomp.desc"
          style="width: 100%"
        >
        </b-form-textarea>
      </template>

      <template #modal-footer="{}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button v-if="currentcomp.type == 'user'" size="sm" variant="info" @click="ban(currentcomp.id)">Бан</b-button>
        <b-button v-if="currentcomp.type == 'tovar'" size="sm" variant="info" @click="ban(currentcomp.id_user)">Бан</b-button>
        <b-button v-if="currentcomp.type == 'sub'" size="sm" variant="info" @click="ban(currentcomp.user_id)">Бан</b-button>
        <b-button v-if="currentcomp.type == 'post'" size="sm" variant="info" @click="ban(currentcomp.id_user)">Бан</b-button>
        <b-button size="sm" variant="info" @click="deleteobj(currentcomp.idins)">Отклонить</b-button>
        <b-button v-if="currentcomp.type == 'tovar' || currentcomp.type == 'post' || currentcomp.type == 'sub'" size="sm" variant="info" >Удалить</b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <b-modal id="forcomplainer">
      <template #modal-header="{}">
        <!-- Emulate built in modal header close button action -->
        <h5>Модальное окно для просмотра пожаловавшегося</h5>
      </template>

      <template #default="{}">
        <div class="complainn">
          <b-avatar
            style="width: 100px; height: 100px"
            :src="
              'https://api.steepmail.com/api/users/' +
              currentcompp.login +
              '/photo'
            "
          >
          </b-avatar>
          <p>{{ currentcompp.Name }}</p>
          <b-button
            :href="'https://' + currentcompp.login + '.neearby.com/page'"
            >Перейти на страницу данного автора</b-button
          >
        </div>
      </template>

      <template #modal-footer="{}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="info" @click="cancell()"> OK </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <!-- <b-collapse id="example-collapse">
      <div class="card__content">
        <div id="league-table" class="table-responsive">
          <table class="table table--lg team-roster-table table-hover">
            <thead>
              <th class="team-roster-table__name">ID</th>
              <th class="team-roster-table__name">Name</th>
              <th class="team-roster-table__name">Status</th>
              <th class="team-roster-table__name">Login</th>
              <th class="team-roster-table__name">CreatedAt</th>
              <th class="team-roster-table__name">Email</th>
              <th class="team-roster-table__name">Buttons</th>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td class="team-roster-table__number">{{ user.id }}</td>
                <td class="team-roster-table__name">{{ user.Name }}</td>
                <td class="team-roster-table__">{{ user.status }}</td>
                <td class="team-roster-table__number">{{ user.login }}</td>
                <td class="team-roster-table__number">{{ user.createdAt }}</td>
                <td class="team-roster-table__number">{{ user.email }}</td>
                <td class="team-roster-table__number">
                  <b-button-group>
                    <b-button
                      v-if="user.status != 'banned'"
                      @click="ban(user.id)"
                      >Ban</b-button
                    ></b-button-group
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-collapse> -->
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "adminn",
  methods: {
    async deleteobj(id){  
      const re = await Api.users.deleteobject(id, localStorage.getItem("token"));
      if(re == 'okey') {
        window.location.reload();
      }
      console.log(re);
    },
    async ban(id){
      let resu = await Api.users.banuser(id, localStorage.getItem("token"));
      window.location.reload()
      consol.log(resu)
    },
    cancel() {
      this.$bvModal.hide("forcomplain");
    },
    cancell() {
      this.$bvModal.show("forcomplainer");
    },

    smth() {
      console.log("sdalkhlas");
    },
    async showcomplain(id, type, desc, idins) {
      const result = await Api.users.getcomplainobj(
        localStorage.getItem("token"),
        type,
        id
      );
      this.currentcomp = result;
      this.currentcomp.idins = idins
      console.log(idins)
      if (result.id_user) {
        const resultt = await Api.users.getcomplainobj(
          localStorage.getItem("token"),
          "user",
          this.currentcomp.id_user
        );
        this.forlogin = resultt.login;
        console.log(resultt.login)
      } else {
        const resulttt = await Api.users.getcomplainobj(
          localStorage.getItem("token"),
          "user",
          this.currentcomp.user_id
        );
        this.forlogin = resulttt.login;
        console.log(resulttt.login)
        console.log(this.currentcomp.forlogin)
      }
      this.$bvModal.show("forcomplain");
      this.currentcomp.type = type;
      this.currentcomp.desc = desc;
      console.log(result);
      console.log(id);
    },
    async showuser(id) {
      console.log(id);
      const result = await Api.users.getcomplainobj(
        localStorage.getItem("token"),
        "user",
        id
      );
      this.currentcompp = result;
      this.$bvModal.show("forcomplainer");
      console.log(result);
    },
  },
  data() {
    return {
      userw: false,
      fields: [
        "Индекс",
        "Объект_Жалобы",
        "Кто_Пожаловался",
        "Описание_Жалобы",
        "Дата_Создания",
      ],
      users: [],
      perPage: 10,
      currentPage: 1,
      currentcomp: {},
      forlogin: "",
      currentcompp: {},
    };
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
  async mounted() {
    const result = await Api.users.getcomplains(localStorage.getItem("token"));
    console.log(localStorage.getItem("token"));
    this.users = result;
    console.log(result);
  },
};
</script>
<style lang="scss">
.maincont {
  padding: 3%;
}
.card__content {
  margin-top: 40px;
}
.complainn {
  text-align: center;
}
</style>
