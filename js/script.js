const { createApp } = Vue

createApp({
    data() {
        return {
            email: [],
        }
    },

    mounted() {
        for (i = 1; i <= 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((res) => {
                this.email.push(res.data.response)
            })
        }
    }

}).mount('#app')