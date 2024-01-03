<template>
  <div id="bg" :style="{backgroundImage: 'url(' + bgImage + ')'}">

    <div id="login-block">

      <span id="login-block-title">登录</span>

      <n-form label-width="auto" 
        label-placement="left" 
        label-align="right" 
        :model="loginFormData"
        :rules="loginRules">

        <n-form-item path="username" label="用户名">
          <n-input 
            round 
            clearable 
            type="text" 
            v-model:value="loginFormData.username" 
            placeholder="请输入用户名" />
        </n-form-item>

        <n-form-item path="password" label="密码">
          <n-input 
            round 
            clearable 
            show-password-on="mousedown" 
            type="password" 
            v-model:value="loginFormData.password" 
            placeholder="请输入密码" />
        </n-form-item>

        <n-form-item path="captcha" label="验证码">
          <n-image
            preview-disabled
            width="60"
            height="35"
            src="@assets/captcha.jpg"/>
          <n-input 
            round 
            clearable 
            type="text" 
            v-model:value="loginFormData.captcha" 
            placeholder="请输入验证码" />
        </n-form-item>

        <n-form-item id="login-form-item-btn">
          <n-button strong secondary round color="#2c275f">
            <template #icon>
              <n-icon>
                <login-icon />
              </n-icon>
            </template>
            登录
          </n-button>
        </n-form-item>

      </n-form>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {FormInst, FormItemInst, FormRules, FormItemRule} from 'naive-ui';
import { MdLogIn as LoginIcon } from '@vicons/ionicons4'

const bgImage : string = '@assets/login-background.jpg'
const USERNAME_MAX_LENGTH : number = 20
const PASSWORD_MAX_LENGTH : number = 50

interface LoginFormData {
  username: string | null,
  password: string | null,
  captcha: string | null
}

const loginFormData : LoginFormData = reactive({
  username: null,
  password: null,
  captcha: null,
})

const loginRules : FormRules = {
  username: [
    {
      message: '用户名不能超过' + USERNAME_MAX_LENGTH + '个字符',
      required: true,
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        if(value.length > USERNAME_MAX_LENGTH) {
          return false;
        } else {
          return true;
        }
      }
    }, {
      message: '用户名不能存在特殊字符',
      required: true,
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        let regex = /^[a-zA-Z0-9]+$/;
        return regex.test(value);
      }
    }
  ],
  password: [
    {
      message: '密码不能超过' + PASSWORD_MAX_LENGTH + '个字符',
      required: true,
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        if(value.length > PASSWORD_MAX_LENGTH) {
          return false;
        } else {
          return true;
        }
      }
    }
  ],
  captcha: []
}


</script>

<style lang="scss" scoped>
@import 'font';
@import 'layout';

#bg {
  @include default-font;
  @include default-layout;
  position: relative;
}

#login-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include default-flex-layout;

  background-color: black;
  opacity: 0.3;
}

#login-form-item-btn {
  @include default-flex-layout;
}

</style>