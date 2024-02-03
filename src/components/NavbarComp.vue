<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">管理者後台</a> -->
      <router-link class="navbar-brand"  to="/dashboard/products" exact-active-class="link-light">管理者後台</router-link>
      <button 
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link" exact-active-class="link-light">產品</router-link>
          <router-link to="/dashboard/orders" class="nav-link" exact-active-class="link-light">訂單</router-link>
          <router-link to="/dashboard/coupons" class="nav-link" exact-active-class="link-light">優惠券</router-link>
          <a href="#" @click.prevent="logout" class="nav-link" exact-active-class="link-light">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
    background-color: transparent ;
    font-weight: 1.1 ;
    color: rgba(255, 255, 255, 0.55) ;
}
</style>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>