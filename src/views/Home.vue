<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6">
       <div class="text-white flex flex-row">
         <div class="w-1/2">
           <div class="text-4xl p-2">The decentralized meme token with programmed scarcity, all inside of Ethereum.</div>
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
  
   <div class="section  bg-gray-800 py-4 text-white ">
     <div class="autospacing w-container">
       <div class="w-row">
         <div class="column-4 w-col w-col-6"> 
           <h2 class="cta heading">Join the Community</h2>
           <div class="div-block-3"><a href="https://www.reddit.com/r/0xbitcoin/" target="_blank" class="button2-base w-inline-block"><img src="images/reddit-icon.svg" height="20" alt="" class="button2image"><div class="text-block-7">Reddit</div></a><a href="https://discordapp.com/invite/JGEqqmS" target="_blank" class="button2-base w-inline-block"><img src="images/discord-icon.svg" height="20" alt="" class="button2image"><div class="text-block-8">Discord</div></a><a href="https://github.com/0xbitcoin" target="_blank" class="button2-base w-inline-block"><img src="images/github-icon.svg" height="20" alt="" class="button2image"><div class="text-block-9">Github</div></a></div>
         </div>
          
       </div>
       <div class="w-row">
         <div class="column w-col w-col-6"> 

           <h2 class="cta heading">Trade BIRB</h2>



            <div class="div-block-5">
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0xb6ed7644c69416d67b522e20bc294a9a9b405b31" target="_blank" class="cta-image-link w-inline-block">
                <img src="@/assets/images/uniswap.png" width="40" height="40" alt="0xchange logo" class="cta-image"><div class="cta-link">UniswapV2</div></a>

               
          </div>


         </div>
         <div class="column-2 w-col w-col-6"> 
           <h2 class="cta heading">Compatible Wallets</h2>
           <div class="div-block-6">
             <a href="https://metamask.io/" target="_blank" class="cta-image-link w-inline-block">
             <img src="@/assets/images/metamask.svg" width="40" height="40" alt="Metamask" class="cta-image">
             <div class="cta-link">Metamask</div></a>
             </div>
         </div>
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
