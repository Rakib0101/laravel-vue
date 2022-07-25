<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="m-0">Product Categories</h2>
                        <router-link to="/create-category" class="btn btn-primary">Create Category</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                <td>Name</td>
                                <td>Slug</td>
                                <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                <td>Fashion</td>
                                <td>fashion</td>
                                <td>
                                    <a class="btn btn-sm btn-primary" href="">Edit</a>
                                    <a class="btn btn-sm btn-danger" href="">Delete</a>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Category mounted.')
        }
    }
</script>
