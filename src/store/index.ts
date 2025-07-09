import { defineStore } from "pinia";
import type { IUsersApiClientResponse } from "../interfaces";
import userApiClient from "../modules/api-client/users/User";
import { createToast } from "mosha-vue-toastify";
export const userStore = defineStore("main", {
    state: () => ({
        users: [] as IUsersApiClientResponse[],
        isLoading: false
    }),
    getters: {
        userCount: (state) => state.users.length,
        getUserById: (state) => (id: string | number) => {
            return state.users.find((user) => user.id === id);
        },
    },

    actions: {
        async getAllUsers() {
            this.isLoading = true;
            try {
                const response = await userApiClient.getAllUsers();
                this.users = response;
            } catch (error: any) {
                const message =
                    error?.response?.data?.message ||
                    error.message ||
                    "Unexpected error occurred.";
                createToast(message, { type: "danger", timeout: 3000 });
            } finally {
                this.isLoading = false;
            }
        }
    }
})