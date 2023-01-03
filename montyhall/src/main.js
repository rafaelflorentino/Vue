import Vue from 'vue'
import App from './App'

new Vue({
  render : h => h(App)
  /*el: '#app', // no lugar de .$mount("#app")
  render(createElement){
    return createElement(App)
  } // no lugar de  render : h => h(App)*/
}).$mount("#app")
