<template>
    <div class="notification-bar" :class="notificationTypeClass">
        <p>{{notification.msg}}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props :{
            notification :{
                type: Object
            }
        },
        data(){
            return {
                timeout: null
            }
        },
        mounted(){
            this.timeout = setTimeout(()=>{
                this.delete(this.notification)
            },5000)
        },
        beforeDestroy(){
            clearTimeout(this.timeout)
        },
        computed:{
            notificationTypeClass (){
                return `-text-${this.notification.type}`
            }
        },
        methods : mapActions('notifications',['delete'])
    }
</script>

<style lang="css" scoped>
.notification-bar {
      margin: 1em 0 1em;
    }

</style>