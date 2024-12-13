<template>
    <div class="max-w-7xl h-[47.938rem] mx-auto">
        <div class=" h-[46.875rem] w-[62.5rem] my-2 ml-40 bg-orange-750 rounded-3xl">
            <div class=" -ml-8 grid grid-cols-2 grid-rows-2">

                <div class="h-[18.75rem] w-[21.875rem] mx-32 my-8 bg-orange-800  rounded-3xl">
                    <div class="pt-20 grid grid-rows-[6.25rem_6.25rem] justify-center items-center group">
                        <a class="">
                            <svg enable-background="new 0 0 48 48" class="w-[11.25rem] h-[11.25rem] fill-orange-200 group-hover:fill-orange-400"  id="Layer_1" version="1.1" viewBox="0 0 48 48"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
                            xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M43,41H5c-2.209,0-4-1.791-4-4V11c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v26  
                            C47,39.209,45.209,41,43,41z M45,11c0-1.104-0.896-2-2-2H5c-1.104,0-2,0.896-2,2v26c0,1.104,0.896,2,2,2h38c1.104,0,2-0.896,2-2V11z   
                            M41.334,34.715L35,28.381L31.381,32l3.334,3.334c0.381,0.381,0.381,0.999,0,1.381c-0.382,0.381-1,0.381-1.381,0L19,22.381  
                            L6.666,34.715c-0.381,0.381-0.999,0.381-1.381,0c-0.381-0.382-0.381-1,0-1.381L18.19,20.429c0.032-0.048,0.053-0.101,0.095-0.144  
                            c0.197-0.197,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.084,0.715,0.281c0.042,0.043,0.062,0.096,0.095,0.144L30,30.619  
                            l4.19-4.19c0.033-0.047,0.053-0.101,0.095-0.144c0.197-0.196,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.085,0.715,0.281  
                            c0.042,0.043,0.062,0.097,0.095,0.144l6.905,6.905c0.381,0.381,0.381,0.999,0,1.381C42.333,35.096,41.715,35.096,41.334,34.715z   
                            M29,19c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S31.209,19,29,19z M29,13c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2  S30.104,13,29,13z" fill-rule="evenodd"/></svg>
                        </a>
                        <h1 class="ml-5 text-orange-200 font-geologica text-2xl group-hover:text-orange-400">Drop a cover</h1>
                    </div>
                </div>

                <div class="pl-10 pt-24">
                    <form class="space-y-4">

                        <div>
                            <label class=" ml-6 text-orange-200 font-geologica text-lg">Add a title</label ><br>
                            <input type="email" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200  rounded-full">
                        </div>

                        <div>
                            <label class=" ml-6 text-orange-200 font-geologica text-lg">Add a genre</label ><br>
                            <input type="email" class="w-96 h-10 py-4 px-6 border border-orange-200 text-xl text-orange-750 bg-orange-200  rounded-full">
                        </div>

                    </form>
                </div>

                <div class="pl-32 pt-2">
                    <h1 class="text-orange-200 font-geologica text-2xl">Specify the type of the release</h1>
                    <form class="mt-2 flex space-x-2">
                        <div class="flex-1">
                            <input class="hidden peer" id="EP" type="radio" name="release-type" value="EP"  checked>
                            <label for="EP" class="flex flex-col h-10 w-20 border-2 border-orange-200 cursor-pointer rounded-full justify-center items-center 
                            hover:bg-orange-800 peer-checked:border-orange-400 peer-checked:text-orange-400 peer-checked:shadow-lg">
                                <span class="text-sm font-bold text-orange-200">EP</span>
                            </label>
                        </div>
                        <div class="flex-1">
                            <input class="hidden peer" id="LP" type="radio" name="release-type" value="LP" >
                            <label for="LP" class="flex flex-col h-10 w-20 border-2 border-orange-200 cursor-pointer rounded-full justify-center items-center 
                            hover:bg-orange-800 peer-checked:border-orange-400 peer-checked:text-orange-400 peer-checked:shadow-lg">
                                <span class="text-sm font-bold text-orange-200">LP</span>
                            </label>
                        </div>
                        <div class="flex-1">
                            <input class="hidden peer" id="single" type="radio" name="release-type" value="Single" >
                            <label  for="single" class="flex flex-col h-10 w-20 border-2 border-orange-200 cursor-pointer rounded-full justify-center items-center 
                            hover:bg-orange-800 peer-checked:border-orange-400 peer-checked:text-orange-400 peer-checked:shadow-lg">
                                <span class="text-sm font-bold text-orange-200 ">Single</span>
                            </label>
                        </div>
                    </form>
                </div>

                <div class="w-[28.125rem] ml-4  pt-0.5 bg-orange-800 rounded-3xl">
                    <p class='pl-4 py-4 text-orange-200 font-geologica text-xl hover:text-orange-400'>+ Add a new track</p>
                </div>
                

            </div>
        </div>
    </div> 
</template>

<style scoped>



</style>