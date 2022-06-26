<template>
    <div class="main-dashboard">
        <div class="headComponent">
            <ContentHeader />
        </div>
        <div class="sideComponent">
            <SidebarComponent />
        </div>
        <div class="pages">
            <slot name="slot-pages"></slot>
        </div>
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