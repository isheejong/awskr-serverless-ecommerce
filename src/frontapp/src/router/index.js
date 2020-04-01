import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import { /*components,*/ AmplifyEventBus } from 'aws-amplify-vue';
import* as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import AmplifyStore from '../store';


Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);

let user;
/*
getUser().then((user, error) => {
  console.log(error)
if (user) {0  
    router.push({path: '/'})
}
})
*/

AmplifyEventBus.$on('authState', async (state) => {
if (state === 'signedOut'){
    user = null;
    AmplifyStore.commit('setUser', null);
    router.push({path: '/signin'})
} else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
}
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data);
      return data;
    } 
  }).catch((e) => {
    console.log("e", e);
    AmplifyStore.commit('setUser', null);
    return null
  });
}

const router = new Router({
routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true}
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { requiresAuth: false}
    
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { requiresAuth: false}
    
  }
]
});

router.beforeResolve(async (to, from, next) => {
if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
    return next({
        path: '/signin',
        query: {
        redirect: to.fullPath,
        }
    });
    }
    return next()
}
return next()
})

export default router