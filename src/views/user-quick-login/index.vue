<script setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="user-logo-information">
      <div class="logo">
        logo
      </div>
    </div>
    <div class="user-number">
      1234567
    </div>
    <div class="user-switch-account">
      <a>切换账号</a>
    </div>
  </div>
  <div class="user-login">
    <div class="number-login">
      <div class="btn">
        手机号码一键登录
      </div>
    </div>
    <div class="switch-login-ways">
      其他方式登录\注册
    </div>
    <div class="bottom">
      <input type="checkbox">我已阅读协议并同意《天翼账号认证服务条款》和《隐私协议》
    </div>
  </div>
</template>
<style scoped lang="scss">
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
  .user-logo-information{
      margin-top: 80rem;
      width: 128rem;
      height: 128rem;
      background-color: antiquewhite;
    .logo{
      line-height: 128rem;
      width: 64rem;
      height: 48rem;
    }
  }
  .user-number{
      font-size: 48rem;
      margin-top: 80rem;
      width: 272rem;
      height: 64rem;
      text-align: center;
      line-height: 64rem;
    }
    .user-switch-account{
      font-size: 32rem;
      margin-top: 32rem;
    }
}
.user-login{
    margin-top: 78rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  .number-login{
    width: 650rem;
    height: 88rem;
    background-color: rgba(50, 50, 50, 1);
    border-radius: 50rem;
    .btn{
      margin-left: 25%;
      height: 48rem;
      line-height: 88rem;
      font-size: 32rem;
      color: white;
    }
  }
  .switch-login-ways{
    font-size: 32rem;
    height: 40rem;
    color:  rgba(0, 0, 0, 0.2);
  }
  .bottom{
    flex:1 1 aoto;
    .checkbox{
    }
  }

}
</style>
