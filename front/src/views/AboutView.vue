<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../stores/counter";
import { computed } from "vue";

const store = useStore();
const post = computed(() =>
  store.posts.find((p) => p.id === router.currentRoute.value.params.id)
);
const router = useRouter();
</script>
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">This is an about post {{ post.name }}</h1>
        <h6>{{ post.text }}</h6>
      </div>
    </div>
  </div>
</template>

<style></style>
