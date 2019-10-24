<template>
  <section class="requirements-screen" id="requirements">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 mb-4 mb-md-5 col-lg-10 offset-lg-1">
          <h2 class="requirements-screen__title">General requirements for the test task</h2>
        </div>
        <div class="col-12 col-md-6 mb-3 mb-md-0 order-md-1">
          <img
            src="@/assets/imgs/man-laptop-v1.svg"
            alt="Man with laptop"
            class="requirements-screen__img"
          />
          <img
            src="@/assets/imgs/man-laptop-v2.svg"
            alt="Man with laptop"
            class="requirements-screen__img-tablet"
          />
        </div>
        <div class="col-12 col-md-6 order-md-0">
          <p class="requirements-screen__text">
            <span>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</span>
            <span>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</span>
            <span>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RequirementsScreen"
};
</script>
<style lang="scss">
$styles: "requirements-screen";
.#{$styles} {
  padding: 67px 0 64px;
  text-align: center;
  background: url("~@/assets/img/third-block-bg-320x1031.a6374f84.jpg")
    no-repeat;
  background-size: cover;
  @include media {
    padding: 116px 0;
    background: url("~@/assets/img/third-block-bg-768x878.429b3875.jpg")
      no-repeat;
    background-size: cover;
  }
  @include media($screen-tablet-pro) {
    padding: 140px 0;
  }
  @include media($screen-pc) {
    background: url("~@/assets/img/third-block-bg-2560x692.5d0dc799.jpg")
      no-repeat 50% 50%;
    background-size: cover;
    padding: 140px 0 90px;
  }
  &__title {
    @extend %title;
    color: $bg-color;
    line-height: 1.2;
  }
  &__img {
    object-fit: cover;
    width: 90%;
    @include media {
      display: none;
    }
    @include media($screen-tablet-pro) {
      display: block;
      width: 100%;
    }
    @include media($screen-pc) {
      display: block;
      width: 80%;
      margin: auto;
    }
  }
  &__img-tablet {
    display: none;
    @include media {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    @include media($screen-tablet-pro) {
      display: none;
    }
  }
  &__text {
    @extend %grey-text;
    color: $bg-color;
    line-height: 1.4;
    @include media {
      text-align: left;
    }
    span {
      display: block;
      margin-bottom: 23px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>