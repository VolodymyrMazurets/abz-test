<template>
  <div class="first-screen">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="first-screen__title">
            Test assignment for Frontend Developer position
          </h1>
          <p class="first-screen__text">
            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. 
          </p>
          <main-button
            label="Sign Up"
            class="first-screen__btn"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from './common/buttons/MainButton'

export default {
  name: 'FirstScreen',
  components: {
    MainButton
  }
}
</script>
<style lang="scss">
$styles: 'first-screen';
.#{$styles} {
  background: url('~@/assets/imgs/banner-bg/banner-bg-320x393.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 62px 0 69px;
  &__title {
    @include text($heading-1-mob);
    line-height: 1.2;
    margin-bottom: 8px;
  }
  &__text {
    font-family: $sec-font;
    color: $bg-color;
    line-height: 22px;
    margin-bottom: 38px;
  }
}
</style>