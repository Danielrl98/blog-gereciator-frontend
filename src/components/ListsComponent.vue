<template >
    <div class="lists">
        <div class="top">
            <p class="list-title">Clientes</p>
            <hr>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Cod</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody class="nomes">
                    <tr v-for="user in users" :key="user.id">
                        <td scope="row">{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.phone}}</td>
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
    margin: 2em 1em 0 0
    padding: 3em
    border:1px solid #ccc
    border-radius: 3px 
    .list-title
        font-weight: bold
        font-size: 22px 
li
    list-style-type: none
</style>
