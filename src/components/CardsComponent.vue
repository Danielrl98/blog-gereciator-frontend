<template>
    <div class="cp-cards">
        <div class="my-cards">
            <div class="content">
                <h3 class="my-cards-name">{{ type }}</h3>
                <p class="percentage"><i class="fa fa-arrow-up"></i> {{ percentage }}</p>
            </div>
            <div class="cp-cards-footer">
                <i :class="['fa ico', icon]"></i>
                <p class="qtd">{{ qtd }}</p>
            </div>            
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardsComponent',
    props: {
        type: String,
        percentage: String,
        icon: String,
        qtd: String

    }
}
</script>
<style lang="sass" src="@/sass/_main.sass"></style>
