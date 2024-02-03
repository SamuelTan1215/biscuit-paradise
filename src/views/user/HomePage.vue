<template>
  <LoadingComp :active="isLoading" />
  <header class="container pt-1">
    <div class="text-center header px-4 py-5">
      <div class="text-white text-center p-3 cover d-inline-block">
        <p class="mb-0">探索餅乾的美味，<br class="d-block d-md-none"> 發現美味的幸福！</p>
        <h1 class="fw-bold my-3">獨一無二的<br class="d-block d-md-none">甜蜜滋味</h1>
        <p class="mb-0">在這片甜蜜的土地上，<br class="d-block d-md-none">快樂是我們共同的語言。</p>
      </div>
    </div>
  </header>

  <section class="container py-5" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
    <h2 class="text-center lh-lg">—— 主要服務項目 ——</h2>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-cookie"></i></h5>
            <h5 class="card-title fw-bold">美味的餅乾</h5>
            <p class="card-text">
              精心烘焙的餅乾，最頂級的原料！<br class="d-none d-md-block">
               保證每一口都帶來滿滿的幸福感，為您打造最美味的
               餅乾體驗。
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-rocket-takeoff"></i></h5>
            <h5 class="card-title fw-bold">快速的出貨</h5>
            <p class="card-text">
              各大物流皆配合，確保最新鮮風味！<br class="d-none d-md-block">
              下單後，我們將第一時間出貨，讓美味隨時隨地
              陪伴著您。
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-people"/></h5>
            <h5 class="card-title fw-bold">客製化服務</h5>
            <p class="card-text">
              您的需求,我們的動力！<br class="d-none d-md-block">
               提供多樣化選擇，貼心客製化需求。無論活動禮盒或獨特口味，歡迎聯絡<a
                href="mailto:example@support.com"
                class="text-decoration-none"
                >客服</a>。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-3">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h3><i class="bi bi-hand-thumbs-up-fill text-warning"/> 精選產品</h3>
        <a
          href="#"
          class="text-decoration-none fs-5 text-end fw-bold"
          @click.prevent="$router.push('/user/productList')"
          >更多美味 <i class="bi bi-arrow-up-right-square-fill"></i></a>
      </div>

      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '576': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="item in products"
          :key="item.id"
          class="h-auto"
        >
          <div class="card h-100 border">
            <img
              :src="item.imageUrl"
              class="card-img-top img-fluid"
              :alt="item.title"
              style="object-fit: cover; height: 200px; cursor: pointer"
              loading="lazy"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title fw-bold text-primary mb-0">
                    {{ item.title }}
                  </h5>
                  <span class="badge bg-warning rounded-pill text-black">
                    {{ item.category }}</span
                  >
                </div>
                <hr />
                <p class="card-text">{{ item.description }}</p>
              </div>
              <div>
                <div class="text-end">
                  <p class="h5" v-if="item.price === item.origin_price">
                    {{ $formatFilters.currency(item.origin_price) }} 元
                  </p>
                  <del
                    class="h6 text-danger"
                    v-if="item.price !== item.origin_price"
                    >原價 {{ $formatFilters.currency(item.origin_price) }} 元</del
                  >
                  <p class="h5" v-if="item.price !== item.origin_price">
                    現在只要 {{ $formatFilters.currency(item.price) }} 元
                  </p>
                </div>
                <div class="text-end position-relative" style="z-index:3;">
                  <button
                    type="button"
                    class="btn btn-primary btnCircle mx-2 rounded-circle fs-4 text-white"
                    :disabled="status.loadingItem === item.id"
                    @click.prevent="addCart(item, item.id)"
                  >
                    <i class="bi bi-cart3"/>
                  </button>
                </div>
              </div>
            </div>
            <a href="#" class="stretched-link" @click.prevent="getProduct(item.id)"></a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>


  <section class="container pt-4" data-aos="fade-left">
    <div class="row flex-row-reverse g-3 ">
      <div class="col-lg-6">
        <img src="../../assets/images/img/products.jpg" alt="餅乾" class="w-100" loading="lazy"/>
      </div>
      <div class="col-lg-6 d-flex align-items-center">
        <div>
          <h2 class="fw-bold">餅乾天堂 <br />幸福的秘密都在這！</h2>
          <p class="lh-lg text-secondary mb-0">
            不只是小朋友的天堂，這裡有各種口味的餅乾等你來探險。從經典到前衛，每一口都是獨特的滋味。讓我們一同探索，讓餅乾成為生活中最美味的冒險！
          </p>
          <p class="text-end text-secondary">一「我們都應該享受美味」</p>
          <div class="text-center">
            <button
            type="button"
            class="btn btn-outline-primary rounded-pill px-3 fw-bold"
            @click.prevent="$router.push('/user/productList')"
          >
            點我去逛逛
          </button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="container pt-3 pb-5" data-aos="fade-right">
    <div class="row flex-row g-3 ">
      <div class="col-lg-6">
        <img src="../../assets/images/img/coupon.jpg" alt="餅乾" class="w-100" loading="lazy"/>
      </div>
      <div class="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
        <div class="text-center">
          <h2 class="fs-1 fw-bold">
            <i class="bi bi-cash-coin text-success"/>
            專屬優惠
            <i class="bi bi-cash-coin text-success"/>
          </h2>
          <p class="fs-3">
          立即領取!<br class="d-lg-none" />
          輸入專屬優惠碼"<span class="text-danger fw-bold">Welcome</span>"<br
            class="d-lg-none"
          />享88折優惠!
          </p>
          <button type="button" class="btn btn-outline-primary rounded-pill px-3 shadow-sm fw-bold" @click="copy">
            點擊領取
          </button>
        </div>
      </div>

    </div>
  </section>

  <section class="container pb-5 py-3">
    <!-- subscribe 是 bg-image 和bg 設定 -->
    <div
      class="subscribe d-flex align-items-center p-5 row-cols-1 "
    >
      <div class="col p-md-4 text-center ">
        <h4 class="fw-bold lh-base">訂閱「餅乾天堂」<br>獲得最新的專屬優惠<br class="d-block d-md-none">資訊!</h4>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control lh-base"
            placeholder="請輸入Email"
          />
          <button class="btn btn-dark" type="button">訂閱</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"  scoped>
.cover{
  background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));
};
.header {
  height: 350px;
  background-image: url("../../assets/images/img/main.jpg");
  background-position: center;
  background-size: cover;
};

.subscribe {
    background-image: url("../../assets/images/img/subscribe.jpg");
    background-position: center;
    background-size: cover;
    height: 200px;
}


</style>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css';

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      status: {
        loadingItem: ''
      },
    }
  },
  inject: ['emitter'],
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay]
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
        }
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/productList/${id}`)
    },
    addCart (item, id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.emitter.emit('update-cart', id)
        this.isLoading = false
        this.$httpMessageState(res, `將"${item.title}"加入購物車`)
      })
    },
    copy () {
      navigator.clipboard.writeText('Welcome')
      alert('已複製專屬優惠碼!')
    },
  },
  created () {
    this.getProducts()
  }
}
</script>