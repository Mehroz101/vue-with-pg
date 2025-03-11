<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { ref } from 'vue';

const form = ref({
    username:'',
    password: ''
})
interface LoginForm {
    username:string,
}
const LoginFormMutation = useMutation({
    mutationFn: (formData : LoginForm) => {
      return axios.post('http://localhost:4000/api/login', formData)
    },
    onSuccess:(data) =>{
        console.log(data)
    },
    onError: (error) => {
        console.log(error)
    }
})
const handleSubmit = () => {
    console.log(form.value)
    LoginFormMutation.mutate( form.value )
}
</script>
<template>
    <h1>Login Form</h1>
    <form @submit.prevent="handleSubmit">
        <div class="input-box">
            <label for="username">User Name</label>
            <input type="text" name="username" v-model.trim="form.username">
        </div>
      
        <div class="input-box">
            <label for="password">Password</label>
            <input type="password" name="password" v-model.trim="form.password">
        </div>  
        <div class="button">
            <button>Submit</button>
        </div>
    </form>
</template>

<style scoped>
    .input-box{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 1rem;

    }
    .input-box label{
        margin-bottom: 0.5rem;
        text-align: left;
    }
    .input-box input{
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }
    .button{
        display: flex;
        justify-content: flex-end;
    }
    .button button{
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        background-color: #42b883;
        color: #fff;
        cursor: pointer;
    }

</style>