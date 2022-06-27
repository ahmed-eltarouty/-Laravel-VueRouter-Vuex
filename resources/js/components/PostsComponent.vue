<template>
<div class="row">
    <div class="col-md-6 mx-auto">
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
        <button type="submit" class="btn btn-success" @click="savedata" :disabled="!post.title || !post.content ">Save</button>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return {
            post:{
                title:'',
                content:''
            },
            errors:[]
        }
    },
    methods:{
        savedata:async function(){
            await axios.post('/api/add-post',this.post).then(response=>{
                if(response.data.status=='error'){
                    console.log(response.data)
                    this.errors=response.data.errors
                    Toast.fire({
                    icon: 'error',
                    title: 'Error in saving data'
                    })
                }else{
                    Toast.fire({
                    icon: 'success',
                    title: 'Saved  successfully'
                    })
                    this.post.title = ''
                    this.post.content = ''
                    this.errors = []
                }
            })

        }
    }

}
</script>

<style>

</style>
