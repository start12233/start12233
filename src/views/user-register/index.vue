<script setup lang="ts">
import { ref } from 'vue';

const phone = ref<String>();

const code = ref<String>();

const password = ref<String>();

</script>

<template>
  <div class="register-cotainer">
    <input
      v-model.trim.lazy="phone"
      type="text"
      placeholder="输入手机号"
      class="input-phone input"
      oninput="value=value.replace(/[^\d]/g,'')"
    >

    <div class="input-code">
      <input
        v-model.lazy.trim="code"
        type="text"
        placeholder="输入验证码"
        class="input"
      >
      <button>
        发送验证码
      </button>
    </div>
    <p class="tip-word">
      验证码已发送到您的手机{{ phone }}
    </p>
    <div class="input-password input-code">
      <input
        v-model.lazy.trim="password"
        type="text"
        placeholder="输入密码"
        class="input"
      >
      <button>
        眼睛
      </button>
    </div>
    <button class="success-button">
      注册并登录
    </button>
    <div class="agree-agreement">
      <input type="checkbox">我已阅读并同意《注册协议》
    </div>
  </div>
</template>

<style scoped lang="scss">
.register-cotainer{
 display: flex;
 flex-direction: column;
 margin-top: 200rem;
 padding: 0 50rem;
 width: 100%;
 box-sizing: border-box;
font-family: 'PingFang SC';
 .input{
 font-style: normal;
 font-size: 34rem;
 line-height: 50rem;
 color: rgba(0, 0, 0, 0.4);
 border: none ;
  padding-bottom: 16rem;
  color: #000;
 }
 input:focus {
  outline: none;
}

 .input-phone{
 border-bottom: 1rem solid #000;
 }

 .input-code{
  display: flex;
margin: 48rem 0 0;

border-bottom: 1rem solid #000;
input{
 flex:1
 }
  button{
   border: none;
  background: none ;
  }
 }

 .tip-word{
 font-size: 24rem;
 line-height: 40rem;
 }

 .input-password{
 margin: 48rem 0;
 }

 .success-button{
   width: 650rem;
   height: 88rem;
   background: rgba(50, 50, 50, 0.6);
   color: #FFFFFF;
   border: none;
   border-radius: 100rem;
 }

 .agree-agreement{
  text-align: center;
  margin-top: 36rem;
   font-size: 22rem;
   line-height: 48rem;
  input[type='checkbox']{
            width:32rem;
            height:32rem;
            vertical-align:middle;
        }
 }

}

</style>
