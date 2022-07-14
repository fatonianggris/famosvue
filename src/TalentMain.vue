<script setup>

import headers from './components/layouts/Header.vue'
import sidebar from './components/layouts/SidebarTalent.vue'

import("./assets/css/main/main-talenta.css");
</script>

<template>
  <headers />
  <sidebar />
  <router-view />
</template>
