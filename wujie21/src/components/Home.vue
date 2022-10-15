<script setup>
import { Picker, Cell, CellGroup, Popup, Image, Toast, NoticeBar, Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'
const columns = ['日新楼', '东荣大厦', '匡亚明楼', '李四光楼'];
const urlArr = ['https://wujie21.github.io/rixin', 'https://wujie21.github.io/dr', 'https://wujie21.github.io/kym'];
const result = ref('');
const showPicker = ref(false);

const showInfo = () => {
  const wordList = ['干嘛呀', '不许抢我的鱼', '我们一起学猫叫', '喵喵喵~']
  const n = Math.round(Math.random() * 3)
  Toast(wordList[n])
}

const onConfirm = (value, index) => {
  result.value = value;
  showPicker.value = false;
  window.location.href = urlArr[index]
};
</script>

<template>
  <div class="container">
    <NoticeBar left-icon="volume-o" :scrollable="false" class="Nb">
      <Swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <SwipeItem>
          明月直入，无心可猜。
        </SwipeItem>
        <SwipeItem>
          仙人抚我顶，结发受长生。
        </SwipeItem>
        <SwipeItem>
          今人不见古时月，今月曾经照古人。
        </SwipeItem>
      </Swipe>
    </NoticeBar>
    <Image src="/cat_and_fish.jpg" width="100px" height="100px" round class="img" @click="showInfo"></Image>
    <cell-group inset>
      <cell is-link @click="showPicker = true" title="选择楼宇" icon="location-o" center />
    </cell-group>
    <popup v-model:show="showPicker" round position="bottom">
      <picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </popup>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  /* border: 1px solid red;
  width: 100%; */
}

.img {
  margin-top: 50px;
  margin-bottom: 30px;
}

.Nb {
  width: 100%;
  border-radius: 10px;
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>