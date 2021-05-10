<template>

<div>

   <div class="section bg-world px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container">
       <div class="hero-text w-row">
         <div class="w-col w-col-6">
           <div class="text-2xl">BIRB to the moon!</div>
           <div class="text-mg mt-2"> Good birb.</div>
         </div>
         <div class="w-col w-col-6">
         </div>
       </div>
       <div class="div-block">
         <a href="https://www.youtube.com/embed/P_W6aHQ6qW4" target="_blank" class="button1-base w-inline-block">
           <div class="text-block-12">Community Video </div>
         </a>
         <a href="https://etherscan.io/address/0xb6ed7644c69416d67b522e20bc294a9a9b405b31#code" target="_blank" class="button1-base w-inline-block">
           <div>Etherscan Contract Code</div>
         </a>
         <a href="https://github.com/EthereumCommonwealth/Auditing/issues/102" target="_blank" class="button1-base w-inline-block">
           <div>Smart Contract Audit</div>
         </a>
         <a href="https://0xbtc.info/" target="_blank" class="button1-base w-inline-block">
           <div>0xBTC Block Explorer</div>
         </a>
       </div>
     </div>
   </div>

   <div class="section autospacing">
     <div class="w-container">
       <div class="w-row">
         <div class="w-col w-col-6 mt-4">
           <div class="intro-list">
             <div class="list-item">▸ Launched Feb 2018</div>
             <div class="list-item">▸ No Premine</div>
             <div class="list-item">▸ No ICO</div>
             <div class="list-item">▸ Tokens are created in exchange for SHA3 Proof-of-Work submitted to the contract</div>
             <div class="list-item">▸ The contract auto-adjusts difficulty with no oracles or human control.</div>
             <div class="list-item">▸ Immune from 51% attacks</div>
             <div class="list-item">▸ Trustless with Zero Human Authority</div>
           </div>
         </div>
         <div class="w-col w-col-6">
           
         </div>
       </div>
     </div>
   </div>
  
   <div class="section ctas">
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
   <div class="section autospacing corkboard">
     <div class="w-container">
       <div class="w-row">
         <div class="column-12 w-col w-col-6">
           <div class="div-block-7">
             <h2 class="heading-2">Community Corkboard</h2>
             <div class="text-block-2">See projects, tips and tools built by 0xBTC open-source developers</div>
             <a href="https://github.com/0xBrian/awesome-0xbitcoin" target="_blank" class="button1-base community w-inline-block">
               <div class="text-block-3">Awesome-0xBTC Repo ▷</div>
             </a>
           </div>
         </div>
       
       </div>
     </div>
   </div>
   <div class="section autospacing testimonial">
     <div class="w-container">
       <div class="quote">
         <p class="paragraph-4">&quot;... I was pleased to find that this ... was one of the most interesting and unique small projects I&#x27;ve had the pleasure to research ...&quot;</p>
         <div class="text-block-4">- Nik Patel, Altcoin Trader&#x27;s Handbook - <a href="https://www.altcointradershandbook.com/coin-report-0xbitcoin/" target="_blank" class="text-link">Read his full report</a></div>
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
