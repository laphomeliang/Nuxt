export default function({ store, error }) {
    if (!store.state.authUser) {
        error({
            message: 'you are not connected',
            statusCode: 403
        })
    }
}