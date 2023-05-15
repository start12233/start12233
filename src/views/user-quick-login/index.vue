<script setup lang="ts">

</script>

<template>
  <div class="user-quick-login">
    <div class="picture">
      <div class="logo">
        logo
      </div>
    </div>
    <div class="user-number">
      12345
    </div>
    <div class="user-switch-account">
      <a href="">切换账号</a>
    </div>
    <div class="login-btn">
      <div class="btn">
        <a href="">本机号码一键登录</a>
      </div>
    </div>
    <div class="btn2">
      <a href="">其他方式登录/注册</a>
    </div>
    <label class="user-checkbox">
      <input type="checkbox">
      <span>我已同意并阅读《天翼账号认证服务条款》和《隐私协议》</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
*{
  margin: 0rem;
  font-size: 32rem;
  font-family: PingFangSC;
}
.user-quick-login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.picture{
  margin-top: 265rem;
  width: 128rem;
  height: 128rem;
  justify-content: center;
  position:relative;
  background-color: antiquewhite;
}
.picture .logo{
  margin: 40rem 32rem;
  position: absolute;
}
.user-number{
  margin-top: 80rem;
  text-align: center;
  align-items: center;
}
.user-switch-account{
  margin-top: 32rem;
  justify-content: center;
}
.user-switch-account a{
  color:black;
  text-decoration: none;
  font-size: 32rem;
}

.login-btn{
  margin-top: 78rem;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 650rem;
  height: 88rem;
  border: none;
  border-radius: 50rem;
  background: rgba(50, 50, 50, 1);

}

.login-btn .btn{
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  width: 304rem;
  height: 48rem;
  position: absolute;
}
.login-btn .btn a{
  color:white;
  text-decoration: none;
  font-size:32rem;
}
 .btn2{
  margin-top:40rem;
  display: flex;
  justify-content: center;
}
 .btn2 a{
  color:rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size:32rem;
}
.user-checkbox{
  margin-top: 622rem;
  font-size: 22rem;
  font-size: 22rem;
}
</style>
