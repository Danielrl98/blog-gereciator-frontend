<template >
    <div class="lists row">
        <div class="top col-12 col-md-6">
            <p class="list-title">Clientes   
                <span class="badge-info">
                    <span class="badge badge-light">{{users.length}}</span>
                </span>
            </p>
            <hr>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Cod</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody class="nomes">
                    <tr v-for="user in users" :key="user.id">
                        <td scope="row">{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="top col-12 col-md-6">
            <p class="list-title">Produtos
                  <span class="badge-info">
                    <span class="badge badge-light">{{users.length}}</span>
                </span>
            </p>
            <hr>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Cod</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody class="nomes">
                    <tr v-for="user in users" :key="user.id">
                        <td scope="row">{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListsComponent',
    mounted: function(){
        this.getUsers()
    },
    data(){
        return{
            users: []
        }
    },
    methods:{
        async getUsers(){
           const response =  await this.axios.get('https://jsonplaceholder.typicode.com/users')

           if(response.status == 200){
               this.users = response.data
            }
        }
    }
}
</script>
<style lang="sass" scoped>
.lists
    margin: 2em 0 0 0
    border:1px solid #ccc
    border-radius: 3px 
    margin-right: 1em
    
    .list-title
        font-weight: bold
        font-size: 22px

li
    list-style-type: none

.top
    padding:1em
    
    table
        border:1px solid #ccc
        padding: 2em

    
    .top > th,tr,td
        font-size: 14px

    .badge-info
        background-color: #41b883
        border-radius: 5px
        margin-left: 5px
        padding:2px
</style>
