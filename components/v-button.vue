<template>
  <button class="v-button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-button {
  position: relative;
  z-index: 10;

  font-family: 'Roboto', sans-serif;
  width: fit-content;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;

  background: linear-gradient(267.22deg, #F43837 -10.81%, #527FE1 134.55%);
  box-shadow: 0px 0px 15px rgba(233, 62, 62, 0.45);
  border-radius: 33px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;

  transition: .1s ;

  &:hover,
  &.border:hover {
    box-shadow: 0px 0px 15px rgba(233, 62, 62, 0.8);
    background: linear-gradient(220.22deg, #F43837 -10.81%, #527FE1 134.55%);
  }

  &:disabled {
    filter: grayscale(100%);
  }

  &.border {
    box-shadow: none;
    font-size: 14px;
    padding: 13px 25px;
  }

  &.border::before {
  content: "";
  position: absolute;
  top: 2.5px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  pointer-events: none;
  border-radius: 33px;

  background: #2D252F;
  z-index: -1;
}

  &.w-100 {
    width: 100%;
  }
}
</style>