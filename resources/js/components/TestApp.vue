<template>

    <div v-if="loading" class="text-center mt-5">
        <img src="../../../assets/Spinner.gif" alt="loading">
    </div>
    <div v-if="error" class="text-center text-danger mt-5">
        <h1>{{ error }}</h1>
    </div>
    <div class="card mb-3" v-else v-for="(post,index) in posts" :key="index">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.content}}.</p>
            <p class="card-text"><small class="text-muted">{{getFormattedDate(post.created_at)}}</small></p>
            <button class="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="getpost(post.id)">edit</button>
            <button class="btn btn-danger" @click="deletePost(post.id)">delete</button>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="post.title">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit : {{post.title}} post</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="title" class="form-label">title</label>
                    <input type="text" :class="['form-control',errors.title ? 'is-invalid' : '']" name="title" placeholder="Enter post title" v-model="post.title">
                    <span v-if="errors.title" class="text-danger">{{ errors.title[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Enter the content</label>
                    <textarea :class="['form-control',errors.content ? 'is-invalid':'']" name="content" rows="3" v-model="post.content"></textarea>
                    <span v-if="errors.content" class="text-danger">{{ errors.content[0] }}</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updatePost()">Save changes</button>
            </div>
            </div>
        </div>
    </div>


</template>

<script>
import moment from 'moment';
export default {
    created:function (){
        this.getPosts();
    },
    data:function(){
        return {
            post:[],
            posts:[],
            loading:true,
            errors:[],
            error:null
        }
    },
    methods:{
        getPosts:async function(){
            try{
                await axios.get('/api/posts').then(response=>{
                    this.posts = response.data.posts;
                    this.loading = false;
                });
            }catch(error){
                this.error = "sorry something went wrong";
                this.loading = false;
            }
        },
        getFormattedDate(date) {
            return moment(date).startOf('hour').fromNow();
        },
        getpost:async function(id){
            try{
                await axios.get('/api/get-post/'+id).then(response=>{
                    this.post = response.data.post;
                    this.loading = false;

                });
            }catch(error){
                this.error = "sorry something went wrong";
                this.loading = false;
            }
        },
        updatePost:async function(){
            await axios.post('/api/update-post/'+ this.post.id, this.post).then(response=>{
                if(response.data.status == 'success'){
                    this.getPosts();
                    Toast.fire({
                    icon: 'success',
                    title: 'Saved  successfully'
                    })
                }else{
                    this.errors = response.data.errors;
                }
            }).catch(error=>{
                // this.error = "sorry something went wrong";
                Toast.fire({
                icon: 'error',
                title: 'error occured'
                })
            });
        },
        deletePost:async function(id){
            await axios.delete('/api/delete-post/'+ id).then(response=>{
                this.getPosts();
                Toast.fire({
                icon: 'success',
                title: 'Deleted  successfully'
                })
            }).catch(error=>{
                Toast.fire({
                icon: 'error',
                title: 'error occured'
                })
            });
        }
    }

}
</script>

<style>

</style>
