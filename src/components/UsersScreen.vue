<template>
  <section class="users-screen">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="users-screen__title">Our cheerful users</h2>
        </div>
        <div class="col-8 offset-2 mb-4">
          <h4 class="users-screen__subtitle">Attention! Sorting users 
by registration date</h4>
        </div>
        <div class="col-12 users-screen__card">
          <div class="users-screen__img-wrapper">
            <img
              src="@/assets/imgs/user-adolph-2x.png"
              alt="user"
              class="users-screen__img">
          </div>
          <h4 class="users-screen__user-name">Noah</h4>
          <p class="users-screen__value">Leading specialist of the Control Department</p>
          <p class="users-screen__value">noah.controldepartment@gmail.com</p>
          <p class="users-screen__value">+38 (050) 678 03 24</p>  
        </div>
        <div class="col-12">
          <main-button label="Show more" isSecondary/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MainButton from './common/buttons/MainButton'
export default {
  name: 'UsersScreen',
  components: {
    MainButton
  }
}
</script>
<style lang="scss">
$styles: 'users-screen';
.#{$styles} {
  padding: 67px 0;
  &__title {
    @extend %title;
    line-height: 1.1;
  }
  &__subtitle {
    font-family: $sec-font;
    color: $black;
    text-align: center;
    line-height: 1.4;
  }
  &__card {
    @include flex-col(flex-start, center);
    margin-bottom: 30px;
  }
  &__img-wrapper {
    margin-bottom: 12px;
  }
  &__img {
    $size: 70px;
    width: $size;
    height: $size;
    border-radius: 50%;   
    object-fit: cover;
  }
  &__user-name {
    font-size: $heading-3;
  }
  &__value {
    @include text($small-size, 400, $grey-text);
    font-family: $sec-font;
    margin-bottom: 4px;
    line-height: 1.2;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>