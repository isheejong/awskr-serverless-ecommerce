<template>
  <div class="home">
    <!--
    <amplify-sign-out v-if="user"></amplify-sign-out>
    -->
<button type="button" placeholder="" class="btn btn-sm" @click="signOut()">로그아웃</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AmplifyStore from '../store';
import { Auth } from 'aws-amplify';


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    user() { 
      return AmplifyStore.state.user
    }
  },
  methods: {
    signOut(){

    Auth.signOut()
        .then(data => {
            console.log(data)
            this.$router.push('/signin')
          }
          )
        .catch(err => console.log(err));
    }
  }
}
</script>
