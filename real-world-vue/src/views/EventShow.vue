<template>
    <div>
        <div class="event-header">
          <span class="eyebrow">@{{ event.event.time }} on {{ event.event.date }}</span>
          <h1 class="title">{{ event.event.title }}</h1>
          <h5>Organized by {{ event.event.organizer }}</h5>
          <h5>Category: {{ event.event.category }}</h5>
        </div>
        <BaseIcon name="map"><h2>Location</h2></BaseIcon>
        <address>{{ event.event.location }}</address>
        <h2>Event details</h2>
        <p>{{ event.event.description }}</p>
        <h2>Attendees
          <span class="badge -fill-gradient">{{ event.event.attendees ? event.event.attendees.length : 0 }}</span>
        </h2>
        <ul class="list-group">
          <li v-for="(attendee, index) in event.event.attendees" :key="index" class="list-item">
            <b>{{ attendee.name }}</b>
          </li>
        </ul>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/297804361" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div>
      
</template>

<script>
import {mapState} from 'vuex';

export default {
    props: ['id'],

    created(){
        this.$store.dispatch('fetchevent', this.id)
    },
    computed : mapState(['event']) 
}
</script>


<style>
.location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .event.event-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-bottom: solid 1px #e5e5e5;
    }
</style>