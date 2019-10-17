<template>
  <div id="app">
    <app-header />
    <first-screen />
    <acquainted-screen />
    <relationships-screen />
    <requirements-screen />
    <users-screen />
    <form-screen />
    <app-footer />
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
    AppFooter
  }
};
</script>

<style lang="scss">
</style>
