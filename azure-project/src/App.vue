<template>
  <div id="app" class="h-100 rounded">      
    <div class="container-fluid h-100 rounded">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center">
           <img alt="Vue logo" src="./assets/perro.png" width="80">
           <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-11 rounded px-3 py-4 shadow bg-white text-left">
            <DogsForm />
          </div>
        </div>
        </div>
       <div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import DogsForm from './components/DogsForm'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    DogsForm
  },
  data(){
    return {
      todos: null
    }
  },
  mounted(){
    console.log('Hola mundo desde mounted')
    this.getTodos();
  },
  methods: {
    getTodos(){
      console.log('Codigo de get todos')
      axios.get('https://apirest-dogs.azurewebsites.net/api/dogs').then(response => {
        this.getTodos = response.data
        console.log(this.getTodos)
      })
      .catch(e => console.log(e))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-bg {
  background: #417dc1;
}
</style>
