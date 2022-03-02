<template>
  <label class="custom">
    <input type="checkbox" :id="id" :disabled="disabled" :checked="checked" v-model="value" @input="updateCheck"/>
    <span class="custom__input"></span>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    disabled: Boolean,
    checked: Boolean,
  },
  data() {
    return {
      value: false,
    }
  },
  methods: {
    updateCheck() {
      this.$emit('input', this.value)
    }
  },
  name: 'custom-input'
};
</script>

<style lang="scss" scoped>
// checkbox style
.custom {
  display: inline-block;
  width: 20px;
  min-height: 20px;
  position: relative;
}
input[type="checkbox"] {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="checkbox"].unvalide + .custom__input {
}
input[type="checkbox"] + .custom__input {
  @media (max-width:567px) {
    min-width: 15px;
    min-height: 15px;
    border-radius: 2px;
    top: 7px;
  }
  position: absolute;
  top: 5px;
  left: 0;
  min-width: 20px;
  min-height: 20px;
  background-image: url("~@/assets/img/check-default.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  border-radius: 4px;
}
input[type="checkbox"]:checked + .custom__input {
  background-image: url("~@/assets/img/check-checked.svg");
}
input[type="checkbox"]:checked:focus + .custom__input {
  background-image: url("~@/assets/img/check-checked.svg");
}
input[type="checkbox"]:disabled + .custom__input {
  opacity: 0.5;
}
input[type="checkbox"]:checked:disabled + .custom__input {
  background-image: url("~@/assets/img/check-checked.svg");
  opacity: 0.5;
}

// radio style

</style>