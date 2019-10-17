<template>
  <div class="form-screen">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2">
          <h2 class="form-screen__title">Register to get a work</h2>
        </div>
        <div class="col-12 mb-30">
          <p class="form-screen__text">
            Attention! After successful registration and alert, update the list of users
            in the block from the top
          </p>
        </div>
        <div class="col-12 mb-35">
          <abz-input
            v-model="user.username"
            label="Name"
            placeholder="Your name"
            :error="$v.user.username.$error"
            @blur="$v.user.username.$touch()"
            :error-message="usernameErrorMessage"
          />
        </div>
        <div class="col-12 mb-35">
          <abz-input
            v-model="user.email"
            label="Email"
            placeholder="Your email"
            :error="$v.user.email.$error"
            @blur="$v.user.email.$touch()"
            :error-message="emailErrorMessage"
          />
        </div>
        <div class="col-12 mb-35">
          <abz-input
            type="tel"
            v-model="user.phone"
            label="Phone"
            placeholder="+38(___)___ __ __"
            :error="$v.user.phone.$error"
            @blur="$v.user.phone.$touch()"
            :error-message="phoneErrorMessage"
          />
        </div>
        <div class="col-12 mb-35">
          <abz-select :options="options" v-model="user.position" />
        </div>
        <div class="col-12 mb-35">
          <div class="form-screen__file">
            <span
              class="form-screen__file-name"
            >{{ user.photo ? user.photo.name : 'Upload your photo' }}</span>
            <label class="form-screen__file-label">
              <input type="file" @change="onFileChanged" class="form-screen__file-input" />
              <label class="form-screen__file-btn">
                <icon-upload class="form-screen__file-icon" />
              </label>
            </label>
          </div>
          <p class="form-screen__file-descr">
            File format jpg up to 5 MB, the minimum size
            of 70x70px
          </p>
        </div>
        <div class="col-12">
          <main-button label="Sign Up" :disabled="signupDisabled"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AbzInput from "./common/form/AbzInput";
import AbzSelect from "./common/form/AbzSelect";
import IconUpload from "./icons/IconUpload";
import MainButton from './common/buttons/MainButton';
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "FormScreen",
  components: {
    AbzInput,
    AbzSelect,
    IconUpload,
    MainButton
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        phone: "",
        position: "",
        photo: ""
      },
      options: [
        { id: 0, name: "Apple" },
        { id: 1, name: "Banana" },
        { id: 2, name: "Orange" },
        { id: 3, name: "Strawberry" }
      ]
    };
  },
  computed: {
    usernameErrorMessage() {
      let text = "";
      if (!this.$v.user.username.required) {
        text = "This field is required";
      }
      return text;
    },
    emailErrorMessage() {
      let text = "";
      if (!this.$v.user.email.required) {
        text = "This field is required";
      } else if (!this.$v.user.email.email) {
        text = "Write correct email address";
      }
      return text;
    },
    phoneErrorMessage() {
      let text = "";
      if (!this.$v.user.phone.required) {
        text = "This field is required";
      }
      return text;
    },
    signupDisabled() {
      return this.$v.user.username.$invalid
        || this.$v.user.email.$invalid
        || this.$v.user.phone.$invalid
        || !this.user.position
        || !this.user.photo;
    }
  },
  methods: {
    onFileChanged(event) {
      this.user.photo = event.target.files[0];
    }
  },
  validations: {
    user: {
      username: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      }
    }
  }
};
</script>
<style lang="scss">
$styles: "form-screen";
.#{$styles} {
  padding-bottom: 70px;
  &__title {
    @extend %title;
  }
  &__text {
    font-family: $sec-font;
    line-height: 1.4;
    text-align: center;
  }
  &__file-input {
    display: none;
  }
  &__file {
    @include flex-row(flex-start, stretch);
    margin-bottom: 8px;
  }
  &__file-label {
    cursor: pointer;
  }
  &__file-name {
    width: 100%;
    font-size: $base-size;
    font-family: $sec-font;
    padding: 0 18px;
    min-height: 56px;
    box-shadow: none;
    border-radius: 4px 0 0 4px;
    background-color: $bg-color;
    border: 1px solid #b7b7b7;
    border-right-color: transparent;
    pointer-events: none;
    @include flex-row(flex-start, center);
  }
  &__file-btn {
    height: 100%;
    width: 56px;
    border: 2px solid $primary-color;
    border-radius: 0 4px 4px 0;
    background-color: transparent;
    @include flex-row(center, center);
    pointer-events: none;
  }
  &__file-icon {
    @include svg(24px, $primary-color);
  }
  &__file-descr {
    @include text($input-label, 400, $disabled-button-color);
    font-family: $sec-font;
    max-width: 85%;
    display: block;
    padding-left: 18px;
  }
}
</style>