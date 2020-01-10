import axios from 'axios';

export const state = () => ({
    authUser: null
});

export const mutations = {
    SET_USER(state, user) {
        state.authUser = user
    }
};

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
            commit('SET_USER', req.session.authUser);
        }
    },
    async login({ commit }, { username, password }) {
        try {
            const { data } = await axios.post('/ap9i/login', { username, password });
            commit('SET_USER', data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('bad credentials');
            }
            throw error;
        }
    },
    async logout({ commit }) {
        await axios.post('/ap9i/logout');
        commit('SET_USER', null);
    }
}