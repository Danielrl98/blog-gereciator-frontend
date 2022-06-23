<template>
    <div>
        <div class="content-header" v-on:click="teste">
                <div class="navbar">
                    <a href="/"><img src="../dashboard/img/logo.png" alt=""></a>
                    <div class="content-links">
                        <i class="fa fa-sign-out-alt"><router-link to="/home">Sair</router-link></i>
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
            this.$router.push({name: 'login'})
        }
    }
}
</script>
