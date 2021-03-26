import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'kosta',
        paths : ['user']
    })(store)
}
