<template>
  <h2 class="tit-h2"><slot /></h2>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tit-h2 {
  font-family: 'Ruda', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  color: #fff;
  text-align: center;

  @media (max-width:768px) {
    font-size: 38px;
    line-height: 52px;
  }
  @media (max-width:567px) {
    font-size: 30px;
    line-height: 40px;
  }

  &.fz-20 {
    font-size: 20px;
    line-height: 30px;
    @media (max-width:768px) {
    font-size: 18px;
  }
  @media (max-width:567px) {
    font-size: 16px;
  }
  }

  .mark {
    color: #CE4242;
  }

  &._line {
    padding-bottom: 33px;
    margin-bottom: 40px;
    position: relative;
  }
  &._line:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: 13px;
    
    background: url('~@/assets/img/title-line.svg') no-repeat center;
    background-size: contain;
  }
  &._uppercase {
    text-transform: uppercase;
  }
  &._left {
    text-align: left;
  }
}
</style>