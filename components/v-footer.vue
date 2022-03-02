<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__copy">2018-2022 UMBRELLA</div>
        <div class="footer__links">
          <a href="">Контакты организации</a>
          <span>|</span>
          <a href="https://vk.com/cheats_dota" target="_blank">Сообщество ВКонтакте</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
.footer {
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  &__inner {
    padding: 28px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:567px) {
      padding: 10px;
    }
  }

  &__copy {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.83);
    text-transform: uppercase;
    font-style: normal;

    @media (max-width:567px) {
      font-size: 12px;
    }
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 5px;
    a {
      color: rgba(127, 128, 147, 0.83);
      font-size: 14px;

      @media (max-width:567px) {
      font-size: 12px;
      text-align: right;
    }
    }
    span {
      color: rgba(127, 128, 147, 0.6);
      font-size: 20px;

      @media (max-width:567px) {
      font-size: 15px;
    }
    }
  }
}
</style>