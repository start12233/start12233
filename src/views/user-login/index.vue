<script setup lang="ts">
// import { ref } from 'vue';

// const mode = ref(true);

</script>

<template>
  <div>
    <div class="item item-self">
      <input
        class="item-input"
        type="number"
      >
    </div>

    <div class="item item-self1">
      <input
        class="item-input"
        type="password"
      >
      <div class="item-code">
        发送
      </div>
    </div>

    <div class="tip">
      <span>验证登录</span>
      <span>忘记密码</span>
    </div>

    <div class="sure">
      登录
    </div>
  </div>
</template>

<style scoped lang="scss">
.item{
  margin: 0 auto;
  width: 650rem;
  height: 66rem;
  border-bottom: 1rem solid #000000;

  .item-input{
    font-family: PingFang SC;
    font-size: 34rem;
    font-weight: 400;

    // line-height: 66rem;
    border: none;
    padding: 0px;
    outline: none;
  }

  .item-code{
    float: right;

  }
}

.item-self{
  margin-top: 200rem;
}

.item-self1{
  margin-top:48rem;
}

.tip{
  display: flex;
  margin: 0 auto;
  margin-top: 24rem;
  justify-content: space-between;
  width: 650rem;

  font-family: PingFang SC;
  font-size: 24rem;
  font-weight: 400;
  line-height: 40rem;
}

.sure{
  margin: 0 auto;
  margin-top: 48rem;
  height: 88rem;
  width: 650rem;
  background: #323232;
  border-radius: 100rem;

  font-family: 'PingFang SC';
  font-weight: 400;
  text-align: center;
  color: #FFFFFF;
  font-size: 32rem;
  line-height: 88rem;

}
</style>
