<template>
    <div>
       <DashComponent>
            <div slot="slot-pages">
                <header class="title-pages">
                    <p>produtos</p>
                </header>
            </div>
        </DashComponent>
    </div>
</template>
<script>
import DashComponent from '../components/dashboard/DashComponent.vue'

export default {
    name:'ProductsComponent',
    components:{
        DashComponent
    }
}
</script>
