<script setup lang="ts">

import headers from './components/layouts/Header.vue'
import sidebar from './components/layouts/SidebarClient.vue'

import("./assets/css/main/main-client.css");
</script>

<template>
  <headers />
  <sidebar />
  <router-view />
</template>
