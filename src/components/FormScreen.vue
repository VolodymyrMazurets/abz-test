<template>
  <div class="form-screen" id="sign_up">
    <abz-popup v-if="showPopup" @close="showPopup = false" />
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2 mb-md-3">
          <h2 class="form-screen__title">Register to get a work</h2>
        </div>
        <div class="col-12 mb-lg-30 col-md-6 offset-md-3 col-lg-10 offset-lg-1 mb-lg-5">
          <p class="form-screen__text">
            Attention! After successful registration and alert, update the list of users
            in the block from the top
          </p>
        </div>
        <div class="col-12 mb-35 col-md-4">
          <abz-input
            v-model="name"
            label="Name"
            placeholder="Your name"
            :error="$v.name.$error"
            @blur="$v.name.$touch()"
            :error-message="usernameErrorMessage"
          />
        </div>
        <div class="col-12 mb-35 col-md-4">
          <abz-input
            v-model="email"
            label="Email"
            placeholder="Your email"
            :error="$v.email.$error"
            @blur="$v.email.$touch()"
            :error-message="emailErrorMessage"
          />
        </div>
        <div class="col-12 mb-35 col-md-4">
          <abz-input
            type="tel"
            v-model="phone"
            label="Phone"
            placeholder="+38(___)___ __ __"
            :error="$v.phone.$error"
            @blur="$v.phone.$touch()"
            :error-message="phoneErrorMessage"
          />
        </div>
        <div class="col-12 mb-35 col-md-6">
          <abz-select
            :options="positions"
            v-model="position_id" />
        </div>
        <div class="col-12 mb-35 col-md-6">
          <div class="form-screen__file">
            <span class="form-screen__file-name">{{ photo ? photo.name : 'Upload your photo' }}</span>
            <label class="form-screen__file-label">
              <input
                :error="$v.photo.$error"
                accept="image/jpeg, image/jpg"
                type="file"
                @change="onFileChanged"
                class="form-screen__file-input"
              />
              <label class="form-screen__file-btn">
                Upload
                <icon-upload class="form-screen__file-icon" />
              </label>
            </label>
          </div>
          <p
            class="form-screen__file-descr"
            :class="{'error': $v.photo.$invalid && $v.photo.$model}"
          >
            File format jpg up to 5 MB, the minimum size
            of 70x70px
          </p>
        </div>
        <div class="col-12 col-md-6 offset-md-3">
          <main-button
            class="form-screen__btn"
            label="Sign Up"
            :disabled="signupDisabled"
            @click.native="signup" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AbzInput from "./common/form/AbzInput";
import AbzSelect from "./common/form/AbzSelect";
import IconUpload from "./icons/IconUpload";
import MainButton from "./common/buttons/MainButton";
import AbzPopup from "./common/pop/AbzPopup";
import {
  required,
  email,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import { mapActions, mapState, mapMutations } from "vuex";
import { POSITIONS_REQUEST, SIGNUP_REQUEST, SIGNUP_UPDATE_FORM, SIGNUP_UPDATE_VALUE, USERS_REQUEST} from "../constants";

const fileSize = (value = {}) => {
  const { size = 0 } = value;
  return size < 5242880 && size > 5625;
};

const getSetForm = (key) => {
  return {
    get() {
      return this.formData[key];
    },
    set(value) {
      this[SIGNUP_UPDATE_FORM]({ key, value });
    }
  }
}

export default {
  name: "FormScreen",
  components: {
    AbzInput,
    AbzSelect,
    IconUpload,
    MainButton,
    AbzPopup
  },
  data() {
    return {
      showPopup: false
    };
  },
  computed: {
    usernameErrorMessage() {
      let text = "";
      if (!this.$v.name.required) {
        text = "This field is required";
      } if (!this.$v.name.minLength) {
        text = "Min length is 6 characters";
      } if (!this.$v.name.maxLength) {
        text = "Max length is 60 characters";
      }
      return text;
    },
    emailErrorMessage() {
      let text = "";
      if (!this.$v.email.required) {
        text = "This field is required";
      } else if (!this.$v.email.email) {
        text = "Write correct email address";
      }
      return text;
    },
    phoneErrorMessage() {
      let text = "";
      if (!this.$v.phone.required) {
        text = "This field is required";
      }
      return text;
    },
    signupDisabled() {
      return this.$v.$invalid;
    },
    ...mapState({
      positions: ({ positions }) => positions.positions,
      formData: ({ signup }) => signup.formData
    }),
    position_id: getSetForm('position_id'),
    name: getSetForm('name'),
    email: getSetForm('email'),
    phone: getSetForm('phone'),
    photo: getSetForm('photo')
  },
  methods: {
    ...mapMutations('signup', [
      SIGNUP_UPDATE_FORM,
      SIGNUP_UPDATE_VALUE,
    ]),
    ...mapActions({
      [USERS_REQUEST]: `users/${USERS_REQUEST}`,
      [POSITIONS_REQUEST]: `positions/${POSITIONS_REQUEST}`,
      [SIGNUP_REQUEST]: `signup/${SIGNUP_REQUEST}`
    }),
    onFileChanged(event) {
      this.photo = event.target.files[0];
    },
    async signup() {
      const formDataAll = new FormData();
      formDataAll.append('photo', this.photo);
      formDataAll.append('phone', this.phone);
      formDataAll.append('email', this.email);
      formDataAll.append('name', this.name);
      formDataAll.append('position_id', this.position_id.id);
      await this[SIGNUP_REQUEST](formDataAll);
      this.showPopup = true;
      this.photo = "";
      this.phone = "";
      this.email = "";
      this.name = "";
      this.position_id = {};
      await this[USERS_REQUEST]();
      this.$nextTick(() => { this.$v.$reset() });
    }
  },
  async created() {
    await this[POSITIONS_REQUEST]();
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60)
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    photo: {
      fileSize
    }
  }
};
</script>
<style lang="scss">
$styles: "form-screen";
.#{$styles} {
  padding-top: 67px;
  padding-bottom: 70px;
  @include media {
    padding: 140px 0 110px;
  }
  @include media($screen-tablet-pro) {
    padding-bottom: 150px;
  }
  &__title {
    @extend %title;
  }
  &__text {
    font-family: $sec-font;
    line-height: 1.4;
    text-align: center;
    @include media {
      font-size: $medium-size;
    }
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
    font-size: 0;
    @include media {
      width: 130px;
      @include text($button-size, 700, $primary-color);
      // cursor: pointer;
      // @include transition;
      // &:hover {
      //   color: $bg-color;
      //   background-color: $primary-color;
      // }
    }
  }
  &__file-icon {
    @include svg(24px, $primary-color);
    @include media {
      display: none;
    }
  }
  &__file-descr {
    @include text($input-label, 400, $disabled-button-color);
    font-family: $sec-font;
    max-width: 85%;
    display: block;
    padding-left: 18px;
    &.error {
      color: $error-color;
    }
  }
  &__btn {
    @include media {
      margin: auto;
    }
  }
}
</style>