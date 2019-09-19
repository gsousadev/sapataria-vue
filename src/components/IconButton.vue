<template>
  <div class="col-12 col-md-6">
    <router-link :class="getClassNames()" :to="url">
      <h3 class="title">{{ buttonText }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    buttonText: String,
    classNames: String,
    iconClass: String
  },
  methods: {
    getClassNames: function() {
      return 'sp-link bg-primary rounded';
    }
  }
};
</script>

<style lang="scss" scoped>
.sp-link {
  padding: 50px;
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
