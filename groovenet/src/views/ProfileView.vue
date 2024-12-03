<script setup>
    const underline = '_'.repeat(28);
</script>

<template>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 ">
        <div class="main-left col-span-1 space-y-8  ">
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
        </div>

        <div class="main-center col-span-2 space-y-4">
            <div class="bg-orange-750 rounded-3xl">
                <div class="pl-3 pt-1 -mb-3 flex items-center space-x-3">
                    <div class="w-10 h-10  rounded-full overflow-hidden">
                        <img src="@/assets/images/profile pictures/epithet-profile-pic.jpg" class="w-full h-full object-cover">  
                    </div>
                    <h1 class="text-lg font-geologica text-orange-200"> Post a new thought,announcement or photo</h1>
                </div>


                <div class="py-4 px-2">  
                    <form >
                        <input class="-mb-6 p-3 w-full h-9 rounded-3xl bg-orange-200 text-orange-750  " type="text"></input> 
                    </form>
                </div>

                <div class="py-0.5 flex space-x-9">
                    <a href="#" class="pl-6 pb-0.5 -mt-2.5 w-6 h-18 fill-orange-200 hover:fill-orange-400">
                        <svg enable-background="new 0 0 48 48" class="w-6 h-18 text-orange-200" height="30px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="36px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M43,41H5c-2.209,0-4-1.791-4-4V11c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v26  
                        C47,39.209,45.209,41,43,41z M45,11c0-1.104-0.896-2-2-2H5c-1.104,0-2,0.896-2,2v26c0,1.104,0.896,2,2,2h38c1.104,0,2-0.896,2-2V11z   
                        M41.334,34.715L35,28.381L31.381,32l3.334,3.334c0.381,0.381,0.381,0.999,0,1.381c-0.382,0.381-1,0.381-1.381,0L19,22.381  
                        L6.666,34.715c-0.381,0.381-0.999,0.381-1.381,0c-0.381-0.382-0.381-1,0-1.381L18.19,20.429c0.032-0.048,0.053-0.101,0.095-0.144  
                        c0.197-0.197,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.084,0.715,0.281c0.042,0.043,0.062,0.096,0.095,0.144L30,30.619  
                        l4.19-4.19c0.033-0.047,0.053-0.101,0.095-0.144c0.197-0.196,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.085,0.715,0.281  
                        c0.042,0.043,0.062,0.097,0.095,0.144l6.905,6.905c0.381,0.381,0.381,0.999,0,1.381C42.333,35.096,41.715,35.096,41.334,34.715z   
                        M29,19c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S31.209,19,29,19z M29,13c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2  S30.104,13,29,13z" fill-rule="evenodd"/></svg>
                    </a>

                    <a href="#" class="-mt-2 pt-0.5 fill-orange-200 hover:fill-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 
                        50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83
                         0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                    </a>
                </div>
            </div>

            <div class="px-2 pt-3.5 pb-0.5 flex bg-orange-750 border border-gray-200 rounded-3xl">
                <div class="-ml-2  flex">
                    <img src="@/assets/images/profile pictures/epithet-profile-pic.jpg"  class="w-28 h-28 pb-2 mb-1 rounded-2xl">
                    <img src="@/assets/images/cover-pictures/fourth-act.jpg"  class=" w-10 h-10 mt-20 -ml-6 rounded-full">
                </div>

                <div class="pl-2 pt-2 mr-36">
                    <a href='#' class="text-xl font-bold font-geologica text-orange-200 hover:text-orange-400">Epithet of mine</a>
                    <p class="text-lg leading-6 font-geologica text-orange-200">
                       We just released a new album. <br>
                       It' s called 'Fourth Act'
                    </p>
                </div>

                <div class="pl-2 grid grid-rows-2 ">
                    <div class=" px-1 flex space-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" width="32px" viewBox="0 -960 960 960"  >
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 
                        62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 
                        158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 
                        26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                        <p class="text-orange-200 text-lg pb-1">105</p>
                    </div>
                    <div class="px-1.5 -mt-8 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" viewBox="0 -960 960 960" width="28px">
                        <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 
                        23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                        <p class="text-orange-200 text-lg pb-1">10</p>
                    </div>
                    
                </div>
            </div>

            <div class="  bg-orange-750 rounded-3xl">
                <div class="  grid grid-rows-[180px_300px] overflow-hidden">
                    <div class="flex space-x-4">
                        <img src="@/assets/images/cover-pictures/fourth-act.jpg" class=" w-44 h-40 mt-4  rounded-2xl">

                        <div class="pt-10">
                            <h4 class=' font-geologica text-orange-200 text-xl '>Epithet of mine</h4>
                            <h1 class='font-bold font-geologica text-orange-200 text-6xl '>Fourth Act</h1>
                        </div>

                        <div class="pl-6 mt-2 grid grid-rows-2 ">
                            <div class=" px-1 flex space-x-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" width="32px" viewBox="0 -960 960 960"  >
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 
                                62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 
                                158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 
                                26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                <p class="text-orange-200 text-lg pb-1">105</p>
                            </div>
                            <div class="px-1.5 -mt-20 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" viewBox="0 -960 960 960" width="28px">
                                <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 
                                23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                                <p class="text-orange-200 text-lg pb-1">10</p>
                            </div>
                            <div class="px-1.5 -mt-20 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="fill-orange-200 hover:fill-orange-400" height="40px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="M440-501Zm0 
                                381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 
                                45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 
                                78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 
                                52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>
                                <p class="text-orange-200 text-lg pb-1">6</p>
                            </div>
                </div>
                    </div>

                    <div class="flex space-x-8 mb-4">
                        <div class="pl-1">
                            <p class=' font-geologica text-orange-200 '>Genre - Groove metal</p>
                            <p class=' font-geologica text-orange-200 '>Total time - 24:49</p>
                            <p class=' font-geologica text-orange-200 '>Date - 12 Nov 24</p>
                        </div>

                        <div class="w-[400px] bg-orange-800 rounded-3xl">
                            <div class="pl-4 pt-4">
                                <pre class='pb-3 text-orange-200 font-geologica text-xl hover:text-orange-400'>1      Their Reality                                   3:55</pre>
                                <pre class='pb-3 text-orange-200 font-geologica text-xl hover:text-orange-400'>2      Success                                           4:03</pre>
                                <pre class='pb-3 text-orange-200 font-geologica text-xl hover:text-orange-400'>3      Fourth Act                                      6:18</pre>
                                <pre class='pb-3 text-orange-200 font-geologica text-xl hover:text-orange-400'>4      Clean Skin                                      4:58</pre>
                                <pre class='pb-3 text-orange-200 font-geologica text-xl hover:text-orange-400'>5      Square existence                         5:44</pre>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

            <div class="px-2 pt-3.5 pb-0.5 flex bg-orange-750 border border-gray-200 rounded-3xl ">
                <div class="-ml-2  flex">
                    <img src="@/assets/images/profile pictures/epithet-profile-pic.jpg"  class="w-28 h-28 pb-2 mb-1 rounded-2xl">
                </div>

                <div class="pl-5 pt-2 mr-40">
                    <h3 class="text-xl font-bold font-geologica text-orange-200 hover:text-orange-400">Epithet of mine</h3>
                    <p class="text-lg leading-6 font-geologica text-orange-200">
                       New album. Fourth Act. 12/11
                    </p>
                </div>

                <div class="pl-4 grid grid-rows-2 ">
                    <div class=" px-1 flex space-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" width="32px" viewBox="0 -960 960 960"  >
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 
                        62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 
                        158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 
                        26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                        <p class="text-orange-200 text-lg pb-1">12</p>
                    </div>
                    <div class="px-1.5 -mt-8 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-orange-200 hover:fill-orange-400" height="40px" viewBox="0 -960 960 960" width="28px">
                        <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 
                        23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                        <p class="text-orange-200 text-lg pb-1">3</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="main-right h-[770px] grid grid-rows-[120px_650px] justify-center  bg-orange-750 rounded-3xl">
            <div>
                <h1 class="pr-6 pl-12 pt-6 text-orange-200 font-geologica  text-xl">Favorites</h1>
                <p class="text-orange-200">{{ underline }}</p>
            </div>
            <div class=" -ml-1 -mt-4  grid justify-center col-span-1 ">
                <div>
                    <img src="@/assets/images/cover-pictures/ink-days.jpg" class="ml-4 w-32 h-32 rounded-2xl">
                    <div class="ml-1">
                        <a href='#' class=" text-center text-orange-200 hover:text-orange-400 text-lg ">
                            <h1 class="leading-6 font-geologica">Morphing Jar</h1>
                        </a>
                        <h3 class="text-center font-geologica text-orange-200 text-sm">Ink days</h3>
                    </div>
                </div>
                <div>
                    <img src="@/assets/images/cover-pictures/dreamland.jpg" class="ml-5 w-32 h-32  rounded-2xl">
                    <div class="ml-2">
                        <a href='#' class=" text-center text-orange-200 hover:text-orange-400 text-lg ">
                            <h1 class="leading-6 font-geologica">Half Twin Brother</h1>
                        </a>
                        <h3 class="text-center font-geologica text-orange-200 text-sm">Dreamland</h3>
                    </div>
                </div>
                <div>
                    <img src="@/assets/images/cover-pictures/banity.png" class="ml-5 w-32 h-32 rounded-2xl object-cover">
                    <div class="ml-2 fitems-center">
                        <a href='#' class=" text-center text-orange-200 hover:text-orange-400 text-lg ">
                            <h1 class="leading-6 font-geologica">Seaside Hotel<br>
                            Room Fantasy</h1>
                        </a>
                        <h3 class="text-center font-geologica text-orange-200 text-sm">Banity</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
