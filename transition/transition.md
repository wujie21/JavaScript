transition 用于设置元素属性的过渡效果
语法：transition:transition-property|transition-duration|transition-timing-function|transition-delay

示例：
/_ 原样式：transition 写在其中 _/
.dome {
width: 20rem;
height: 20rem;
border: 0.2rem solid silver;
transition: border-color 0.5s ease-in 0.1s,
background-color 0.5s ease-in 0.1s, color 0.5s ease-in 0.1s;
}

/_ 目标样式：参与过渡效果的属性。这是 transitionend 事件监听的属性。 _/
.dome:hover {
border-color: rebeccapurple;
background-color: wheat;
color: yellow;
}

transitionend 事件：属性过渡完成事件
<script>
      let ele = document.querySelector("div.dome");
      ele.addEventListener("transitionend", (e)=>{console.log(e.propertyName)});
</script>
