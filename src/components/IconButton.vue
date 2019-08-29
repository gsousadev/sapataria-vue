<template>
  <div class="col-12 col-sm-6 col-md-4">
    <router-link :class="getClassNames()" :to="url">
      <h3 class="title">{{ buttonText }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(`Link component '${this.buttonText}' mounted.`);
  },
  props: {
    url: String,
    buttonText: String,
    classNames: String,
    iconClass: String
  },
  methods: {
    getClassNames: function() {
      return `sp-link`;
    }
  }
};
</script>

<style lang="scss" scoped>
.sp-link {
  padding: 50px;
  background: #1a70e0;
  color: #fff;
  display: block;
  margin-bottom: 15px;
  text-align: center;
  & .fas {
    font-size: 30px;
    color: #fff;
    margin-bottom: 15px;
  }
  & .title {
    color: #fff;
  }
  &:hover{
    text-decoration: none;
    transform: scale(1.03);
    transition: .2s ease-in-out;
  }
}
</style>
