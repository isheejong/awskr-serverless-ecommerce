<template>
     
   <div id="app">
    <div class="container">
      <div class="col-md-10 offset-md-3">
        <h1 class="text-center">로그인</h1>
        <input type="text" placeholder="username" class="form-control mb-4" v-model="username">
        <input type="password" placeholder="password" class="form-control mb-4" v-model="password">
       
       <div class="text-right">
          <button type="button" placeholder="" class="btn btn-sm" @click="login()">로그인</button>
          <button type="button" class="btn btn-sm" @click="signUp()">회원가입</button>
        </div>
  </div>
    </div>
  </div>

</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'Home',
  data() {
      return {
          username: '',
          password: ''
      }
  },
  methods: {
    login(){
        console.log('로그인 시도')
        Auth.signIn(this.username, this.password).then(res => {
          console.log('authentication res', res)
          this.$router.push('/');
        }).catch(e => {
            console.log("error", e);
        })
    },
    signUp() {
        this.$router.push('/signup')
    }
  },
  components: {
  },

}
</script>
