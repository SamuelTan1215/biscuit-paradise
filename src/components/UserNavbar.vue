<template>
  <div
    class="bg-light sticky-top"
    style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)"
  >
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <router-link @click="hideCollapse()" to="/user" class="navbar-brand fs-3 fw-bold px-3 hvr-fade" >
            <img
              src="../assets/images/logo.png"
              alt="logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />餅乾天堂
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            @click="collapseController('toggle')"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
            ref="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <router-link @click="hideCollapse()" to="/user/productList" 
              class="nav-link fs-5 hvr-fade" 
                >產品列表</router-link
              >
              <router-link @click="hideCollapse()" to="/user/about" class="nav-link fs-5 hvr-fade"
                >關於我們</router-link
              >
              <router-link @click="hideCollapse()" to="/user/faq" class="nav-link fs-5 hvr-fade"
                >常見問題</router-link
              >
            </div>
            <ul class="nav fs-5 navbar-nav">
              <li class="nav-item position-relative">
                <router-link @click="hideCollapse()" to="/user/favorite" class="nav-link cursor-pointer" title="我的最愛">
                  <span
                    class="position-absolute top-25 end-0 badge rounded-pill bg-danger badgeNum"
                    :class="{ 'd-none': favNum === 0 }"
                    style="font-size: 10px"
                    >{{ favNum }}</span
                  >
                  <i class="bi bi-suit-heart-fill fs-3"/>
                  <span class="d-lg-none fs-5"> 我的最愛</span>
                </router-link>
              </li>
              <li class="nav-item position-relative">
                <router-link @click="hideCollapse()" to="/user/cart" class="nav-link cursor-pointer" title="購物車"
                  ><span
                    class="position-absolute top-25 end-0 badge rounded-pill bg-danger badgeNum"
                    style="font-size: 10px"
                    :class="{ 'd-none': cartNum === 0 }"
                    >{{ cartNum }}</span
                  ><i class="bi bi-cart3 fs-3"></i
                  ><span class="d-lg-none fs-5"> 購物車</span></router-link
                >
              </li>
              <li class="nav-item">
                <router-link @click="hideCollapse()" to="/user/service" class="nav-link cursor-pointer" title="客服專區"
                  ><i class="bi bi-person-workspace fs-3"></i>
                  <span class="d-lg-none fs-5"> 客服專區</span></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hvr-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {
  background-color: #6bdace;
  color: white;
  cursor: pointer;
}
.cursor-pointer:hover,.cursor-pointer:focus,.cursor-pointer:active {
  cursor: pointer;
}
</style>

<script>
import favorite from '@/methods/favorite'
import { Collapse } from 'bootstrap'

export default {
  data () {
    return {
      favorite: favorite.getFavorite() || [],
      cartNum: 0,
      favNum: 0,
      navbarCollapse:{},
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cartNum = res.data.data.carts.length
      })
    },
    getFavorite () {
      this.favorite = favorite.getFavorite() 
      if (this.favorite == null) {
        this.favorite = {}
      }
      this.favNum = this.favorite.length
    },
    hideCollapse(){
      this.navbarCollapse.hide()
    },
    collapseController(method = 'hide') {
      this.navbarCollapse[method]();
    },
  },
  created () {
    this.getCart()
    this.getFavorite()
  },
  mounted () {
    this.emitter.on('update-cart', this.getCart)
    this.emitter.on('update-favorite', this.getFavorite)
    this.navbarCollapse= new Collapse(this.$refs.navbarNavAltMarkup, {
      toggle: false,
    })
  }
}
</script>