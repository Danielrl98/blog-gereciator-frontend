<template>
  <div id="app">
    <div>
      <DashComponent/>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

 import DashComponent from './pages/components/dashboard/DashComponent.vue'

export default 
  {
    name: 'App',
    components: {
      DashComponent
    }
    
 
  }
  
</script>
<style lang="sass" src="./sass/_main.sass"></style>

