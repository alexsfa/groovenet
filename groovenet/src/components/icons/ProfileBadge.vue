<template>
    <div class="p-4 bg-orange-750 text-center rounded-3xl">
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
        <div class="p-4 bg-orange-750 text-center rounded-3xl">
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
</template>