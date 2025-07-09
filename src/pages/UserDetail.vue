<template>
    <div v-if="loading" class="text-center py-10 text-gray-500 text-xl">Loading...</div>

    <div v-else-if="error" class="flex justify-center py-10">
        <p class="text-red-600 text-2xl font-semibold">{{ error }}</p>
    </div>

    <div class="user-card max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6 space-y-4" v-else>
        <h2 class="text-2xl font-bold text-gray-800 border-b pb-2">👤 User Info</h2>

        <ul class="space-y-2 text-gray-700">
            <li><span class="font-semibold">ID:</span> {{ user?.id }}</li>
            <li><span class="font-semibold">Username:</span> {{ user?.username }}</li>
            <li><span class="font-semibold">Email:</span> {{ user?.email }}</li>
            <li><span class="font-semibold">Phone:</span> {{ user?.phone }}</li>
            <li><span class="font-semibold">Website:</span> {{ user?.website }}</li>

            <li>
                <span class="font-semibold">Address:</span>
                <ul class="ml-4 list-disc space-y-1">
                    <li>Street: {{ user?.address?.street }}</li>
                    <li>Suite: {{ user?.address?.suite }}</li>
                    <li>City: {{ user?.address?.city }}</li>
                    <li>Zipcode: {{ user?.address?.zipcode }}</li>
                    <li>
                        Geo:
                        <ul class="ml-4 list-disc">
                            <li>Lat: {{ user?.address?.geo?.lat }}</li>
                            <li>Lng: {{ user?.address?.geo?.lng }}</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <span class="font-semibold">Company:</span>
                <ul class="ml-4 list-disc space-y-1">
                    <li>Name: {{ user?.company?.name }}</li>
                    <li>Catchphrase: {{ user?.company?.catchPhrase }}</li>
                    <li>BS: {{ user?.company?.bs }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { userStore } from '../store';
const route = useRoute();
const userId = Number(route.params.id);
const loading = ref(true);
const error = ref("");
const store = userStore();

onMounted(async () => {
    if (store.users.length) {
        await store.getAllUsers();
    }

    let foundUser = store.getUserById(userId);

    if (!foundUser) {
        await store.getAllUsers();
        foundUser = store.getUserById(userId);
    }
    if (!foundUser) {
        error.value = "User not found with the given ID.";
    }

    loading.value = false;
})

const user = computed(() => store.getUserById(userId));
</script>

<style scoped></style>