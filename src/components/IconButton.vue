<template>
  <div class="col-12 col-lg-6">
    <router-link :to="url" class="sp-link bg-primary rounded d-flex justify-content-center">
      <h3 class="title">
        <i class="material-icons">{{iconClass}}</i>
        <span>{{buttonText}}</span>
      </h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    buttonText: String,
    classNames: String,
    iconClass: String,
  },
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
    & i{
      width: 50px;
    }
  }
  &:hover {
    text-decoration: none;
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
}
</style>
