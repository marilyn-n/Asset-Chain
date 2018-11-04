<template>
  <div class="login-form">
    <h1>login form</h1>
   <!-- app card -->
      <app-input />
      <app-input />
      <app-button />

      <p>if you dont have an account<a href="http://localhost:8080/#/signin">sign in</a></p> 
  </div>
</template>

<script>
export default {
  components: {
    AppInput: () => import('@/components/AppInput'),
    AppButton: () => import('@/components/AppButton'),
    AppCard: () => import('@/components/AppCard')
  },
  data () {
    return {
    }
  }

}
</script>

<style lang="scss">
@import "@/styles/vars.scss";

</style>
