          <template> <div class="domaine">
            <div v-bind:class="{ is_animating: post.like.like }" @click="like($event)" :id="post.title + post.id" class="heart"> </div>
          </div>

</template>
<script>
import Api from "../api";
export default {
  name: "like",
  data() {
    return {
      likeee: false,
      xz: 0,
      debounce: false,
    }
  },
  props: {
    id: Number,
    post: Object,
  },
  methods: {
    async like(event){
      if(!this.debounce){
        this.debounce = true;
        const ztx = this
        setTimeout(() => {
          ztx.debounce = false;
        }, 1500)
    if(this.post.like.like==false){
          let result = await Api.users.like(this.id, localStorage.getItem("token"))
           console.log(result)
          this.likeee = !this.likeee
          event.target.classList.toggle("is_animating")
          this.post.like.all += 1
          this.post.like.like = true
    }
    else{
       let result = await Api.users.uunlike(this.id, localStorage.getItem("token"))
       console.log(result)
       console.log('1')
         event.target.classList.toggle("is_animating")
       this.post.like.all -= 1
       this.post.like.like = false
    }
      }
      else { 

      }

    }
  },
  // mounted() {
  //   setTimeout( () => {
  //         if(this.post.like.like){
  //      document.getElementById(this.post.title + this.post.id).classList.toggle("is_animating")
  //   }
  //   }, 1000)
  //   console.log(this.post.like.like)

  //   console.log(this.post)
  // }
};
</script>
<style scoped lang="scss">
.heart {
  cursor: pointer;
  height: 80px;
  width: 80px;
  background-image:url( 'https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png');
  background-position: left;
  background-repeat:no-repeat;
  background-size:2900%;
}

.heart:hover {
  background-position:right;
}

.is_animating {
  animation: heart-burst .8s steps(28) 1;
  background-position:right;
}
.is_notanimating {
  background-position:right;
}

@keyframes heart-burst {
  from {background-position:left;}
  to { background-position:right;}
}
</style>
