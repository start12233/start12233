<script setup lang="ts">

// pageRedirect(RoutePath.USER_LOGIN);

</script>

<template>
  <div class="user-center">
    <div class="container">
      <div class="user-box">
        <div
          class="circle-avatar"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        />
        <div
          class="username"
        >
          我的名称
          <div class="tag">
            标签
          </div>
        </div>
        <div class="self-written">
          个性签名
        </div>
      </div>
      <div class="user-edit-box">
        编辑
      </div>
    </div>
    <div class="user-info-list">
      <div class="user-other-info-nums">
        <div
          id="user-info-nums"
          class="user-followed-nums"
        >
          3921
        </div>
        <div
          id="user-info-nums"
          class="user-followers-num"
        >
          867
        </div>
        <div
          id="user-info-nums"
          class="liked-and-collected-num"
        >
          62
        </div>
      </div>
      <div class="user-other-info-text">
        <div
          id="user-info-text"
          class="user-followed-text"
        >
          关注
        </div>
        <div
          id="user-info-text"
          class="user-followers-text"
        >
          粉丝
        </div>
        <div
          id="user-info-text"
          class="collected-and-like-text"
        >
          获赞与收藏
        </div>
      </div>
    </div>
    <div class="menu-list-main">
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          我的动态
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          我的圈子
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          我的收藏
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          消息中心
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          积分中心
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          反馈帮助
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
      <div class="menu-list-activity">
        <div
          class="menu-list-icon"
        />
        <div class="menu-list-text">
          我的设置
        </div>
        <div class="menu-list-arrow">
          &#8594;
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container{
  display: flex;
  width: 100%;
  height: 20%;
  position: relative;
}

.user-box {
  /* Ellipse 7 */
  position: absolute;
  width: 128rem;
  height: 128rem;
  flex-direction: column;
  margin:auto;
}

.circle-avatar{
  width: 128rem;
  height: 128rem;
  border-radius: 50%;
  background-color: #ccc;
  margin-left: 10em;
  margin-top: 30rem;
  background-size: cover;
  background-position: center;
}

.username {
  /* 我的昵称 */
  display: flex;
  width: 160rem;
  height: 56rem;
  min-width: 160rem;
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40rem;
  line-height: 56rem;
  /* identical to box height, or 140% */

  /* token/text/title 88% */
  color: rgba(0, 0, 0, 0.88);

  /* Inside auto layout */
  float: left;
  position: relative;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: -3em;
  margin-left: 4em;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tag {
  /* 标签 */
  width: 40rem;
  height: 24rem;

  /* cn/caption2-sem */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20rem;
  line-height: 24rem;
  /* identical to box height, or 120% */

  /* token/state/alert */
  color: #FFA338;

  /* Inside auto layout */
  position: absolute;
  left: calc(100% + 10rem);
  top: 50%; /* 垂直居中对齐 */
  transform: translateY(-50%);
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 4rem;
  border: 2rem solid #FFA338;
  padding: 4rem;
}

.self-written {
  /* 个性签名 */

  width: 104rem;
  height: 42rem;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26rem;
  line-height: 42rem;
  /* identical to box height, or 162% */

  /* token/text/auxiliary 40% */
  color: rgba(0, 0, 0, 0.4);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: 6.5em;
  margin-top: -2em;
}

.user-edit-box {
  /* 编辑 */

  position: absolute;
  width: 40rem;
  height: 24rem;
  left: 676rem;
  top: 236rem;

  /* cn/caption2-reg */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 24rem;
  /* identical to box height, or 120% */
  text-align: center;
  border-radius: 4rem;
  border: 4rem solid;
  color: #000000;
  margin-top: -9em;

}

#user-info-nums {
  /* 3921 */

  width: 81rem;
  height: 52rem;

  /* 英文和数字/副标题/Regular */
  font-family: 'Helvetica',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36rem;
  line-height: 52rem;
  /* identical to box height, or 144% */
  display: flex;
  align-items: center;
  text-align: center;

  /* 文字&图标色/Font Gy1 80% */
  color: rgba(0, 0, 0, 0.8);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

#user-info-text {

  /* 中文/说明文字/Regular */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24rem;
  line-height: 40rem;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  text-align: center;

  /* 文字&图标色/Font Gy3 40% */
  color: rgba(0, 0, 0, 0.4);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

}

.user-info-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  margin-top: 200em;
}

.user-other-info-nums {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8rem;
}

.user-other-info-text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.user-followed-text {
  /* 关注 */

  width: 48rem;
  height: 40rem;

  /* 中文/说明文字/Regular */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24rem;
  line-height: 40rem;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  text-align: center;

  /* 文字&图标色/Font Gy3 40% */
  color: rgba(0, 0, 0, 0.4);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

}

.user-followers-text {
  /* 关注 */

  width: 48rem;
  height: 40rem;

  /* 中文/说明文字/Regular */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24rem;
  line-height: 40rem;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  text-align: center;

  /* 文字&图标色/Font Gy3 40% */
  color: rgba(0, 0, 0, 0.4);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

}

.collected-and-like-text {
  /* 获赞与收藏 */
  width: 120rem;
  height: 40rem;

  /* 中文/说明文字/Regular */
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24rem;
  line-height: 40rem;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  text-align: center;

  /* 文字&图标色/Font Gy3 40% */
  color: rgba(0, 0, 0, 0.4);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  white-space: nowrap;
}

.menu-list-activity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;
  border: 1rem solid #ccc;
}

.menu-list-icon {
  width: 56rem;
  height: 56rem;
  background: #D9D9D9;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.menu-list-text {
  flex: 1;
  margin-left: 10rem;
}

.menu-list-arrow {
  font-size: 24rem;
}

</style>
