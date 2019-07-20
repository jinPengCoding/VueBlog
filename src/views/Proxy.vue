<template>
    <div>
        <input type="file" @change="changeFile($event)">
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        changeFile(e) {
            console.log('changed')
            let data = new FormData()
            const headers ={
                'Content-Type': 'multipart/form-data'
            }
            data.append('file', e.target.files[0]);
            this.$http.post('https://vuetest-da8e6.firebaseio.com/blog.json',data,headers)
            .then((res) =>{
                console.log(res)
            })
        }
    },
    computed: {

    }
}
</script>

<style>

</style>
