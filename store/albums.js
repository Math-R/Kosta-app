export const state = () => ({
    albums : []
});

export const mutations = {
    initAlbum(state, albums) {
        state.albums = albums;
    },
    removeAlbum(state, albumId) {
        state.albums = state.albums.filter(a =>
            a.id !== albumId
        );
    }
}