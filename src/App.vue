<template>
  <div id="app">
    <div class="layer" v-if="showSideMenu" @click="showSideMenu = !showSideMenu"></div>
    <abz-transition name="slide">
      <mobile-side-menu
        v-if="showSideMenu"/>
    </abz-transition>
    <app-header class="header" @show="showSideMenu = true"/>
    <main class="main">
      <first-screen />
      <acquainted-screen />
      <relationships-screen />
      <requirements-screen />
      <users-screen />
      <form-screen />
    </main>
    <app-footer class="footer"/>
  </div>
</template>

<script>
import AppHeader from "./components/navigation/AppHeader";
import FirstScreen from "./components/FirstScreen";
import AcquaintedScreen from "./components/AcquaintedScreen";
import RelationshipsScreen from './components/RelationshipsScreen';
import RequirementsScreen from './components/RequirementsScreen';
import UsersScreen from './components/UsersScreen';
import FormScreen from './components/FormScreen';
import AppFooter from "./components/navigation/AppFooter";
import AbzTransition from './components/common/animation/AbzTransition';
import MobileSideMenu from './components/navigation/MobileSideMenu';
import { mapActions, mapState } from 'vuex';
import { TOKEN_REQUEST } from './constants';

export default {
  name: "app",
  components: {
    AppHeader,
    FirstScreen,
    AcquaintedScreen,
    RelationshipsScreen,
    RequirementsScreen,
    UsersScreen,
    FormScreen,
    AppFooter,
    AbzTransition,
    MobileSideMenu
  },
  data() {
    return {
      showSideMenu: false
    }
  },
  computed: {
    ...mapState({
      token: ({ signup }) => signup.token
    })
  },
  methods: {
    openMobileNav() {
      this.showSideMenu = true
    },
    ...mapActions({
      [TOKEN_REQUEST]: `signup/${TOKEN_REQUEST}`
    })
  },
  async created() {
    await this[TOKEN_REQUEST]();
  }
};
</script>