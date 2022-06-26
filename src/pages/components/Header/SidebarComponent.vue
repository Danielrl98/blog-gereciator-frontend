<template>
    
        <div class="sidebar" id="sidebar" v-on:mouseenter="sideBarEntrar" v-on:mouseleave="sideBarSair">
            <div id="sidebar-items" style="transition:0.1s" >
                <div class="side-top" id="side-top">
                    <div class="avatar">
                        <span><i class="fa fa-user"></i></span>
                    </div>
                    <div class="info">
                        <p class="info-nome">Daniel</p>
                        <p class="status"><i class="fa-solid fa-earth-asia"></i>online</p>
                    </div>
                </div>
                <div class="menu">
                <ul>
                        <li><div><i class="fa fa-home"></i></div><router-link :to="{name: 'home'}">ínicio</router-link></li>
                        <li><div><i class="fa fa-box"></i></div> <router-link :to="{name: 'home'}">Vendas</router-link></li>
                        <li><div><i class="fa fa-store"></i></div> <router-link :to="{name: 'products'}">Produtos</router-link></li>
                        <li><div><i class="fa fa-chart-bar"></i></div><router-link :to="{name: 'home'}">Relatórios</router-link></li>
                    </ul>
                
                </div>
        </div>
        </div> 
  
</template>
<script>

     
export default {
    name: 'SidebarComponent',
    data(){
        return{
            

            sidebarItemsMostrar: ()=>{
                const sideBarItems = document.querySelector('#sidebar-items')
                sideBarItems.style.display = "block"
            
            },
            sidebarItemsEsconder: ()=>{
                const sideBarItems = document.querySelector('#sidebar-items')
                sideBarItems.style.display = "none"
                
            }

        }
    },
    methods:{
        sideBarEntrar(){

             const sideBar = document.querySelector('#sidebar')
             sideBar.style.width = "250px"
             this.sidebarItemsMostrar()  
        },
        sideBarSair(){
            
              const sideBar = document.querySelector('#sidebar')
              sideBar.style.width = "50px"
              this.sidebarItemsEsconder()
        }
    }
         
}

</script>