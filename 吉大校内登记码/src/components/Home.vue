<script setup>
import { ref, inject } from 'vue'
import { Toast, NoticeBar, Swipe, SwipeItem, Image as VantImage, Loading, CellGroup, Cell, Popup, Picker } from 'vant'
defineProps(['selected'])
const showInfo = () => {
  const wordsArr = ['人并非生来就伟大，而是越活越伟大',
    '世界上本没有路，有了腿便有了路',
    '成为天才是不够的，改变人们的想法更需要勇气',
    '过得好的人，更容易成为好人',
    '孤独并不可怕，可怕的是恐惧孤独',
    '有些爱，也许从未说出口，才愈加显得珍贵',
    '当你最认为困难的时候，其实就是你最接近成功的时候',
    '不疯魔，不成活']
  const n = Math.floor(Math.random() * wordsArr.length)
  Toast(wordsArr[n])
}

const columns = [
  {
    text: '中心校区',
    children: [
      {
        text: '日新楼',
        // children: [{ text: '西湖区' }, { text: '余杭区' }],
      },
      {
        text: '匡亚明楼',
        // children: [{ text: '鹿城区' }, { text: '瓯海区' }],
      },
      {
        text: '东荣大厦'
      }
    ],
  },
  {
    text: '和平校区',
    children: [
      {
        text: '吴捷楼',
        // children: [{ text: '西湖区' }, { text: '余杭区' }],
      },
      {
        text: '吴捷大厦',
        // children: [{ text: '鹿城区' }, { text: '瓯海区' }],
      },
      {
        text: '吴捷公寓'
      }
    ],
  },
];
const showPop = ref(false)

const selected = inject('selected',)
const onConfirm = (e) => {
  console.log(e)
}
</script>

<template>
  <div class="container">
    <notice-bar left-icon="volume-o" :scrollable="false" class="notice" mode="closeable">
      <swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <swipe-item>本程序由中心校区某帅哥出品。</swipe-item>
        <swipe-item>源代码托管于Github。</swipe-item>
        <swipe-item>欢迎各校区朋友增加楼宇。</swipe-item>
      </swipe>
    </notice-bar>
    <VantImage src="/github.svg" :round="true" class="avar" @click="showInfo">
      <template v-slot:loading>
        <loading type="spinner" size="20" />
      </template>
      <template v-slot:error>加载失败</template>
    </VantImage>
    <CellGroup inset class="cellgroup">
      <Cell title="选择楼宇" icon="location-o" is-link @click="showPop=true"></Cell>
    </CellGroup>
    <Popup v-model:show="showPop" position="bottom" round>
      <Picker :columns="columns" @cancel="showPop=false" @confirm="onConfirm">
      </Picker>
    </Popup>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 100vh;
}

.notice {
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 10px;
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.avar {
  width: 16rem;
  height: 16rem;
  margin-top: 2rem;
}

.cellgroup {
  margin-top: 1.6rem;
}
</style>
