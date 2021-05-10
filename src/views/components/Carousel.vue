<template>
  <div   class="slider w-slider">
    <div class="mask maskedit w-slider-mask  " >

      

     
    </div>
    <div class="left-arrow w-slider-arrow-left">
      <div class="icon-2 w-icon-slider-left"></div>
    </div>
    <div class="right-arrow w-slider-arrow-right">
      <div class="icon w-icon-slider-right"></div>
    </div>
    <div class="slide-nav w-slider-nav w-slider-nav-invert"></div>
  </div>
</template>


<script>


export default {
  name: 'Carousel',
  props: [],
  data() {
    return {
      slideIndex:0
    }
  },
  created(){
    setInterval(this.incrementSlideIndex,24000);
  },
  methods: {
    incrementSlideIndex()
    {
      this.slideIndex++;
      if(this.slideIndex>1) this.slideIndex=0;
    }
  }
}
</script>
