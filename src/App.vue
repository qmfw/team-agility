<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
import { useRoute } from "vue-router";
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: { Login },
  data() {
    return {
      drawer: false,
      items: [],
      nowLoading: false,
    };
  },
  methods: {
    judgeHideNavi() {
      return useRoute().meta ? !!useRoute().meta.hideNavi : false;
    },
  },
};
</script>

<template>
  <v-card v-if="!judgeHideNavi()">
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
  <RouterView />
</template>

<style scoped></style>
