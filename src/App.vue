<template>
  <div id="app">
    <router-view />
    <footer id="footer">
      <a
        href="https://metrika.yandex.ru/stat/?id=85877765&amp;from=informer"
        target="_blank"
        rel="nofollow"
        ><img
          src="https://informer.yandex.ru/informer/85877765/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
          style="width: 88px; height: 27px; border: 0"
          alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          class="ym-advanced-informer"
          data-cid="85877765"
          data-lang="ru"
      /></a>
      All rights reserved,
      <a href="/info">Политика конфиденциальности</a> &ensp;
      <a href="/info">Пользовательское соглашение</a>&ensp;<a href=""></a>
      <a href="/info/subs">Соглашение с подпиской</a> ИП Яковлев Михаил Геннадьевич. ИНН 601500047894, ГРНИП 321602700021753, support@neearby.com, +79113841683
    </footer>
  </div>
</template>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(85877765, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
</script>
<style lang="scss">
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footer {
  opacity: 0;
  -moz-animation: cssAnimation 4s;
  /* Firefox */
  -webkit-animation: cssAnimation 4s;
  /* Safari and Chrome */
  -o-animation: cssAnimation 4s;
  /* Opera */
  animation: cssAnimation 4s;
  transition: all 4s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
@keyframes cssAnimation {
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes cssAnimation {
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
footer {
  font-size: 10px;
  padding-left: 0%;
  text-decoration: none;
  position: relative;
  top: 100%;
  background-color: #e9e9e9;
}

.btn-info {
  background-color: #fe6637;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fe6637;
  border-radius: 6px;
  font-weight: 650;
  font-family: "Montserrat", sans-serif;
  color: white;
  transition: 0.5s ease-in-out;
}
.btn-info:hover {
  border: 1px solid #ff4911;
  background: #ff4911;
  color: rgb(255, 255, 255);
}
.btn-info:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.btn-secondary {
  background-color: #fe6637;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fe6637;
  border-radius: 6px;
  font-weight: 650;
  font-family: "Montserrat", sans-serif;
  color: white;
  transition: 0.5s ease-in-out;
}
.btn-secondary:hover {
  border: 1px solid #ff4911;
  background: #ff4911;
  color: rgb(255, 255, 255);
}
.btn-secondary:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.btn-secondary-outline {
  background-color: #fe6637;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fe6637;
  border-radius: 6px;
  font-weight: 650;
  font-family: "Montserrat", sans-serif;
  color: white;
  transition: 0.5s ease-in-out;
}
.btn-secondary-outline:hover {
  border: 1px solid #ff4911;
  background: #ff4911;
  color: rgb(255, 255, 255);
}
.btn-secondary-outline:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.btn-primary {
  background-color: #fe6637;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fe6637;
  border-radius: 6px;
  font-weight: 650;
  font-family: "Montserrat", sans-serif;
  color: white;
  transition: 0.5s ease-in-out;
}
.btn-primary:hover {
  border: 1px solid #ff4911;
  background: #ff4911;
  color: rgb(255, 255, 255);
}
.btn-primary:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.btn-primary-outline {
  background-color: #fe6637;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fe6637;
  border-radius: 6px;
  font-weight: 650;
  font-family: "Montserrat", sans-serif;
  color: white;
  transition: 0.5s ease-in-out;
}
.btn-primary-outline:hover {
  border: 1px solid #ff4911;
  background: #ff4911;
  color: rgb(255, 255, 255);
}
.btn-primary-outline:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-button {
  background-color: #666;
}
::-webkit-scrollbar-track {
  background-color: #999;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #666;
  border-radius: 3px;
}
::-webkit-scrollbar-corner {
  background-color: #999;
}
::-webkit-resizer {
  background-color: #666;
}
</style>
