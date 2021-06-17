<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6 bg-gray-800">
         <div class="text-white text-xl md:text-4xl p-2"> Claim BIRB 🐣 </div>


              <div v-if="!connectedToWeb3" class="p-4 text-white">

                   <div class="text-md my-2"> Please connect to Web3  </div>
 
                  <div  @click="connectToWeb3" class="button bg-blue-500 hover:bg-blue-700 text-sm text-black font-bold my-2 py-1 px-2 rounded cursor-pointer inline ">Login with Web3</div>


                </div>

                  <div v-if="connectedToWeb3">

                  <div class="text-xs mt-4 p-4 text-white"> Your 0xBTC Balance: <div class="text-md inline"> {{ formatRawAmount( balances["0xBTC"],8)  }} </div> </div>
                  

                  <div class="flex flex-row  p-4" > 
                  <input class="p-2 text-black rounded border-black border-2 inline-block my-2" type="number" v-model="claimAmountFormatted" /> 

                  <div   @click="claimBirb()" class="bg-purple-500 hover:bg-purple-600 my-2 p-2 rounded text-center cursor-pointer  inline-block"> Claim BIRB </div>
         
                </div> 
            </div>


      
     </div>
   </div>

   <div class="section autospacing bg-gray-900  ">
     <div class="w-container">
      
       <div class="text-white text-xl md:text-4xl p-2"> Burn BIRB 🔥 </div>
 

                  <div v-if="connectedToWeb3">

                  <div class="text-xs mt-4 p-4 text-white"> Your BIRB Balance: <div class="text-md inline"> {{ parseFloat( formatRawAmount( balances["birb"],8) )  }} </div> </div>
                  

                  <div class="flex flex-row  p-4" > 
                  <input class="p-2 text-black rounded border-black border-2 inline-block my-2" type="number" v-model="burnAmountFormatted" /> 

                  <div   @click="burnBirb()" class="bg-yellow-500 hover:bg-yellow-600 my-2 p-2 rounded text-center cursor-pointer  inline-block"> Burn BIRB </div>
         
                </div> 
            </div>


     </div>
   </div>
  
   <div class="section  bg-gray-800 py-4 text-white py-16 px-4">

     <p class="text-sm"> In order to stabilize price and enable zero-loss farming, BIRB is atomically pegged to the largest mineable token  (0xBTC) on the Ethereum Mainnet Network.  This means that BIRB is bi-directionally hot-swappable with 0xBTC at a 100,000,000:1 ratio.  (That's 8 zeroes!) 🐦 
       
     </p>
    
   </div>

 
 
 
    
    
   

  <Footer/>

</div>
</template>


<script>
import Navbar from './components/Navbar.vue'; 
import Footer from './components/Footer.vue';

import Web3Plug from '../js/web3-plug.js'  

import swal from 'sweetalert';

const birbContractABI = require('../contracts/BirbToken.json')

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
        //   this.findAmountMinted()

        this.readBalances()
         
      }.bind(this));
      this.web3Plug.getPlugEventEmitter().on('error', function(errormessage) {
            console.error('error',errormessage);
            
            this.web3error = errormessage
          
          }.bind(this));
          this.web3Plug.reconnectWeb()


  },
    mounted: function () {

     // this.readBalances()

     setInterval(this.readBalances.bind(this), 8000)
      this.connectedToWeb3 = this.web3Plug.connectedToWeb3()  
   //  this.findAmountMinted()
    
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

        async claimBirb(){

          const claimAmount =  parseFloat( this.claimAmountFormatted ) 

          const estimatedOutputAmount =  parseFloat( this.claimAmountFormatted ) * 100000000

          const claimAmountRaw = this.web3Plug.formattedAmountToRaw( claimAmount , 8   )


          if(isNaN(claimAmount) || claimAmount <= 0){
            
            swal({
            title: "Claim Birb",
            text: `Please enter a valid amount`,
            icon: "error",
            buttons: false,
            dangerMode: false,
          })

            return 

          }

         let chainId = this.web3Plug.getActiveNetId()
        if(!chainId) chainId = 1 

        const contractData = this.web3Plug.getContractDataForNetworkID(chainId)
        const zxBTCTokenAddress = contractData['0xbitcoin'].address
        const birbTokenAddress = contractData['birb'].address


        swal({
            title: "Claim Birb",
            text: `You are converting ${  claimAmount  } 0xBTC to ${ estimatedOutputAmount } BIRB `,
            icon: "success",
            buttons: true,
            dangerMode: false,
          })
          .then(async (willClaim) => {
            if (willClaim) {
              
                let senderAddress = this.web3Plug.getActiveAccountAddress()
                 console.log('claim ', senderAddress)

                 const zxbtcContract = this.web3Plug.getTokenContract(zxBTCTokenAddress)
                 let success = await zxbtcContract.methods.approveAndCall(birbTokenAddress,claimAmountRaw,'0x0' ).send({from: senderAddress })  
                  console.log('response:', success)


                 
            } else {
             // swal("Your imaginary file is safe!");
            }
          });


 
          } ,



        async burnBirb(){

          const burnAmount =  parseFloat( this.burnAmountFormatted ) 

          const estimatedOutputAmount =  parseFloat( this.burnAmountFormatted ) / 100000000.0

          const burnAmountRaw = this.web3Plug.formattedAmountToRaw( burnAmount , 8   )


          if(isNaN(burnAmount) || burnAmount <= 0){
            
            swal({
            title: "Burn Birb",
            text: `Please enter a valid amount`,
            icon: "error",
            buttons: false,
            dangerMode: false,
          })

            return 

          }

         let chainId = this.web3Plug.getActiveNetId()
        if(!chainId) chainId = 1 

        const contractData = this.web3Plug.getContractDataForNetworkID(chainId)
        const zxBTCTokenAddress = contractData['0xbitcoin'].address
        const birbTokenAddress = contractData['birb'].address


        swal({
            title: "Burn Birb",
            text: `You are converting ${  burnAmount  } BIRB to ${ estimatedOutputAmount } 0xBTC `,
            icon: "success",
            buttons: true,
            dangerMode: false,
          })
          .then(async (willBurn) => {
            if (willBurn) {
              
                let senderAddress = this.web3Plug.getActiveAccountAddress()
                 console.log('burn ', senderAddress, estimatedOutputAmount)

                 const birbContract = this.web3Plug.getCustomContract(birbContractABI, birbTokenAddress)


                 let success = await birbContract.methods.withdrawTokens( burnAmount  ).send({from: senderAddress })  
                  console.log('response:', success)


                 
            } else {
             // swal("Your imaginary file is safe!");
            }
          });


 
          } ,





          formatRawAmount(amountRaw, decimals){

            return  this.web3Plug.rawAmountToFormatted(amountRaw,decimals)
          }



  }
}
</script>
