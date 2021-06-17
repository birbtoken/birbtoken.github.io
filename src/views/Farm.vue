<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6 text-white">
         <div class="text-white text-xl md:text-4xl p-2"> BIRB Farming</div>


          <p> Coming soon! </p> 
      
     </div>
   </div>

   <div class="section autospacing hidden ">
     <div class="w-container">
       <div class="w-row">
         <div class="w-col w-col-6 mt-4">
           
         </div>
         <div class="w-col w-col-6">
           
         </div>
       </div>
     </div>
   </div>
  
   <div class="section  bg-gray-800 py-4 text-white py-16">
    
   </div>

 
 
 
    
    
   

  <Footer/>

</div>
</template>


<script>
import Navbar from './components/Navbar.vue'; 
import Footer from './components/Footer.vue';

export default {
  name: 'Home',
  props: [],
  components: {Navbar, Footer},
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
