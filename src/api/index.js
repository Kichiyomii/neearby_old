  import axios from "axios";

axios.defaults.baseURL = "https://api.steepmail.com/";
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// axios.defaults.headers.common['Authorization'] = Bearer ${TokenApi};

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  (error) => {
    return error.response.data;
  }
);

export default {
  users: {
    async registration(user) {
      return await axios.post("api/users/registration", user);
    },
    async authorization(user) {
      return await axios.post("api/users/authorization", user);
    },
    async JWT(token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("api/users", {}, config);
    },
    async updateproff(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put("api/users", data, config);
    },

    async becomeauthored(login, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("api/users/becomeauthor", login, config);
    },
    async getauthor(id) {
      return await axios.get(`api/users/${id}`);
    },
    async updateoblojka(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("api/users/update/oblojka", data, config);
    },
    async updateProfile(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("api/users/update/photo", data, config);
    },
    async addsubsription(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("api/subscriptions", data, config);
    },
    async chtoto(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`api/subscriptions/${id}`, {}, config);
    },
    async addlike(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/users/subscribe/${id}`, {}, config);
    },
    async ascsub(idauthor, iduser) {
      return await axios.get(`api/users/subscribe/${idauthor}/${iduser}`);
    },
    async unlike(idauthor, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/users/unsubscribe/${idauthor}`, {}, config);
    },
    async publication(file, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/publication/storage/upload`, file, config);
    },
    async infozygane(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/publication`, data, config);
    },
    async vrotebal(id, data) {
      return await axios.post(`api/publication/${id}`, data);
    },
    async changepost(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/publication`, data, config);
    },
    async getcurpost(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`api/publication/${id}`, config);
    },
    async updatepost(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/publication`, data, config);
    },
    async updatepost(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/publication`, data, config);
    },
    async deletepost(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.delete(`api/publication/${id}`, config);
    },
    async aboutauthorget(data, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/users/desc`, data, config);
    },
    async getgetauthor() {
      return await axios.get("api/users/cataloge/get/author");
    },
    async getallmysubs(token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post("/api/users/subsc", {}, config);
    },
    async deletesubsc(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.delete(`api/subscriptions/${id}`, config);
    },
    async like(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/publication/like/${id}`, {}, config);
    },
    async uunlike(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/publication/unlike/${id}`, {}, config);
    },
    async newtovar(goods, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/goods`, goods, config);
    },
    async deletetovar(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.delete(`api/goods/${id}`, config);
    },
    async gettovar() {
      return await axios.get(`api/goods`);
    },
    async getauthortovar(id) {
      return await axios.get(`api/goods/${id}`);
    },
    async postmessage(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/users/chats/${id}`, {}, config);
    },
    async buypost(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/buying/post/${id}`, {}, config);
    },
    async buysubcur(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/buying/subs/${id}`, {}, config);
    },
    async buycurtovar(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/buying/tovar/${id}`, {}, config);
    },
    async buycurtovar(id, token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/buying/tovar/${id}`, {}, config);
    },
    async rightcomment(id, token, data) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/publication/comment/${id}`, data, config);
    },
    async gettoppod(day) {
      return await axios.get(`api/subscriptions/top/${day}`);
    },
    async gettoptovar(day) {
      return await axios.get(`api/goods/top/${day}`);
    },
    async getcurtov(id) {
      return await axios.get(`api/goods/byId/${id}`);
    },
    async getsubbyid(id) {
      return await axios.get(`api/subscriptions/get/id/${id}`);
    },
    async getallacc() {
      return await axios.get(`api/goods/getall/acia`);
    },
    async getallusers(token) {
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      };
      return await axios.get(`admin/users`, config);
    },
    async getcatalog() {
      return await axios.get(`api/cataloge`);
    },
    async buybuy(data, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      return await axios.post('api/goods/partner/buying',data, config);
    },
    async buyvip(data, token){
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      };
      return await axios.post('api/buying/vip', data, config);
    },
    async getacci(data, id, token){
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      };
      return await axios.post(`api/goods/create/acia/${id}`, data, config);
    },
    async banuser(id, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`admin/ban/${id}`,{}, config);
    },
    async sendmesssage(data, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`admin/send/chats`,data, config);
    },
    async deletecomm(id, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.delete(`api/publication/comment/${id}`, config);
    },
    async changecom(token, id,  data){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/publication/comment/${id}`,data, config);
    },
    async sendob(data, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/cataloge`,data, config);
    },
    async statick(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`api/users/4/statics`, config);
    },
    async changetov(token, id, data) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.put(`api/goods/byId/${id}`, data, config);
    },
    async oplataunreg(data) {
      return await axios.post(`api/buying/registr`, data);
    },
    async forg(data) {
      return await axios.post(`/api/users/4/password`, data);
    },
    async unsub(token, id){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`api/users/4/deletePayReucrent/${id}`, {}, config);
    },
    async getFree(id){
      return await axios.get(`api/users/${id}/getFreeSub`);
    },
    async sendinsult(data, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`admin/send/insult`, data, config);
    },
    async getcomplains(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`admin/insult`, config);
    },
    async getcomplainobj(token, type, id){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`admin/get/${type}/${id}`, config);
    },
    async deleteobject(id, token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`admin/insult/delete/${id}`, config);
    },
    async getbans(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`admin/users/ban`, config);
    },
    async unban(token, id){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`admin/unban/${id}`,{}, config);
    },
    async creategroup(token, data){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`/api/mailer/group`,data, config);
    },
    async getgroup(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`api/mailer/group`, config);
    },
    async getauto(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.get(`api/mailer/sender`, config);
    },
    async sendsendler(token, data){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.post(`/api/mailer/sender`,data, config);
    },
    async dest(id){
      return await axios.delete(`mailer/destroy/${id}`);
    },
    async conf(id){
      return await axios.get(`mailer/confirm/${id}`);
    }
  },
};
