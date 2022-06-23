<template>
    <div class="main-dashboard">
        <ContentHeader />
        <SidebarComponent />
    </div>
</template>
<script>

import ContentHeader from '../Header/ContentHeaderComponent.vue'
import SidebarComponent from '../Header/SidebarComponent.vue'

export default {
    name: 'DashComponent',
    components: {
        ContentHeader,
        SidebarComponent
    }
}
</script>
<style lang="sass" src="./sass/_main.sass"></style>