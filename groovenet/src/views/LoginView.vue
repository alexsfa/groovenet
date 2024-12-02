<template>
        <div class="justify-self-center">
            <img src="@/assets/images/groovenet-full-logo.png" class='scale-125  '>
        </div>
        <div class="max-w-7xl my-7 mx-auto grid grid-cols-2 ">
            <div class="main-left">
                <img src="@/assets/images/signup-image.png" class=' pl-60 pt-8'>
            </div>

            <div class="main-right">
                <div class="pl-12 pt-24">
                    <div class="space-y-6 -mt-6 pb-14">    
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

                    <form class="space-y-2">
                        <div>
                            <label class=" ml-6 text-orange-200 font-geologica text-lg">Enter your email</label ><br>
                            <input type="email" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200  rounded-full">
                        </div>

                        <div>
                            <label class="text-orange-200 font-geologica text-lg ml-6">Enter your password</label><br>
                            <input type="password" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200 rounded-full">
                        </div>

                        
                         <div class='ml-2 pt-10 pl-4 grid grid-cols-1 gap-y-4 '>
                            <button class="text-xl underline font-geologica text-orange-200 justify-self-start">
                                <router-link to="/">
                                    Log in
                                </router-link>
                            </button>
                            <p class=" text-lg text-orange-200 ">
                                Need an account? <router-link to="/signup" class="underline">Click here</router-link> 
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div> 
</template>