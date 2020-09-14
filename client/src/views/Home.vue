<template>
  <div class="home">
    <h2>로그인</h2>
    <ul>
      <li><input type="text"></li>
      <li><input type="text"></li>
      <li><button>로그인</button></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style lang="scss">
div.home{
  max-width: 414px;
  margin: 0 auto;
  ul{
    padding: 0;
    li{
      list-style-type: none;
      input,button{
        box-sizing: border-box;
        margin: 10px 0;
        height: 40px;
        border: 1px solid #d0d0d0;
        width: 100%;
        outline: none;
      }
      button{
        cursor: pointer;
        background: mediumturquoise;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

}
</style>
