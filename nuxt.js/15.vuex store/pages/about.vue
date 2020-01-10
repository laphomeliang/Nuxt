<template>
    <div>
        <p>
            <button @click="$store.commit('increment')">
                {{ $store.state.counter }}
            </button><br>
            <nuxt-link to="/">
                home
            </nuxt-link>
        </p>
    </div>
</template>