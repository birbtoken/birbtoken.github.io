<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6">
       <div class="text-white flex flex-row">
         <div class="w-1/2">
           <div class="text-xl md:text-4xl p-2">The decentralized meme token with programmed scarcity and rewards.</div>
           <div class="text-mg mt-2 p-2"> Good birb.</div>
         </div>

         <div class="flex-grow"> </div>
         <div class="flex flex-row p-4">
            <img src="@/assets/images/bluebirb.png" class=" " style="width:140px;height:140px"/>
            <img src="@/assets/images/redbirb.png" class=" " style="width:80px;height:80px"  />
         </div>
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

       <div class="text-3xl mb-8"> Community </div> 

        <div class="text-md lg:text-lg text-center  "> The greater BIRB community is growing every day and already has 25K+ members. Please visit one of our social communities below and join us! </div> 


       <div class=" text-center  m-4">

          <div class="w-1/2   " style="margin:0 auto;">
           <a class="inline-block bg-blue-600 p-2 text-white   m-2" href=" " target="_blank"> BIRB Discord </a> 
           <a class="inline-block bg-blue-600 p-2 text-white   m-2" href=" " target="_blank"> BIRB Reddit </a> 
          </div>

       </div>



     </div>
   </div>


     <div class="section  bg-gray-900 py-4 text-white py-16">
     <div class=" w-container text-white">

       <div class="text-3xl mb-8"> Trade BIRB </div> 

        <div class="text-lg text-center  "> Buy and Sell BIRB on Decentralized Exchanges </div> 
 
       <div class="  text-center m-4">

         
           <a class="inline-block bg-blue-600 p-2 text-white" href="https://uniswap.io" target="_blank">   UniswapV3 - BIRB/ETH  </a> 
        
       
       </div>



     </div>
   </div>

     <div class="section  bg-gray-800 py-4 text-white py-16">
     <div class=" w-container text-white">

       <div class="text-3xl mb-8">  BIRB Rewards </div> 

        <div class="text-lg text-center  "> All BIRB starts life inside of 'The Guild DAO' decentralized community.  In order to mint BIRB, shares in The Guild must be forfeited, paying out cryptocurrency to all other members of The Guild DAO.  This makes distribution of BIRB decentralized, fair, and rewarding to the Ethereum community.    </div> 
        
       <div class="  text-center m-4">

         <a class="inline-block bg-blue-600 p-2 text-white" href="https://guild.0xbtc.io" target="_blank"> Visit the Guild DAO Website </a> 
        
       
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
