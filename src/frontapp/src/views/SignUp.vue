<template>
     
   <div id="app">
    <div class="container">
      <div class="col-md-10 offset-md-3">
        <h1 class="text-center">회원가입</h1>

        <input type="checkbox" placeholder="약관동의1" class="mb-1" v-model="agreement1">동의합니다.

        <input type="text" placeholder="아이디" class="form-control mb-4" v-model="username">
        <input type="password" placeholder="비밀번호" class="form-control mb-4" v-model="password">
        
        <input type="text" placeholder="이름" class="form-control mb-4" v-model="name">
        <input type="text" placeholder="전화번호" class="form-control mb-4" v-model="phonenumber">
        <input type="text" placeholder="이메일주소" class="form-control mb-4" v-model="email">
       
       <div class="text-right">
          <button type="button" placeholder="" class="btn btn-sm" @click="sendVerificationCode()">번호인증</button>
          <button type="button" class="btn btn-sm" @click="signUp()">가입완료</button>
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
          password: '',
          name: '',
          email : '',
          phonenumber: '',
          agreement1:'',
      }
  },
  methods: {
    signUp() {
        Auth.signUp({
            username: this.username,
            password: this.password,
            attributes: {
                name: this.name, 
                email: this.email, 
                phone_number: this.phonenumber,   // optional - E.164 number convention
            },
            validationData: []  //optional
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    },
    sendVerificationCode(){
        Auth.verifyCurrentUserAttribute('+8201050043553')
        .then(() => {
             console.log('a verification code is sent');
        }).catch((e) => {
             console.log('failed with error', e);
        });
    }
  },
  components: {
  },

}
</script>
