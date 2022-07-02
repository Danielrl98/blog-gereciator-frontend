<template>
    <div>
        <DashComponent>
            <div slot="slot-pages">
                <div class="grid-cards">
                    <div>
                        <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'" :qtd="'9570'"/>
                    </div>   
                    <div>
                        <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="'6570'"/>
                    </div> 
                    <div>
                        <CardsComponent :type="'Vendas'" :percentage="'50%'" :icon="'fa-store'" :qtd="'19570'"/>
                    </div> 
                    <div>
                        <CardsComponent :type="'Relatórios'" :percentage="'20%'" :icon="'fa-bar'" :qtd="'119570'"/>
                    </div>               
                </div>
                <div>
                    <ListsComponent />
                </div>
            </div>
        </DashComponent>
    </div>
</template>
<script>
 import DashComponent from '../components/dashboard/DashComponent.vue'
 import CardsComponent from '@/components/CardsComponent.vue'
 import ListsComponent from '@/components/ListsComponent.vue'

export default {
    name: "HomeComponent",
    components: {
        DashComponent,
        CardsComponent,
        ListsComponent
    }
}
</script>
