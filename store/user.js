const getDefaultState = () => {
    return {
        name: '',
        email: '',
    }
}

export const state = () => {getDefaultState()};

export const mutations = {
    updateUser(state, user) {
        state.name = user.name;
        state.email = user.email;
    },
    updateName(state, name) {
        state.name = name;
    },
    resetState () {
        const s = getDefaultState();
        Object.keys(s).forEach(key => {
          state[key] = s[key]
        })
    }
}