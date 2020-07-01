<template>
    <div class="notification-container">
        <NotificationBar v-for="item in notifications" :key="item.id"
        :notification="item"></NotificationBar>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NotificationBar from '@/components/NotificationBar.vue'

    export default {
        components: {NotificationBar},
        computed : mapState('notifications', ['notifications'])
        
    }
</script>

<style scoped>
.notification-container {
      position: fixed;
      bottom: 0;
    }
</style>