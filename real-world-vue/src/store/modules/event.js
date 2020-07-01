import EventService from '../../services/EventService'

export const state = {
    todos: [
      { id: 1, text: 'Beach Cleaning', done: true },
      { id: 2, text: 'GP registration', done: false },
      { id: 3, text: 'Address Registration', done: true },
      { id: 4, text: 'Buy groceries', done: false }
    ],
    events:[],
    totalEvents:0,
    count: 0,
    event: {}
  }

  export const mutations = {
    INCREMENT_COUNT(state, value){
      state.count += value
    },
    ADD_EVENT(state,event){
      state.events.push(event);
    },
    SET_EVENTS(state,events){
      state.events = events;
    },
    SET_TOTAL_EVENT(state,value){
      state.totalEvents = value ;
    },
    SET_EVENT(state,event){
      state.event= event;
    }
  }
  export const actions = {
    createEvent({commit, dispatch},event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
          const notification = { type: 'success', msg: 'Event created successfully'}
          dispatch('notifications/add', notification, { root: true})
      }).catch(error =>{
        const notification = { type: 'error', msg: 'There was a problem creating event: '+ error.message}
        dispatch('notifications/add', notification, { root: true})
        throw error
      })},
    fetchEvents({ commit,dispatch }, {perPage, pageNo}) {
        EventService.getEvents(perPage,pageNo).then( response => {
          commit('SET_TOTAL_EVENT',parseInt(response.headers['x-total-count']));
          commit('SET_EVENTS', response.data)
        }).catch(error =>{
          const notification = { type: 'error', msg: 'There was a problem fetching events: '+ error.message}
          dispatch('notifications/add', notification, { root: true})
        })},
      fetchEvent({commit, dispatch}, id){
        EventService.getEvent(id).
        then( response =>{
          commit('SET_EVENT', response.data)
        }).catch(error =>{
          const notification = { type: 'error', msg: 'There was a problem fetching event: '+ error.message}
          dispatch('notifications/add', notification, { root: true})
        });
      }
    }

    export const getters = {
    catLength : state => {return state.categories.length},
    doneTodos : state => { return state.todos.filter(todo => todo.done)},
    activeTodosCount: (state, getters) => {return state.todos.length - getters.doneTodos.length},
    getToDoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  }