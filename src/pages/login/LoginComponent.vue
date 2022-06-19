<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header class="content-title">
                    <h1>Faça seu Login</h1>
                </header>
                <div class="form">
                        <div class="field">
                            <div class="content-label">
                                <label for="Email">Email</label>
                            </div>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-primary" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                         <div class="field">
                             <div class="content-label">
                                <label for="Password">Senha</label>
                            </div>
                            <p class="control has-icons-left">
                                <input class="input is-primary" type="password" placeholder="Password">
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <button class="button is-primary" @click.prevent="login">Entrar</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<!---javascript-->
<script>
export default {
    name: "LoginComponent",
    data(){
        return{
            
        }
    },
    methods: {
        login(){
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style lang="sass" src="./sass/_main.sass" scoped>

</style>