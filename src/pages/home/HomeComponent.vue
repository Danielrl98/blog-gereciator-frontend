<template>
    <div>
        <DashComponent>
            <div slot="slot-pages">
                <p>ínicio</p>
            </div>
        </DashComponent>
    </div>
</template>
<script>
 import DashComponent from '../components/dashboard/DashComponent.vue'

export default {
    name: "HomeComponent",
    components: {
        DashComponent 
    }
}
</script>
