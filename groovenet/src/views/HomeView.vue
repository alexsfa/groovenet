<script setup>
    const underline = '_'.repeat(28);
</script>

<template>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 bg-grandient-to-b from-orange-750 to-gray-800">
        <div class="main-left col-span-1 space-y-8">
            <div class="p-4 bg-orange-750 text-center rounded-lg">
                <img src="@/assets/images/profile pictures/epithet-profile-pic.jpg" class="mb-3 rounded-full">
                <p class='text-orange-200 font-geologica text-2xl'>Epithet of mine</p>

                <div>
                    <div class="mt-4 flex space-x-8 justify-around">
                        <p class="text-lg font-geologica text-orange-200">86 followers</p>
                    </div>

                    <p class="text-orange-200">{{ underline }}</p>

                    <div class="mt-4 flex space-x-8 justify-around">
                        <p class="text-lg text-orange-200 font-geologica">0 LPs</p>
                        <p class="text-lg text-orange-200 font-geologica">1 EPs</p>
                        <p class="text-lg text-orange-200 font-geologica">1 single</p>
                    </div>
                </div>
            </div>

            <div>
                <div class="p-4 bg-orange-750 text-center rounded-lg">
                    <p class='text-orange-200 pb-2 font-geologica text-xl text-left'>Friends & collaborators</p>

                    <div class="flex space-x-2">
                        <div class="w-12 h-12 rounded-full overflow-hidden">
                            <img src="@/assets/images/profile pictures/morphine-jar-profile-pic.jpg" class="w-full h-full object-cover">
                        </div>

                        <div class="w-12 h-12 rounded-full overflow-hidden">
                            <img src="@/assets/images/profile pictures/shrf-profile-pic.png" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-center col-span-2 space-y-4">
            <div class="bg-orange-750 rounded-lg">
                <div class="p-4">  
                    <form >
                        <input class="-mb-6 p-3 w-full h-9 rounded-3xl bg-orange-200 text-orange-750  " placeholder=" Post a new thought,announcement or photo" type="text"></input> 
                    </form>
                </div>

                <div class=" flex ">
                    <a href="#" class=" py-4 px-6 bg-gray-600 text-white rounded-lg">Attach image</a>

                    <a href="#" class=" py-4 px-6 bg-purple-600 text-white rounded-lg">Post</a>
                </div>
            </div>

            <div class="p-4 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <img src="https://i.pravatar.cc/300?img=70" class="w-[40px] rounded-full">
                        
                        <p><strong>Code With Stein</strong></p>
                    </div>

                    <p class="text-gray-600">18 minutes ago</p>
                </div>

                <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80" class="w-full rounded-lg">

                <div class="my-6 flex justify-between">
                    <div class="flex space-x-6">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>  
                            
                            <span class="text-gray-500 text-xs">82 likes</span>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
                            </svg> 

                            <span class="text-gray-500 text-xs">0 comments</span>
                        </div>
                    </div>
                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                        </svg>   
                    </div>   
                </div>  
            </div>

            <div class="p-4 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <img src="https://i.pravatar.cc/300?img=70" class="w-[40px] rounded-full">
                        
                        <p><strong>Code With Stein</strong></p>
                    </div>

                    <p class="text-gray-600">18 minutes ago</p>
                </div>

                <p>Lorem ipsum bla bla lbalkjasldkfj aslkjdf lkasjdfkljaslkfjalksjf</p>

                <div class="my-6 flex justify-between">
                    <div class="flex space-x-6">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>  
                            
                            <span class="text-gray-500 text-xs">82 likes</span>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
                            </svg> 

                            <span class="text-gray-500 text-xs">0 comments</span>
                        </div>
                    </div>
                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                        </svg>   
                    </div>   
                </div>  
            </div>
        </div>

        <div class="main-right col-span-1 space-y-4">
            <PeopleYouMayKnow />

            <Trends />
        </div>
    </div>
</template>
