<template>
  <div class="menu  w-60">
      <div class="absolute h-full bg-white w-60 pt-6 pl-6">
          <router-link to="/" class="text-3xl uppercase font-bold flex mb-5">Logo</router-link>
          <router-link to="/" class="text-lg font-medium flex links mb-2 items-center">
            <span class="w-9 h-9 flex items-center justify-center mr-2 rounded-full">
                <i class="fas fa-home"></i>
            </span>
            Dashboard
          </router-link>
          <router-link to="/employees" class="text-lg font-medium flex links mb-2 items-center">
            <span class="w-9 h-9 flex items-center justify-center mr-2 rounded-full">
                <i class="fas fa-user-friends"></i>
            </span>
            List employee
          </router-link>
          <router-link to="/addpage" class="text-lg font-medium flex links mb-2 items-center">
            <span class="w-9 h-9 flex items-center justify-center mr-2 rounded-full">
                <i class="fas fa-user-plus"></i>
            </span>
            Add employee
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Menu",
    mounted() {
        let links = document.querySelectorAll(".links");
        if(this.$route.name === "Home"){
            links[0].classList.add("active")
        }
        else if(this.$route.name === "Employees"){
            links[1].classList.add("active")
        }
        else if(this.$route.name === "AddPage"){
            links[2].classList.add("active")
        }
        for(let i = 0; i < links.length; i++){
            links[i].addEventListener("click", function() {
                links[i].classList.add("active")
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .links{
        color: #8E8EA1;
    }
    .active{
        color: #000;
        span{
            background: #6160DC;
            color: #fff;
        }
    }
</style>