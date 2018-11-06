<template>
  <div class="landing">
    <video src="@/assets/video/Empire.mp4" autoplay loop></video>
    <img src="@/assets/img/ac-logo.png" alt="">
    <router-link :to="{name: 'login'}">
      <app-button
        class="get-started"
        >
      </app-button>
    </router-link>
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

<style lang="scss" scoped>

@import "@/styles/vars.scss";

.landing {
  
  img {
    position: absolute;
    top: 400px;
    left: 450px;
    height: 115px;
    width: 300px;
  }

  video {
  	width: 100%;
  	height: 100%;
  	margin-top: 5px;
  }

  .get-started {
    position: absolute;
    top: 400px;
    left: 750px;
  }
}

</style>
