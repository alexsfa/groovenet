<template>
    <div class="max-w-7xl h-[56.550rem] mx-auto">
        <div class="justify-self-center">
            <img src="@/assets/images/groovenet-full-logo.png" class='scale-125  '>
        </div>

        <div class="max-w-7xl my-2 mx-auto grid grid-cols-2">
            <div class="main-left">
                <img src="@/assets/images/signup-image.png" class=' pl-60 pt-12'>
            </div>

            <div class="main-right">
                <div class="pl-12 pt-16">

                    <div class="space-y-6 -mt-10 pb-14">    
                        <div>
                            <p class="text-orange-200 font-geologica text-2xl">
                                Groovenet is a social media for<br>
                                musicians and music lovers<br>
                                from all over the world.
                            </p>
                        </div>
                        <div class="text-orange-200 text-xl font-geologica">
                            <p>
                                Our goal is to make a platform that<br>
                                will help music artists to promote <br>
                                their music, lives and merchandise in a<br>
                                way that they can show the world<br>
                                what they stand for.
                            </p>
                        </div>
                    </div>    

                    <form class="space-y-2" v-on:submit.prevent="submitForm">
                        <div>
                            <label class=" ml-6 text-orange-200 font-geologica text-lg">Enter your name</label ><br>
                            <input type="text" v-model="form.name" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200  rounded-full">
                        </div>

                        <div>
                            <label class=" ml-6 text-orange-200 font-geologica text-lg">Enter your email</label ><br>
                            <input type="email" v-model="form.email" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200  rounded-full">
                        </div>

                        <div>
                            <label class="text-orange-200 font-geologica text-lg ml-6">Enter your password</label><br>
                            <input type="password" v-model="form.password1" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200 rounded-full">
                        </div>

                        <div>
                            <label class="text-orange-200 font-geologica text-lg ml-6">Repeat your password</label><br>
                            <input type="password" v-model="form.password2" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200 rounded-full">
                        </div>

                        <template v-if="errors.length > 0">
                            <div class = "bg-red-300 text-orange-200 rounded-lg p-6"> 
                                <p v-for="error in errors" v-bind:key="error"> {{ error }}</p>
                            </div>
                        </template>


                        <div class='ml-2 pt-4 pl-4 grid grid-cols-1 gap-y-4 '>
                            <button class="text-xl underline font-geologica text-orange-200 justify-self-start">
                                <router-link to="/">
                                    Sign up
                                </router-link>
                            </button>
                            <p class=" text-lg text-orange-200 ">
                                Already have an account? <router-link to="/login" class="underline">Click here</router-link> to log in!
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
import { useToastStore } from '@/stores/toast';

export default {
    setup() { 
        const toastStore = useToastStore()
    

        return {
            toastStore
        }
    },

    data() {
        return { 
            form: {
                email: '',
                name: '',
                password1: '',
                password2: ''
            },
            errors: []
        }
    },

    methods: {
        submitForm() {
            this.errors = []

            if(this.form.email === '') {
                this.errors.push('Your e-mail is missing!')
            }

            if(this.form.name === '') {
                this.errors.push('Your name is missing!')
            }

            if(this.form.password1 === '') {
                this.errors.push('Your password is missing!')
            }

            if(this.form.password1 !== this.form.password2) {
                this.errors.push('The passwords do not match!')
            }

            if (this.errors.length === 0) {
                axios.post('http:127.0.0.1:5173/api/signup/', this.form)
                    .then(response => {
                        if (response.data.message === 'success') {
                            this.toastStore.showToast(5000, 'The user is registered. Please log in', 'bg-emerald-500')

                            this.form.email = ''
                            this.form.name = ''
                            this.form.password1 = ''
                            this.form.password2 = ''
                        } else {
                            this.toastStore.showToast(5000, 'Something went wrong. Please try again', 'bg-red-300')
                        }
                    })
                    .catch(error => console.log('error', error))
            }
        }
    }
}    
</script>