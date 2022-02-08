import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Главная страница",
    component: Home,
  },
  {
    path: "/authorcatalogue",
    name: "Каталог Авторов",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/catalogavtor.vue");
    },
  },
  {
    path: "/productcatalogue",
    name: "Каталог товаров",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/catalogtovars.vue");
    },
  },
  {
    path: "/topsubscriptions",
    name: "Топ подписок",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/toppodpisok.vue");
    },
  },
  {
    path: "/topproducts",
    name: "Топ Курсов",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/toptovarov.vue");
    },
  },
  {
    path: "/chats",
    name: "Чат",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/chat.vue");
    },
  },
  {
    path: "/settings",
    name: "Настройки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Settings.vue");
    },
  },
  {
    path: "/mysubs",
    name: "Мои Подписки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/mysubs.vue");
    },
  },
  {
    path: "/admin",
    name: "Административная панель",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/admin.vue");
    },
  },
  {
    path: "/admin/insults",
    name: "Жалобы",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/adminsec.vue");
    },
  },
  {
    path: "/email",
    name: "Емаил Рассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/adminemail.vue");
    },
  },
  {
    path: "/email/creategroup",
    name: "Cоздать группу",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/creategroup.vue");
    },
  },
  {
    path: "/email/creatautoras",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/autoras.vue");
    },
  },
  {
    path: "/email/createmail",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/createmail.vue");
    },
  },
  {
    path: "/email/autoras",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/getautoras.vue");
    },
  },
  {
    path: "/mailer/confirm/:idd",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/redirr.vue");
    },
  },

  {
    path: "/mailer/destroy/:idd",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/redir.vue");
    },
  },
  {
    path: "/email/groupsubs",
    name: "Авторассылки",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/groupof.vue");
    },
  },
  
  {
    path: "/admin/bans",
    name: "Баны",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/adminban.vue");
    },
  },
  {
    path: "/vip",
    name: "VIP",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/vipv.vue");
    },
  },
  {
    path: "/action",
    name: "Акции",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/acc.vue");
    },
  },

  {
    path: "/refs/:id/:idtovar",
    name: "Партнерская программа",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/partner.vue");
    },
  },
  {
    path: "/forproduct/:idtovar",
    name: "Товар",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/fortovlink.vue");
    },
  },
  {
    path: "/forsub/:idtovar",
    name: "Товар",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/forsublink.vue");
    },
  },
  {
    path: "/forsub/:idtovar",
    name: "Товар",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/forsub.vue");
    },
  },
  {
    path: "/page",
    name: "Аккаунт",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/Money",
    name: "Вывод средств",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/mon.vue");
    },
  },


  {
    path: "/newpost",
    name: "Новый пост",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Newpost.vue");
    },
  },
  {
    path: "/changepost/:postid",
    name: "Изменить пост",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/changepost.vue");
    },
  },
  {
    path: "/changetovar/:idtov",
    name: "Изменить товар",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Changetovar.vue");
    },
  },
  {
    path: "/newproduct",
    name: "Новый товар",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/newtovar.vue");
    },
  },
  {
    path: "/tovars",
    name: "Товары",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/tovar.vue");
    },
  },
  {
    path: "/statisticks",
    name: "Статистика",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/statistick.vue");
    },
  },
  {
    path: "/info",
    name: "Информация",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/info.vue");
    },
  },
  {
    path: "/info/subs",
    name: "Информация",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/infosubs.vue");
    },
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
