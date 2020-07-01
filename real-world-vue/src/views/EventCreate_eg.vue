<template>
<div>

    <h1>Create Events {{user}}</h1>
    <ul>
        <li v-for="item in categories" :key="item">{{item}}</li>
    </ul>
    Active ToDo's: {{activeToDos}}
   <div> Get ToDO by id
    <input v-model.number="todoID" name="todoid"/>
    {{getToDoById(todoID)}}
   </div>
    <div> Increment count
    <input v-model.number="incrementBy" name="toincrementBydoid"/>
    <button @click="incrementCount">Increment</button>
   </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    data() {
        return {
            todoID: 1,
            incrementBy: 0
        }
    },
    methods:{
        incrementCount(){
            this.$store.commit('INCREMENT_COUNT',this.incrementBy)
        }
    },
    computed:{
        catlength(){ return this.$store.getters.catLength},
        activeToDos(){ return this.$store.getters.activeTodosCount},
        ...mapGetters(['getToDoById']),
        ... mapState(['user', 'categories'])
    },
}
</script>

<style>

</style>