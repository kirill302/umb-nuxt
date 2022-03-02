<template>
  <h3 class="g-title"><slot /></h3>
</template>

<script>
export default {};
</script>

<style lang="scss">
.g-title {
  @media (max-width: 567px) {
    font-size: 20px;

    &.no-mobile-line,
    &.no-line {
      padding: 0;
    }
    &.no-mobile-line:after,
    &.no-mobile-line:before,
    &.no-line:after,
    &.no-line:before {
      display: none;
    }
  }
  &.no-line {
    padding: 0px !important;
  }
  &.no-line:after,
  &.no-line:before {
    display: none;
  }
  &.fz-24 {
    font-size: 24px;
    @media (max-width:1024px) {
      font-size: 22px;
    }
    @media (max-width:786px) {
      font-size: 18px;
    }
  }
  &.fz-20 {
    font-size: 20px;
    @media (max-width:786px) {
      font-size: 16px;
    }
  }
  &.left {
    text-align: left !important;
    margin: 0 !important;
  }
  &.fz-14 {
    font-size: 14px;
  }
  &.line-small {
    padding: 0 50px;
  }
  &.line-small:after {
    background: url("~@/assets/img/tarif-line-left.svg") no-repeat !important;
    width: 42px;
  }
  &.line-small:before {
    width: 42px;
    background: url("~@/assets/img/tarif-right-line.svg") no-repeat !important;
  }
  &.color-white {
    color: #fff;
  }
  &.ttn {
    text-transform: none;
  }
  &.fw-500 {
    font-weight: 500;
  }
  &.fw-900 {
    font-weight: 900;
  }
  margin: 0 auto;
  display: inline-block;
  color: transparent;
  background-clip: text;
  font-size: 27px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background-image: linear-gradient(90deg, #ce4242 -10.17%, #527fe1 107.26%);
  position: relative;
  margin: 0 auto;
  padding: 0 85px;
  font-weight: 700;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 74px;
    height: 13px;
    background: url("~@/assets/img/title-line-left.svg") no-repeat center;
  }
  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 74px;
    height: 13px;
    background: url("~@/assets/img/title-line-right.svg") no-repeat center;
  }
}
</style>