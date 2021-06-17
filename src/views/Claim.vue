<template>

<div>

   <div class="section bg-gray-900 px-0 lg:px-1">

     <div class="mb-8">
       <Navbar />
     </div>

     <div class="w-container py-6">
         <div class="text-white text-xl md:text-4xl p-2"> Claim BIRB  </div>


              <div v-if="!connectedToWeb3">

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

import Web3Plug from '../js/web3-plug.js'  

import swal from 'sweetalert';

export default {
  name: 'Home',
  props: [],
  components: {Navbar, Footer},
  data() {
    return {
      web3Plug: new Web3Plug()  ,
      connectedToWeb3: false,
      balances: {} ,
      claimAmountFormatted: 0
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

    //  setInterval(this.readBalances.bind(this), 5000)
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


        this.balances['0xBTC'] = await this.web3Plug.getTokenBalance(zxBTCTokenAddress, userAddress)

        console.log('this.balances',this.balances)
         this.$forceUpdate()


      },

        async claimBirb(){

          const claimAmount =  parseFloat( this.claimAmountFormatted ) 

        swal({
            title: "Claim Birb",
            text: `You are converting ${  claimAmount  } 0xBTC to BIRB `,
            icon: "success",
            buttons: true,
            dangerMode: false,
          })
          .then(async (willClaim) => {
            if (willClaim) {
                console.log('claim ')

                let userAddress = this.web3Plug.getActiveAccountAddress()

                 
            } else {
             // swal("Your imaginary file is safe!");
            }
          });



            let userAddress = this.web3Plug.getActiveAccountAddress()
           /* let albumContract = '0x232ac5da68f539132f181306b6357363e1496918'
            let approveAmount = '100000000'
            const tokenContract = this.web3Plug.getTokenContract('0xb6ed7644c69416d67b522e20bc294a9a9b405b31')
            let success = await tokenContract.methods.approveAndCall(albumContract,approveAmount,'0x0' ).send({from: senderAddress })  
            console.log('response:', success)*/
          } ,


          formatRawAmount(amountRaw, decimals){

            return  this.web3Plug.rawAmountToFormatted(amountRaw,decimals)
          }



  }
}
</script>
