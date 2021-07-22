import Vuex from "vuex";
const createStore = () => {
    return new Vuex.Store({
      state: {
       toggle:new Array(7). fill(false),
       close:true,
       a:0
      },
      mutations: {
        info(state,a) {
          
          state.toggle[a] = !state.toggle[a],
          state.a=a
        },
        close(state)
        {
          state.close=!state.close
        }
        
      },
      actions: {
        // async nuxtServerInit({ commit }) 
        // {
        //  return ( commit("info"))
        
        // },
        toggleSidebar({commit},a) {
          commit("info",a);
        },
        close({commit})
        {
          commit("close")
        }
      },
      getters: {
        // togglesidebar(state) {
        //   console.log(state.toggle[state.a])
        togglesidebar(state)
        {
           return state.toggle
        } ,
          
        tog(state)
        {
          return state.close
        }
      
      }
      
    });
  };
  
  export default createStore;
  