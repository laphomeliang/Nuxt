export const state = () => ({
    list: [
        'lorem ipsum',
        'dolor sit amet',
        'consetetur sadipscing elitr'
    ]
});
export const mutations = {
    add(state, title) {
        state.list.push(title);
    }
}
export const getters = {
    get(state) {
        return state.list;
    }
}