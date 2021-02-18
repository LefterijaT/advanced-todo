<template>
  <v-app>
    <v-main>
      <div id="nav" v-if="false">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>
