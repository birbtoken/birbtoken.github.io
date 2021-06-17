<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6 text-white">
         <div class="text-white text-xl md:text-4xl p-2"> BIRB Farming</div>

          <div class="text-sm mt-4 p-4 text-white "> Your BIRB Balance: <div class="text-md inline"> {{ formatRawAmount( balances["birb"],8)  }} </div> </div>
                  
          <div class="p-4">
               <a class="bg-pink-500 p-2 rounded text-white" href="https://app.uniswap.org/#/add/0xB6eD7644C69416d67B522e20bC294A9a9B405B31/0x216d7636b791Ed93BFD56BF696b35A14115416ab/500" target="_blank"> Farm BIRB on UniswapV3 </a>
          </div>

     </div>
   </div>

   <div class="section autospacing bg-gray-900 py-6  ">
     <div class="w-container">
       <div class="w-row">
         <div class="text-white text-xl md:text-4xl p-2"> Farming Recommendations </div>

          <ul class="text-gray-200 my-8">
            <li>Use a 0.05% fee</li>
            <li>Min price of 90000000 BRB per 0xBTC</li>
            <li>Max price of 110000000 BRB per 0xBTC</li>

          </ul>


          <p class="text-gray-200"> As traders buy and sell BIRB, and as the price of BIRB and 0xBTC change, arbitrageurs and traders will often use the high-liquidity BIRB-0xBTC pool as part of the route.  When this happens, all liquidity providers earn a small trading fee as a staking reward.  Since the assets can be claimed for one another at a flat rate, there is no risk of Impermanent Loss.  This means that Liquidity Providers make risk-free income.  </p> 

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

import Web3Plug from '../js/web3-plug.js'  

export default {
  name: 'Home',
  props: [],
  components: {Navbar, Footer},
  data() {
    return {
      web3Plug: new Web3Plug()  ,
      connectedToWeb3: false,
      balances: {} ,
      claimAmountFormatted: 0,
      burnAmountFormatted: 0
    }
  },
  created(){

      this.web3Plug.getPlugEventEmitter().on('stateChanged', function(connectionState) {
        console.log('stateChanged',connectionState);
         
        this.activeAccountAddress = connectionState.activeAccountAddress
        this.activeNetworkId = connectionState.activeNetworkId 
        this.connectedToWeb3 = this.web3Plug.connectedToWeb3()
        

        this.readBalances()
         
      }.bind(this));
      this.web3Plug.getPlugEventEmitter().on('error', function(errormessage) {
            console.error('error',errormessage);
            
            this.web3error = errormessage
          
          }.bind(this));
          this.web3Plug.reconnectWeb()


  },
    mounted: function () {

    

     setInterval(this.readBalances.bind(this), 8000)
      this.connectedToWeb3 = this.web3Plug.connectedToWeb3()  
   
    
  }, 
  methods: {
     connectToWeb3(){
            this.web3Plug.connectWeb3( )
      },

      async readBalances(){
        let userAddress = this.web3Plug.getActiveAccountAddress()


        let chainId = this.web3Plug.getActiveNetId()
        if(!chainId) chainId = 1 

        const contractData = this.web3Plug.getContractDataForNetworkID(chainId)
        const zxBTCTokenAddress = contractData['0xbitcoin'].address
        const birbTokenAddress = contractData['birb'].address


        this.balances['0xBTC'] = await this.web3Plug.getTokenBalance(zxBTCTokenAddress, userAddress)
        this.balances['birb'] = await this.web3Plug.getTokenBalance(birbTokenAddress, userAddress)

        console.log('this.balances',this.balances)
         this.$forceUpdate()


      },
  



          formatRawAmount(amountRaw, decimals){

            return  this.web3Plug.rawAmountToFormatted(amountRaw,decimals)
          }



  }
}
</script>