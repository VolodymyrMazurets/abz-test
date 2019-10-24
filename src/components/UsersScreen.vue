<template>
  <section class="users-screen" id="users">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="users-screen__title">Our cheerful users</h2>
        </div>
        <div class="col-8 offset-2 mb-4 mb-md-5">
          <h4 class="users-screen__subtitle">Attention! Sorting users 
by registration date</h4>
        </div>
        <div class="col-12">
          <abz-transition-group>
            <div class="col-12 users-screen__card col-md-4" v-for="user in sortedUsers" :key="user.id">
              <div class="users-screen__img-wrapper">
                <img
                  :src="user.photo"
                  alt="user"
                  class="users-screen__img">
              </div>
              <div class="users-screen__wrapper">
                <h4 class="users-screen__user-name">{{ user.name | trancate() }}</h4>
                <p class="users-screen__value users-screen__value--all">{{ user.position }}</p>
                <p class="users-screen__value">{{ user.email }}</p>
                <p class="users-screen__value users-screen__value--all">{{ user.phone }}</p> 
              </div> 
            </div>
          </abz-transition-group>
        </div>
        <div class="col-12 col-md-6 offset-md-3 col-lg-4 offset-md-4">
          <main-button
            label="Show more"
            isSecondary
            class="users-screen__btn"
            @click.native.prevent="raiseCount"
            v-if="total_users >= count"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MainButton from './common/buttons/MainButton';
import AbzTransitionGroup from './common/animation/AbzTransitionGroup';
import { mapActions, mapState, mapGetters } from "vuex";
import { USERS_REQUEST, RISE_COUNT } from '../constants';

export default {
  name: 'UsersScreen',
  components: {
    MainButton,
    AbzTransitionGroup
  },
  computed: {
    ...mapState({
      users: ({ users }) => users.users,
      total_users: ({ users }) => users.total_users,
      count: ({users}) => users.count
    }),
    ...mapGetters('users', ['sortedUsers'])
  },
  methods: {
    ...mapActions({
      [USERS_REQUEST]: `users/${USERS_REQUEST}`,
      [RISE_COUNT]: `users/${RISE_COUNT}`
    }),
    raiseCount() {
      this[RISE_COUNT]();
    }
  },
 async created() {
   await this[USERS_REQUEST]();
  }
  
}
</script>
<style lang="scss">
$styles: 'users-screen';
.#{$styles} {
  padding: 67px 0 0;
  @include media {
    padding-top: 100px;
  }
  @include media($screen-tablet-pro) {
    padding-top: 140px;
  }
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
    width: 100%;
    margin-bottom: 30px;
    @include media {
      margin-bottom: 54px;
    }
    @include media($screen-tablet-pro) {
      @include flex-row;
      margin-bottom: 60px;
    }
  }
  &__img-wrapper {
    $size: 70px;
    width: $size;
    height: $size;
    margin-bottom: 12px;
    @include media($screen-tablet-pro) {
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
  &__img {
    $size: 70px;
    width: $size;
    height: $size;
    border-radius: 50%;   
    object-fit: cover;
  }
  &__wrapper {
    width: 100%;
    @include media($screen-tablet-pro) {
      padding-top: 27px;
      @include flex-col;
      max-width: calc(100% - 78px);
    }
  }
  &__user-name {
    font-size: $heading-3;
    text-align: center;
    max-width: 100%;
    @include media($screen-tablet-pro) {
      text-align: left;
      margin-bottom: 16px;
    }
  }
  &__value {
    @include text($small-size, 400, $grey-text);
    font-family: $sec-font;
    margin-bottom: 4px;
    line-height: 1.2;
    text-align: center;
    @extend %text-crop;
    max-width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    &--all {
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }
  &__btn {
    & > * {
      margin: auto;
    }
  }
}
</style>