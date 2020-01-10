const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => {
    return {
        auth: null
    }
}
export const mutations = {
    setAuth(state, auth) {
        state.auth = auth;
    }
}
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        // console.log(cookieparser.parse("foo=bar"));
        let auth = null;
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie);
            try {
                auth = JSON.parse(parsed.auth);
            } catch (error) {

            }
        }
        commit('setAuth', auth);
    }
}