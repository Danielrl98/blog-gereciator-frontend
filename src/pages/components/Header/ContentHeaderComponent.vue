<template>
    <div>
        <div class="content-header" >
                <div class="navbar">
                    <router-link :to="{name: 'home'}"><img src="../dashboard/img/logo.png" alt=""></router-link>
                    <div class="content-links">
                     <router-link :to="{name: 'login'}"><i class="fa fa-sign-out-alt" v-on:click="teste">Sair</i></router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ContentHeader',
    methods: {
        teste(){
           // this.$router.push({name: 'home'})
        }
    }
}
</script>
