<template>
  <section class="acquainted-screen">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 mb-30">
          <h2 class="acquainted-screen__title">Let's get acquainted</h2>
        </div>
        <div class="col-9 mb-30">
          <img src="@/assets/imgs/man-mobile.svg" alt="Man Mobile" class="acquainted-screen__img" />
        </div>
        <div class="col-12">
          <h4 class="acquainted-screen__subtitle">I am cool frontend developer</h4>
          <p class="acquainted-screen__text">
            When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
          </p>
          <p class="acquainted-screen__text acquainted-screen__text--last">
            Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.
          </p>
          <a href="#" class="acquainted-screen__link abz-link">Sign Up</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AcquaintedScreen"
};
</script>
<style lang="scss">
$styles: "acquainted-screen";
.#{$styles} {
  padding: 70px 0 64px;
  text-align: center;
  &__title {
    @extend %title;
    line-height: 1;
  }
  &__img {
    object-fit: cover;
    width: 100%;
  }
  &__subtitle {
    font-size: $heading-3;
    max-width: 70%;
    margin: 0 auto 14px;
    line-height: 1.2;
  }
  &__text {
    @extend %grey-text;
    margin-bottom: 21px;
    line-height: 1.4;
    &--last {
      margin-bottom: 15px;
    }
  }
}
</style>