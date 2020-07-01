<template>
<div>
    <div>
        <h1>Events of {{user.user.name}}</h1>
        <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
        <BaseIcon/>
    </div>
    <div>
        <template v-if="page!=1">
            <router-link :to="{name:'event-list', query:{ page:page-1}}">Prev Page | </router-link>
        </template>
        <template v-if="page < totalPages">
         <router-link :to="{name:'event-list', query:{ page:page+1}}">Next Page </router-link>
        </template>
        
    </div>

</div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import {mapState} from 'vuex'

export default {
    components: {
    EventCard
    },

    created(){
        this.$store.dispatch('fetchEvents', {perPage: 3, pageNo: this.page})
    },

    computed:{
        page(){
            return parseInt(this.$route.query.page) || 1;
        },
        totalPages(){
            return Math.ceil(this.event.totalEvents /3);
        },

        ...mapState(['event', 'user'])
    } 
}
</script>

<style>

</style>