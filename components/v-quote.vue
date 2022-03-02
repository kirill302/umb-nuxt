<template>
  <div class="quote">
    <h3 class="quote__title">
      <slot name="title"></slot>
    </h3>
    <p class="quote__text">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.quote {
  font-family: "Ruda", sans-serif;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
  &__title {
    display: inline-block;
    font-weight: 900;
    font-size: 32px;
    text-transform: uppercase;
    line-height: 42px;
    margin-bottom: 13px;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(90deg, #ce4242 -10.17%, #527fe1 107.26%);

    @media (max-width:768px) {
      font-size: 29px;
      line-height: 35px;
    }
    @media (max-width:567px) {
      font-size: 24px;
      line-height: 23px;
    }
  }

  &__text {
    color: rgba(127, 128, 147, 0.83);
    font-size: 14px;
    line-height: 17px;
  }

  &:after {
    content: '';
    width: 110px;
    height: 1px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(90deg, #ce4242 -10.17%, #527fe1 107.26%);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>