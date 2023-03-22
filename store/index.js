// store/index.js
export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    },
    IsPremium(state){
      if (state.auth.user) {
        if (state.auth.user.usuarios_set[0].suscripcion_tipo.nombre == "Premium" || 
            state.auth.user.usuarios_set[0].suscripcion_tipo.nombre == "Premiumnew" ||
            state.auth.user.usuarios_set[0].suscripcion_tipo.nombre == "Premiumsintrail"){
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
  