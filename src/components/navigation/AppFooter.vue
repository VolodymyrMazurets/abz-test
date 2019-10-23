<template>
  <div class="app-footer">
    <div class="app-footer__nav">
      <div class="container app-footer__row">
        <a href="/" class="app-footer__logo-link">
          <icon-logo class="app-footer__logo" />
        </a>
        <ul class="app-footer__list">
          <li class="app-footer__item">
            <a href="#about_me" class="app-footer__link">About me</a>
          </li>
          <li class="app-footer__item">
            <a href="#relationships" class="app-footer__link">Relationships</a>
          </li>
          <li class="app-footer__item">
            <a href="#requirements" class="app-footer__link">Requirements</a>
          </li>
          <li class="app-footer__item">
            <a href="#users" class="app-footer__link">Users</a>
          </li>
          <li class="app-footer__item">
            <a href="#sign_up" class="app-footer__link">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 app-footer__social">
          <div class="row mb-md-4">
            <div class="col-12 mb-4 col-md-4 mb-md-0">
              <ul class="app-footer__address-list">
                <li class="app-footer__address-item">
                  <a
                    class="app-footer__link"
                    href="mailto:work.of.future@gmail.com"
                  >
                    <icon-mail class="app-footer__contact-icon"/>
                    work.of.future@gmail.com
                  </a>
                </li>
                <li class="app-footer__address-item">
                  <a class="app-footer__link" href="tel:+38 (050) 789 24 98 ">
                    <icon-phone-old class="app-footer__contact-icon"/>
                    +38 (050) 789 24 98
                  </a>
                </li>
                <li class="app-footer__address-item">
                  <a class="app-footer__link" href="tel:+38 (095) 556 08 45">
                    <icon-phone class="app-footer__contact-icon"/>
                    +38 (095) 556 08 45
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-8 d-none d-md-block">
              <div class="row app-footer__links-tablet-block">
                <div class="col-3">
                  <ul class="app-footer__tablet-list">
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">News</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Blog</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Partners</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Shop</a>
                    </li>
                  </ul>
                </div>
                <div class="col-3">
                  <ul class="app-footer__tablet-list">
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Overview</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Design</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Code</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Collaborate</a>
                    </li>
                  </ul>
                </div>
                <div class="col-3">
                  <ul class="app-footer__tablet-list">
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Tutorials</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Resources</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Guides</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Examples</a>
                    </li>
                  </ul>
                </div>
                <div class="col-3">
                  <ul class="app-footer__tablet-list">
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">FAQ</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Terms</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Conditions</a>
                    </li>
                    <li class="app-footer__tablet-item">
                      <a href="#" class="app-footer__link">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-3 mb-md-0 col-md-4 order-md-1 offset-md-4">
              <ul class="app-footer__social-networks">
                <li class="app-footer__social-networks-item">
                  <a href="#" target="_blank" class="app-footer__social-networks-link">
                    <icon-facebook class="app-footer__social-icon"/>
                  </a>
                </li>
                <li class="app-footer__social-networks-item">
                  <a href="#" target="_blank" class="app-footer__social-networks-link">
                    <icon-linked-in class="app-footer__social-icon"/>
                  </a>
                </li>
                <li class="app-footer__social-networks-item">
                  <a href="#" target="_blank" class="app-footer__social-networks-link">
                    <icon-instagram class="app-footer__social-icon"/>
                  </a>
                </li>
                <li class="app-footer__social-networks-item">
                  <a href="#" target="_blank" class="app-footer__social-networks-link">
                    <icon-twitter class="app-footer__social-icon"/>
                  </a>
                </li>
                <li class="app-footer__social-networks-item">
                  <a href="#" target="_blank" class="app-footer__social-networks-link">
                    <icon-pinterest class="app-footer__social-icon"/>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 order-md-0">
              <p class="app-footer__rights">© abz.agency specially for the test task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconLogo from "../icons/IconLogo";
import IconFacebook from "../icons/IconFacebook";
import IconLinkedIn from "../icons/IconLinkedIn";
import IconInstagram from "../icons/IconInstagram";
import IconTwitter from "../icons/IconTwitter";
import IconPinterest from "../icons/IconPinterest";
import IconPhone from "../icons/IconPhone";
import IconPhoneOld from "../icons/IconPhoneOld";
import IconMail from "../icons/IconMail";

export default {
  name: "AppFooter",
  components: {
    IconLogo,
    IconFacebook,
    IconLinkedIn,
    IconInstagram,
    IconTwitter,
    IconPinterest,
    IconMail,
    IconPhoneOld,
    IconPhone
  }
};
</script>
<style lang="scss">
$styles: "app-footer";
.#{$styles} {
  background-color: $secondary-color;
  &__nav {
    padding: 30px 0 27px;
    @include flex-col(flex-start, center);
    border-bottom: 1px solid #5674b9;
    text-align: center;
    @include media {
      @include flex-row(space-between, flex-start);
    }
  }
  &__row {
    @include flex-col(flex-start, center);
    @include media {
      @include flex-row(space-between, flex-start);
    }
  }
  &__logo-link {
    margin-bottom: 10px;
  }
  &__logo {
    width: 134px;
    height: 24px;
    fill: $bg-color;
  }
  &__list {
    @include media {
      @include flex-row;
    }
  }
  &__item {
    margin-bottom: 3px;
    &:last-child {
      margin-bottom: 0;
    }
    @include media {
      margin-bottom: 0;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__link {
    color: $bg-color;
    font-family: $sec-font;
    line-height: 1.4;
    @include media($screen-tablet-pro) {
      @include transition(color);
      @include flex-row(flex-start, center);
      &:hover {
        color: $primary-color;
        & > svg {
          fill: $primary-color;
        }
      }
    }
  }
  &__social {
    padding: 27px 0;
    text-align: center;
    @include media {
      padding: 16px 0;
    }
  }
  &__address-item {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    @include media {
      font-size: $medium-size;
      text-align: left;
      margin-bottom: 16px;
    }
  }
  &__social-networks {
    @include flex-row(center);
  }
  &__social-networks-item {
    font-size: 0;
    margin-right: 22px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__social-networks-link {
    font-size: 0;
  }
  &__rights {
    color: $bg-color;
    font-family: $sec-font;
    font-size: $input-label;
    text-align: center;
    @include media {
      text-align: left;
    }
  }
  &__links-tablet-block {
    height: 100%;
  }
  &__tablet-list {
    @include flex-col(space-between, flex-end);
    height: 100%;
  }
  &__social-icon {
    @include svg(27px, $bg-color);
    @include media($screen-tablet-pro) {
      &:hover {
        fill: $primary-color;
      }
    }
  }
  &__contact-icon {
    display: none;
    @include media($screen-tablet-pro) {
      display: inline-block;
      margin-right: 8px;
      @include svg(24px, $bg-color);
    }
  }
}
</style>