<template>
    <nav class="navbar navbar-expand-lg navbar-dark  bg-warning">
    <div class="container">
        <router-link class="navbar-brand text-dark" to="/">My App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">

            <router-link class="nav-link text-dark" to="/login">login</router-link>
            <router-link class="nav-link text-dark" to="/register">register</router-link>
            <router-link class="nav-link text-dark" to="/posts">posts</router-link>
        </div>
        </div>
    </div>
    </nav>
    <div class="container mt-3">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
