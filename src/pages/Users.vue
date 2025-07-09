<template>
    <div v-if="isLoading">Loading...</div>
    <div class="mt-4 px-4" v-else-if="userCount > 0">
        <div class="">
            <h1 class="text-4xl">Total Users: {{ userCount }}</h1>
            <app-table :headers="headers" :body="users">
                <template #body_action="{ item }">
                    <button class="view-more-btn">
                        <router-link :to="`/users/${item.id}`">
                            View More →
                        </router-link>
                    </button>
                </template>
            </app-table>
        </div>
    </div>
    <div v-else class="flex justify-center py-10">
        <p class="text-red-600 text-2xl font-semibold">
            Xatolik yuz berdi iltimos qayta urinib ko'ring!!!
        </p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { userStore } from '../store';
import AppTable from "../components/table/Table.vue";
import { storeToRefs } from 'pinia';

const store = userStore();

onMounted(() => {
    store.getAllUsers()
})

const { users, isLoading, userCount } = storeToRefs(userStore())

const headers = reactive([
    { title: "Name", value: "name" },
    { title: "Email", value: "email" },
    { title: "Phone", value: "phone" },
    { title: "Action", value: 'action' }
]);
</script>

<style scoped>
.view-more-btn {
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s ease-in-out;
    border: none;
    cursor: pointer;
}

.view-more-btn:hover {
    background-color: #1d4ed8;
}
</style>