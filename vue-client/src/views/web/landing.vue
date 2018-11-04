<template>
  <div class="landing">
    <video src="@/assets/video/Empire.mp4" autoplay loop></video>
    <img src="@/assets/img/ac-logo.png" alt="">
    <app-button
      class="get-started"
      >
    </app-button>
    
  </div>
</template>

<script>
export default {
  components: {
    AppButton: () => import('@/components/AppButton')
  },
  data () {
    return {

    }
  }

};
</script>

<style scoped>

img {
  position: absolute;
  top: 400px;
  left: 450px;
  height: 115px;
  width: 300px;
}

video{
  width: 1420px;
  height: 780;
  margin: 0;
}

.get-started {
  position: absolute;
  top: 400px;
  left: 750px;
}
</style>
