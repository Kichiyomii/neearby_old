<template>
  <div>
  <b-card>
    <b-media>
      <template #aside>
        <h4 class="mt-0">Пост</h4>
      </template>

      

       <h3>
         Здесь писать пост
       </h3>
    
      <p>
        <b-button-group>
            <b-button variant="info">
              <input type="file" accept="image/*" id="upload" hidden />
              <label for="upload">
                <b-icon icon="image" style="margin-right: 5px"> </b-icon
                >Изображение</label
              >
            </b-button>

            <b-button id="popover-target-1" size="lg"  variant="info"
              ><b-icon icon="camera-video" style="margin-right: 5px"> </b-icon
              >Видео</b-button
            >
            <b-popover
              target="popover-target-1"
              triggers="click"
              placement="bottom"
            >
              <template #title>Загрузить изображение</template>
              <b-button
                @click="$bvModal.show('modal')"
                size="lg"
                style="margin-bottom: 10px; width: 180px"
              >
                <b-modal id="modal" title="Modal" >
                  <p class="my-2">Meow</p>
                </b-modal>
                <b-icon icon="link45deg" style="margin-right: 5px"> </b-icon>
                URL видео</b-button
              >
              <b> </b>
              <b-button size="lg"   variant="info">
                <input type="file" accept="video/*" hidden id="upload3" />
                <label for="upload3">
                  Загрузить файл</label
                ></b-button
              >
            </b-popover>
            <b-button size="lg"  variant="info">
              <input
                type="file"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                hidden
                id="upload2"
              />
              <label for="upload2">
                <b-icon icon="file-earmark-font" style="margin-right: 5px">
                </b-icon
                >Файл</label
              ></b-button
            >
            <b-button  variant="info">
              <input type="file" accept="audio/*" hidden id="upload3" />
              <label for="upload3">
                <b-icon icon="file-earmark-music" style="margin-right: 5px">
                </b-icon
                >Загрузить Аудио</label
              ></b-button
            >
          </b-button-group>
      </p>
    <br>
            <b-form-input
            style="height: 45px; font-size: 20px; font-weight: 500;"
          id="name"
          placeholder="Введите заголовок поста"
        >
            </b-form-input>
        <br>
                        <b-form-textarea
                style="height: 80px;"
          id="desc"
          placeholder="Введите описание поста"
        ></b-form-textarea>
    </b-media>
  </b-card>
  </div>
</template>
<script>
export default {
  name: "curpost",
};
</script>
<style scoped lang="scss">
</style>    