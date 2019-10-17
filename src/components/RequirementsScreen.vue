<template>
  <section class="requirements-screen">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4">
          <h2 class="requirements-screen__title">General requirements for the test task</h2>
        </div>
        <div class="col-12 mb-3">
          <img
            src="@/assets/imgs/man-laptop-v1.svg"
            alt="Man with laptop"
            class="requirements-screen__img"
          />
        </div>
        <div class="col-12">
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
$styles: 'requirements-screen';
.#{$styles} {
  padding: 67px 0 64px;
  text-align: center;
  background: url('~@/assets/imgs/third-block-bg/third-block-bg-320x1031.jpg') no-repeat;
  background-size: cover;
  &__title {
    @extend %title;
    color: $bg-color;
    line-height: 1.2;
  }
  &__img {
    object-fit: cover;
    width: 90%;
  }
  &__text {
    @extend %grey-text;
    color: $bg-color;
    line-height: 1.4;
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