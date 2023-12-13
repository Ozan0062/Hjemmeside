const baseUrl = "https://vendingmachinepihat.azurewebsites.net/api/users"

Vue.createApp({
    data() {
        return {
            allUsers: [],
        }
    },
    async created() {
        this.getAll(baseUrl)
    },
    methods: {
        async getAll(url) {
            try {
                const response = await axios.get(url)
                this.allUsers = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
    }

}).mount("#app")


