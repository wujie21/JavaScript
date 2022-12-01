<script setup>

</script>

<template>
  <form method="post" action="http://localhost:8080/">
    <input type="text" required="required" id="use_name" placeholder="请输入用户名" name="user_name">
    <input type="password" required="required" id="pwd" placeholder="请输入密码" name="user_pwd">
    <button type="submit" class="submit_bnt">登陆</button>
  </form>
</template>

<style scoped>

</style>
