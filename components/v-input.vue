<template>
  <input
    class="v-input"
    @input="updateInput"
    v-model="value"
  />
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.v-input {
  font-family: "Roboto";
  width: 100%;
  background: #000000;
  padding: 10px 22px;
  border-radius: 50px;
  min-height: 42px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 15px;
  color: #fff;
  

  &:disabled {
    opacity: 0.5;
  }
  &.invalid {
    box-shadow: 0px 0px 4px #DC1E0A;
  }

  &.invalid[type="password"] {
    color: #CE4242 !important;
  }

  &[type="password"] {
    font-family: "password";
    font-size: 15px;
    letter-spacing: -7px;
  }
  &[type="password"]::placeholder {
    font-family: "Roboto";
    letter-spacing: 1px;
    
    font-size: 15px;
  }
}
</style>