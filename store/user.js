export const state = () => ({
    name: '',
    email: '',
})

export const mutations = {
    updateUser(state, user) {
        state.name = user.name;
        state.email = user.email;
    },
    updateName(state, name) {
        state.name = name;
    },
    // resetState () {
    //     store.replaceState(state);
    // }
}
