import Vuex from 'vuex';
import axios from 'axios'

// 定義一個新的 Vue Store
//const store = new Vuex.Store({
export default new Vuex.Store({
  nams: 'store',

  state: {
    // state 裡面的 Loaded 預設為 false ，在 axios 成功 get 到 user api 的之後，再更改為 true
    Loaded: false,
    clickedTimes: 0,
    users: [],
  },

  actions: {
    GetUser({ commit }) {
      axios.get('https://randomuser.me/api/?results=9')
          .then(function (res) {
              var data = res.data.results
              commit('dataLoaded')

              // 把抓回來的data發給mutations
              commit('setUserInfo', data)
          })
    },


    ClickedActions({ commit }, payload) {
      commit('addTimes', payload)
    }

  },
  
  mutations: {
    dataLoaded(state) {
        state.Loaded = true;
    },
    SetFalse(state) {
        state.Loaded = false;
    },
    addTimes(state, payload) {
        state.clickedTimes = state.clickedTimes + payload.count;
    },
    // 把拿到的data丟進state裡面
    setUserInfo(state, payload) {
        state.users = payload
    }
  },

  getters:{
    FemaleNum(state) {
      return state.users.filter(item => item.gender == 'female').length;
    },

    MaleNum(state, getters){
      return state.users.length - getters.FemaleNum;
    },

    returnFn(state) {
      
      return function DetectGender(gd) {
        if (state.users.filter(item => item.gender == gd).length > 2)
          console.log('There are over 2 ' + gd + ' in data')
        else
          console.log('No over 2 ' + gd + ' in data');
      }
    }

  },





})
//export default store;