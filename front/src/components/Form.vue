<script setup>
import { ref } from "vue";
import { useStore } from "../stores/counter";

const store = useStore();
const input = ref("");
const text = ref("");
const add = () => {
  store.posts.push({
    id: Date.now().toString(),
    name: input.value,
    text: text.value,
  });
  input.value = "";
  text.value = "";
};
const remove = (i) => {
  store.posts = store.posts.filter((p, idx) => i !== idx);
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-dark text-light"
            placeholder="Name"
            v-model="input"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-dark text-light"
            placeholder="Text"
            v-model="text"
          />
          <button class="btn btn-outline-secondary" @click="add">Add</button>
        </div>
      </div>
    </div>

    <h1 class="mt-5">POSTS</h1>
    <hr />

    <div class="card mt-5" style="width: 30rem">
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item bg-dark text-light d-flex justify-content-between"
          v-for="(post, i) in store.posts"
          :key="post.text"
        >
          <RouterLink :to="{ name: 'post', params: { id: post.id } }"
            >{{ post.name }}
          </RouterLink>

          <button class="btn btn-sm btn-outline-secondary" @click="remove(i)">
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
