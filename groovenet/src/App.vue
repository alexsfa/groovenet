<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  computed: {
    showBannerFooter() {
      return (this.$route.name !== 'signup') && (this.$route.name !== 'login');
    }
  }
}
</script>

<template>
  <div>
  <nav v-if="!$route.meta.hideNav" class="sticky top-0 left-0 bg-gray-800 py-2 px-2 ">
        <header  class="max-w-10xl">
            <div class="flex items-center justify-between">
                <div class="menu-left items-center flex space-x-8">
                  <router-link to="/">
                      <img src="../src/assets/images/Groovenet-logo.png" width="50px" height="50px">
                  </router-link>

                  <form >
                    <div class="bg-orange-200 rounded-3xl h-9 w-80 flex items-center">
                        <img src="../src/assets/icons/search-icon.svg" class="h-9 w-9 pl-1.5 pt-0.5">
                        <input id="myInput" class="search-input w-max bg-orange-200 text-xl text-orange-750 border-0 outline-none font-geologica pl-2" type="search" >
                    </div>
                  </form>
                </div>

                <div class="menu-center pr-60 flex space-x-8">
                      <router-link to="/notifications">
                        <h1 class="text-orange-400 text-lg font-geologica hover:scale-110 transition-transform">Notifications</h1>
                      </router-link>

                      <router-link to="/profile">
                        <h1 class="text-orange-400 text-lg font-geologica hover:scale-110 transition-transform">Profile</h1>                                                         
                      </router-link>

                      <router-link to="/favorites">
                        <h1 class="text-orange-400 text-lg font-geologica hover:scale-110 transition-transform">Favorites</h1>                              
                      </router-link>

                      <router-link to="/login">
                        <h1 class="text-orange-400 text-lg font-geologica hover:scale-110 transition-transform">Log out</h1>                                                         
                      </router-link>
                    
                </div>

                <div class="menu-right pl-12 pr-12 flex items-center justify-between">
                  <RouterLink to="/upload">
                    <button class="bg-orange-400 w-10 h-11 text-black rounded-xl  hover:bg-orange-750 flex items-center">
                      <img src="../src/assets/icons/upload-svgrepo-com.svg" class="h-9 w-9 pl-1">
                    </button>
                  </RouterLink>
                </div>
            
            </div>  
          </header>
    </nav>

    <main class="px-8 py-6" :class="{ 'bg-gray-800': $route.meta.bGray, 'bg-gradient-to-b from-orange-900 to-black ' : !$route.meta.bGray } ">
      <RouterView />
    </main>

    <footer v-if="!$route.meta.hideNav" class="flex sticky bottom-0 left-0 w-full h-16 bg-gray-800 ">
          <img src="@/assets/images/groovenet-full-logo.png" class='transform scale-75 origin-bottom -ml-12 -mt-6 '>
    </footer>
    </div>
</template>

<style scoped>
</style>
