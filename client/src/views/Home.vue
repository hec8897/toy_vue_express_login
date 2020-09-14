<template>
  <div class="home">
    <h2>로그인</h2>
    <ul>
      <li><input type="text" placeholder="아이디를 입력하세요"></li>
      <li><input type="password" placeholder="패스워드를 입력하세요"></li>
      <li><button>로그인</button></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      userId:"",
      userPassword:""
    }
  }
}
</script>

<style lang="scss">
div.home{
  max-width: 414px;
  margin: 100px auto;
  ul{
    padding: 0;
    li{
      list-style-type: none;
      input,button{
        box-sizing: border-box;
        margin: 10px 0;
        padding: 0 5px;
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
