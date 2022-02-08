<template>
  <div class="statcont">
    <!-- <div class="stats">
      <div class="time">
        <div class="stat" id="today" @click="focus('today')">
          <p style="font-size: 20px; font-weight: 600">Сегодня</p>
          <br />
          <div class="substat">
            <br />Подписчиков <br />
            {{ alladata.timeY.n[0] }}
          </div>
          <div class="substat">
          </div>
        </div>
        <div class="stat" id="week" @click="focus('week')">
          <p style="font-size: 20px; font-weight: 600">За неделю</p>
          <br />
          <div class="substat">
            <br />Подписчиков <br />
            {{ alladata.timeY.w[0] }}
          </div>
          <div class="substat">
          </div>
        </div>
        <div class="stat" id="month" @click="focus('month')">
          <p style="font-size: 20px; font-weight: 600">За месяц</p>
          <br />
          <br />
          <div class="substat">
            <br />Подписчиков: <br />
            {{ alladata.timeY.m[0] }}
          </div>
          <div class="substat">
          </div>
        </div>
        <div class="stat" id="year" @click="focus('year')">
          <p style="font-size: 20px; font-weight: 600">За год</p>
          <br />
          <br />
          <div class="substat">
            <br />Подписчиков: <br />
            {{ alladata.timeY.v[0] }}
          </div>
          <div class="substat">
          </div>
        </div>
      </div>
      <div class="griidstat">
        <div class="info">
          <p class="number">{{ alladata.state.paySub }}</p>
          Платных подписчиков
        </div>
        <div class="info">
          <p class="number">{{ alladata.state.folovers }}</p>
          Отслеживающих
        </div>
        <div class="info">
          <p class="number">{{ alladata.state.tovars }}</p>
          Купили товар
        </div>
        <div class="info">
          <p class="number">{{ alladata.state.post }}</p>
          Покупок поста
        </div>
      </div>
    </div> -->
    
    <div class="fort">
      <h4>Платные подписчики</h4> <br>
      <table class="table table--lg team-roster-table table-hover fortab">
        <thead>
          <th class="team-roster-table__name">Id</th>
          <th class="team-roster-table__name">Имя</th>
          <th class="team-roster-table__name">Статус</th>
          <th class="team-roster-table__name">Логин(Поддомен)</th>
          <th class="team-roster-table__name">Стоимость подписки</th>
          <th class="team-roster-table__name">Телефон</th>
          <th class="team-roster-table__name">Емаил</th>
        </thead>

        <tbody>
          <tr v-for="user in alladata.table.slice().reverse()" :key="user.id" style="botder-bottom: 0.5px solid black;">
            <td class="team-roster-table__name">{{ user[1].id }}</td>
            <td class="team-roster-table__name">{{ user[1].Name }}</td>
            <td class="team-roster-table__">{{ user[1].status }}</td>
            <td class="team-roster-table__number">{{ user[1].login }}</td>
            <td class="team-roster-table__number">{{ user[0].cost }}</td>
            <td class="team-roster-table__number">{{user[1].nomer}}</td>
            <td class="team-roster-table__number">{{ user[1].email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "statistick",
  props: {
    user: Object,
  },
  methods: {
    focus(ee) {
      console.log(ee);
      document.getElementById("today").className = "stat";
      document.getElementById("week").className = "stat";
      document.getElementById("month").className = "stat";
      document.getElementById("year").className = "stat";
      let btn = document.getElementById(ee);
      btn.classList.toggle("pur");
    },
  },
  data() {
    return {
      alladata: {},
    };
  },
  async mounted() {
    let result = await Api.users.statick(localStorage.getItem("token"));
    console.log(result);
    this.alladata = result;
  },
};
</script>
<style lang="scss">
.pur {
  background-color: #fe6637;
  color: white;
  transition: all 1s;
}
.statcont {
  height: 100vh;
  background-color: #e9e9e9;
  font-size: 18px;
}
.stats {
  border: 0.25px solid #bebebe;
  border-radius: 10px;
  margin-left: 50%;
  transform: translate(-50%, 10%);
  width: 80%;
  height: 50vh;
  -webkit-box-shadow: 5px 5px 20px 3px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 5px 5px 20px 3px rgba(34, 60, 80, 0.6);
  box-shadow: 5px 5px 20px 3px rgba(34, 60, 80, 0.6);
}
.time {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  grid-column-gap: 30px;
}
.stat {
  width: 100%;
  padding: 3%;
  margin-top: 20px;
  margin-left: 30px;
  border: 0.5px solid #bebebe;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 10px;
}
.stat:hover {
  cursor: pointer;
  border: 0.5px solid #fe6637;
}
.stat:focus {
  background-color: #fe6637;
}
.substat {
  font-size: 16px;
  font-weight: 600;
}
.number {
  font-size: 30px;
  color: rgba(59, 41, 41, 0.74);
}
.griidstat {
  margin-top: 30px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
}
.fort{
  padding: 2%;
}
.fortab{
  padding: 3%;
  border-radius: 3px;
}
</style>
