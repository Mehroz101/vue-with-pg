<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { ref } from 'vue';

const form = ref({
    fullname: '',
    email: '',
    password: '',
    cPassword: ''
})
interface RegisterForm {
    fullname: string,
    email: string,
    password: string,
    cPassword: string
}
const RegisterFormMutation = useMutation({
    mutationFn: (formData : RegisterForm) => {
      return axios.post('http://localhost:3000/api/register', formData)
    },
    onSuccess:(data) =>{
        console.log(data)
    },
    onError: (error) => {
        console.log(error)
    }
})
const handleSubmit = () => {

    if(form.value.password !== form.value.cPassword){
        alert('Passwords do not match')
        return 
    }
    RegisterFormMutation.mutate( form.value )
}
</script>
<template>
    <h1>Registration Form</h1>
    <form @submit.prevent="handleSubmit" >
        <div class="input-box">
            <label for="fullname">Full Name</label>
            <input type="text" name="fullname" v-model.trim="form.fullname">
        </div>
        <div class="input-box">
            <label for="email">Email</label>
            <input type="email" name="email" v-model.trim="form.email">
        </div>
        <div class="input-box">
            <label for="password">Password</label>
            <input type="password" name="password" v-model.trim="form.password">
        </div>
        <div class="input-box">
            <label for="cPassword">Confirm Password</label>
            <input type="password" name="cPassword" v-model.trim="form.cPassword">
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