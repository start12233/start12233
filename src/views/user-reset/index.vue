<template>
  <div class="reset-layout">
    <div class="container">
      <form
        ref="resetFrom"
        action=""
        method="post"
        @submit.prevent="submitForm"
      >
        <template
          v-for="item in pageStructure"
          :key="item.id"
        >
          <div class="area">
            <div :class="item.class">
              <input
                v-model.trim.lazy="item.data"
                required
                :class="item.input.class"
                :type="item.input.type"
                :placeholder="item.input.placeholder"
              >
              <div
                v-if="item.button.hasButton"
                class="reset-button"
                @click="item.button.method"
              >
                {{ item.button.text }}
              </div>
            </div>
            <div
              v-show="item.tip.showTip"
              class="tips"
            >
              {{ item.tip.text }}
            </div>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, reactive } from 'vue';
import type { PageStructure } from './interface';

// const codeRegex = /^[0-9a-zA-Z]{4}$/;
const pageStructure = reactive<PageStructure>({
  code: {
    id: 'code',
    class: 'input-item',
    data: '',
    input: {
      class: 'reset-input',
      type: 'text',
      placeholder: '请输入验证码',
    },
    button: {
      hasButton: true,
      text: '发送验证码',
      method: sendCode,
    },
    tip: {
      showTip: false,
      text: '',
    },
  },
  newPwd: {
    id: 'newPwd',
    class: 'input-item',
    data: '',
    input: {
      class: 'reset-input',
      type: 'password',
      placeholder: '请输入新密码',
    },
    button: {
      hasButton: false,
      text: '',
      method: () => {},
    },
    tip: {
      showTip: false,
      text: '',
    },
  },
  surePwd: {
    id: 'surePwd',
    class: 'input-item',
    data: '',
    input: {
      class: 'reset-input',
      type: 'password',
      placeholder: '请确认新密码',
    },
    button: {
      hasButton: false,
      text: '',
      method: () => {},
    },
    tip: {
      showTip: false,
      text: '',
    },
  },
  submitInput: {
    id: 'submitInput',
    class: 'btn',
    data: '继续',
    input: {
      class: 'submit-btn',
      type: 'submit',
      placeholder: '',
    },
    button: {
      hasButton: false,
      text: '',
      method: () => {},
    },
    tip: {
      showTip: false,
      text: '',
    },
  },
});

function codeRegexCheck(data: string) {
  console.log(data);
}

function sendCode() {
  console.log('发送验证码');
}

/**
 * 新密码与确认密码匹配
 * @param data 密码数据
 * @param key 属于哪种密码
 */
function pwdCompare(data: string, key: string) {
  if (pageStructure.newPwd.data !== data) {
    pageStructure[key].tip.showTip = true;
    pageStructure[key].tip.text = '确认密码与新密码不一致';
  } else {
    pageStructure[key].tip.showTip = false;
    pageStructure[key].tip.text = '';
  }
}

function submitForm() {
  console.log();
}

onMounted(() => {
  for (const key in pageStructure) {
    watch(
      () => pageStructure[key].data,
      (data) => {
        if (pageStructure[key].id === 'code') {
          codeRegexCheck(data);
        } else if (key === 'surePwd') {
          pwdCompare(data, key);
        }
      },
    );
  }
});
</script>

<style scoped lang="scss">
.reset-layout {
  position: absolute;
  height: 100%;
  top: 207.5rem;
  padding: 0 50rem;
  .container {
    .area {
      display: flex;
      flex-direction: column;
      margin-bottom: 48rem;
      .input-item {
        display: flex;
        align-items: flex-start;
        gap: 16rem;
        width: 650rem;
        height: 66rem;
        border-bottom: 1px solid #000000;
      }
      .tips {
        margin-top: 24rem;
        height: 40rem;
        font-size: 24rem;
      }
    }
  }
}
.reset-input {
  flex-grow: 1;
  height: 50rem;
  color: #000000;
  font-size: 34rem;
}
.reset-button {
  height: 50rem;
  border: 1px solid #000000;
  color: #000000;
  font-size: 34rem;
}
.btn {
  width: 650rem;
  height: 88rem;
  padding: 20rem 64rem 20rem 64rem;
  border-radius: 44rem;
  overflow: hidden;
}
.submit-btn {
  height: 100%;
  width: 100%;
  font-size: 32rem;
  background-color: #000000;
}
input {
  outline: 0;
  border: 0;
  background-color: #fff;
}
button {
  background-color: #ffffff;
  color: #000000;
}
</style>
