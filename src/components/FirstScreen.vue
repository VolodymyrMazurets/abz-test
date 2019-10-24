<template>
  <div class="first-screen">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 col-xl-6">
          <h1 class="first-screen__title">Test assignment for Frontend Developer position</h1>
          <p
            class="first-screen__text"
          >We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</p>
          <p class="first-screen__text-tablet">
            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission.
            <span>Good luck!</span>
          </p>
          <main-button anchor="#sign_up" label="Sign Up" class="first-screen__btn" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from "./common/buttons/MainButton";

export default {
  name: "FirstScreen",
  components: {
    MainButton
  }
};
</script>
<style lang="scss">
$styles: "first-screen";
.#{$styles} {
  background: url("~@/assets/imgs/banner-bg/banner-bg-320x393.jpg") no-repeat
    center center;
  background-size: cover;
  text-align: center;
  padding: 128px 0 69px;
  position: relative;
  z-index: 0;
  @include media {
    text-align: left;
    padding: 180px 0;
    background: url("~@/assets/imgs/banner-bg/banner-bg-768x622.jpg") no-repeat
      center center;
    background-size: cover;
  }
  @include media($screen-tablet-pro) {
    padding: 210px 0 160px;
    background: url("~@/assets/imgs/banner-bg/banner-bg-1204x723.jpg") no-repeat
      center center;
    background-size: cover;
  }
  @include media($screen-pc) {
    background: url("~@/assets/imgs/banner-bg/banner-bg-2560x676.jpg") no-repeat
      center center;
    background-size: cover;
    padding: 210px 0 130px;
  }
  &__title {
    @include text($heading-1-mob);
    line-height: 1.2;
    margin-bottom: 8px;
    @include media {
      font-size: $heading-1-tab;
      margin-bottom: 20px;
    }
    @include media($screen-tablet-pro) {
      font-size: $heading-1-desc;
      margin-bottom: 16px;
    }
  }
  &__text {
    font-family: $sec-font;
    color: $bg-color;
    line-height: 22px;
    margin-bottom: 38px;
    @include media {
      display: none;
    }
  }
  &__text-tablet {
    display: none;
    @include media {
      @include text($medium-size, 400, $bg-color);
      font-family: $sec-font;
      line-height: 1.4;
      display: block;
      margin-bottom: 30px;
    }
    @include media($screen-tablet-pro) {
      font-size: $button-size;
      line-height: 1.3;
      max-width: 85%;
      margin-bottom: 40px;
      & > span {
        display: block;
      }
    }
    @include media($screen-pc) {
      & > span {
        display: initial;
      }
    }
  }
}
</style>