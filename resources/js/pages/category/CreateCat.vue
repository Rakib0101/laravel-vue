<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="m-0">Create Category</h2>
                        <router-link to="/" class="btn btn-primary">Back To Home</router-link>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="createCategory" class="w-50 mx-auto">
                            <div class="form-group mb-2">
                                <label for="">Category Name</label>
                                <input type="text"
                                v-model="name" class="form-control" placeholder="Category Name">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Create Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
         return{
            name: '',
         }
    },
    methods: {
        createCategory(){
            axios.post('api/category', {name: this.name})
            .then(res => res.json())
            .then(data => console.log(data))
        }

    }
}
</script>

<style>

</style>
