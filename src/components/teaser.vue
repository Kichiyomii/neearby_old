<template>
  <div>
  <b-card>
    <b-media>
      <template #aside>
        <h4 class="mt-0">Тизер поста</h4> 
      </template>
      <p class="text">Тизер показывается только для пользователей, не имеющих доступа к вашему посту</p>
            <b-button
            style="float: left; margin-left: 20px; "
        variant="outline-secondary"
      >
        <input
          type="file"
          accept="image/*"
          id="upload"
          hidden
        />
        <label for="upload"> <b-icon icon="image" style="margin-right: 7px;"> </b-icon>Добавить обложку</label>
      </b-button>

      <b-form-textarea
                style="height: 80px; margin-top:70px;"
          id="desc"
          placeholder="Введите описание поста"
        ></b-form-textarea>

    </b-media>
  </b-card>
  </div>
</template>
<script>
export default {
  name: "teaser",
};
</script>
<style scoped lang="scss">
.text{
  color: rgba(0, 0, 0, 0.5);
}
</style>    