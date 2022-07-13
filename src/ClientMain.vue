<script setup lang="ts">

import headers from './components/layouts/Header.vue'
import sidebar from './components/layouts/SidebarClient.vue'

</script>

<template>
  <headers />
  <sidebar />
  <router-view />
</template>
