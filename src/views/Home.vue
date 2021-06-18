<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6">
       <div class="text-white flex flex-row">
         <div class="w-1/2">
           <div class="text-xl md:text-4xl p-2">The cutest coin with scarcity and rewards.</div>
          
          <div class="my-8 px-4 hidden sm:block">
               <a target="_blank" href="https://birbswap.io" class="text-sm md:text-md p-2 bg-blue-600 hover:bg-blue-500 text-white rounded"> 🐦 Open Birbswap DEX </a>
          </div>
   </div>

         <div class="flex-grow"> </div>
         <div class="flex flex-row py-4 overflow-hidden">
            <img src="@/assets/images/bluebirb.png" class=" " style="width:140px;height:140px"/>
            <img src="@/assets/images/redbirb.png" class=" " style="width:80px;height:80px;margin-left:-25px"  />
         </div>
       </div>
      
     </div>

    <div class="w-container py-6 sm:hidden">
      <div class="my-8 px-4">
                      <a target="_blank" href="https://swap.birbtoken.com" class="text-sm md:text-md p-2 bg-blue-600 hover:bg-blue-500 text-white rounded"> 🐦 Open Birbswap DEX </a>
          </div>
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
     <div class=" w-container text-white">

       <div class="text-3xl mb-8 px-2"> Community </div> 

        <div class="text-md lg:text-lg text-center  "> The greater BIRB community is growing every day and already has 5000+ members. Visit one of our social communities below and join us! </div> 


       <div class=" text-center  m-4">

          <div class="w-1/2   " style="margin:0 auto;">
           <a class="inline-block bg-gray-200 p-2 text-black border-black border-4  m-2" href="https://discord.gg/VvgGuW6" target="_blank"> BIRB Discord </a> 
           <a class="inline-block bg-gray-900 p-2 text-white   m-2 " href="https://www.reddit.com/r/BirbToken/" target="_blank"> BIRB Reddit </a> 
          </div>

       </div>



     </div>
   </div>


     <div class="section  bg-gray-900 py-4 text-white py-16">
     <div class=" w-container text-white">

       <div class="text-3xl mb-8 px-2"> Trade BIRB </div> 

        <div class="text-lg text-center  "> Buy and Sell BIRB on Decentralized Exchanges </div> 
 
       <div class="  text-center m-4">

         
           <a class="inline-block bg-pink-600 p-2 text-white" href="https://www.birbswap.io/#/swap?outputCurrency=0x216d7636b791Ed93BFD56BF696b35A14115416ab" target="_blank"> 🐦 BirbswapV3 - BIRB/ETH Pair </a> 
        
       
       </div>


       



     </div>


      <div class=" w-container text-white mt-8">

     
        <div class="text-lg text-center  "> BIRB can also be claimed using Mineable tokens!     </div> 
        
       <div class="  text-center m-4">

         <router-link class="inline-block bg-purple-600 p-2 text-white" to="/claim" > 🐣  Claim your BIRB </router-link> 
        
       
       </div>



     </div>

   </div>

    <div class="section  bg-gray-800 py-4 text-white py-16">
     <div class=" w-container text-white">

       <div class="text-3xl mb-8 px-2">  BIRB Farming </div> 

        <div class="text-lg text-center  "> Farming BIRB earns you rewards over time with zero risk of Impermanent Loss.    </div> 
        
       <div class="  text-center m-4">

         <router-link class="inline-block bg-blue-600 p-2 text-white" to="/farm"  > Start farming BIRB </router-link> 
        
       
       </div>



     </div>
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
