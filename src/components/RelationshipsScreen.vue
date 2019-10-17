<template>
  <section class="relationships-screen">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-30">
          <h2 class="relationships-screen__title">About my relationships with web-development</h2>
        </div>
        <div class="col-12 relationships-screen__card">
          <img src="@/assets/imgs/html.svg" alt="html5" class="relationships-screen__card-img" />
          <h4 class="relationships-screen__card-title">I'm in love with HTML</h4>
          <p class="relationships-screen__card-text">
            Hypertext Markup Language (HTML)
            is the standard markup language for creating web pages and web applications.
          </p>
        </div>
        <div class="col-12 relationships-screen__card">
          <img src="@/assets/imgs/css.svg" alt="css3" class="relationships-screen__card-img" />
          <h4 class="relationships-screen__card-title">CSS is my best friend</h4>
          <p class="relationships-screen__card-text">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
        </div>
        <div class="col-12 relationships-screen__card">
          <img
            src="@/assets/imgs/javascript.svg"
            alt="js"
            class="relationships-screen__card-img"
          />
          <h4 class="relationships-screen__card-title">JavaScript is my passion</h4>
          <p class="relationships-screen__card-text">JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RelationshipsScreen"
};
</script>
<style lang="scss">
$styles: 'relationships-screen';
.#{$styles} {
  padding-bottom: 74px;
  &__title {
    @extend %title;
    line-height: 1.2;
  }
  &__card {
    @include flex-col(flex-start, center);
    text-align: center;
    margin-bottom: 26px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__card-img {
    width: 88px;
    margin-bottom: 12px;
  }
  &__card-title {
    font-size: $heading-3;
  }
  &__card-text {
    @extend %grey-text;
    line-height: 1.4;
  }
}
</style>