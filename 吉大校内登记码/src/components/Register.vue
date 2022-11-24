<script setup>
import moment from 'moment'
</script>

<template>
  <div class="container">
    <div class="nav">
      <img src="/nav.png" class="image" />
    </div>
    <table class="tab">
      <tr>
        <td class="title">申请时间</td>
        <td class="content" id="date_time">{{moment().format('YYYY-MM-DD HH:mm:ss')}}</td>
      </tr>
      <tr>
        <td class="title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
        <!-- 在此处修改你的姓名 -->
        <td class="content">吴捷</td>
      </tr>
      <tr>
        <td class="title" style="padding-top:10px;padding-bottom:10px;">学号/工作<br />证号/手机号</td>
        <!-- 在此处修改你的学号 -->
        <td class="content">2021252060</td>
      </tr>
      <tr>
        <td class="title">学院/单位</td>
        <!-- 在此处修改你的学院号 -->
        <td class="content">商学院</td>
      </tr>
      <tr>
        <td class="title">楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宇</td>
        <!-- 在此处修改你的楼宇 -->
        <td class="content">中心校区-日新楼</td>
      </tr>
    </table>
    <div class="footer">
      <img src="/footer.png" class="image">
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.nav {
  margin-bottom: 5.5rem;
}

.image {
  width: 40rem;
}

.tab {
  width: 37rem;
  font-size: 1.7rem;
  border-collapse: collapse;
}

.tab td {
  border-bottom: 0.1rem solid #f1f1f1;
  height: 4.1rem;
}

.tab .title {
  width: 10rem;
}

.tab .content {
  padding-left: 2.5rem;
}

.footer {
  margin-top: 35rem;
}
</style>
