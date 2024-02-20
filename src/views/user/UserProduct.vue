<template>
  <LoadingComp :active="isLoading" />
  <div class="container py-lg-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user" active-class="active-reset">
            首頁
          </router-link>
        </li>
        <li class="breadcrumb-item" >
          <router-link to="/user/productList" class="active-reset">
            產品列表
          </router-link>
        </li>
        <li class="breadcrumb-item " aria-current="page" exact-active-class="active-reset">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row row-cols-1 justify-content-center">
      <div class="col col-md-7">
        <div class="position-relative">
          <img
            :src="product.imageUrl"
            :alt="product.title"
            class="img-fluid mb-3"
          />
          <button
            type="button"
            class="btn btn-primary rounded-circle fs-4 text-white position-absolute border-0 favBtn"
            :class="{ activeFav: favorite.includes(product.id) }"
            @click="toggleFavorite(product)"
          >
            <i class="bi bi-suit-heart" />
          </button>
        </div>
      </div>
      <div class="col col-md-5">
        <h2 class="d-flex align-items-center text-primary fw-bold">
          {{ product.title }}
          <span class="badge bg-warning rounded-pill fs-5 ms-3 text-dark">
            {{ product.category }}
          </span>
        </h2>
        <hr />
        <div class="fs-4">{{ product.description }}</div>
        <div class="py-3 text-secondary" style="white-space: pre-line">
          {{ product.content }}
        </div>
        <div class="h5" v-if="product.price === product.origin_price">
          {{ $formatFilters.currency(product.origin_price) }} 元
        </div>
        <del class="h6" v-if="product.price !== product.origin_price"
          >原價 {{ $formatFilters.currency(product.origin_price) }} 元</del
        >
        <div
          class="h5 text-danger"
          v-if="product.price !== product.origin_price"
        >
          現在只要 {{ $formatFilters.currency(product.price) }} 元
        </div>
        <div class="input-group pb-3" style="width: 200px">
          <input type="number" min="1" class="form-control border-dark"  v-model="qty" />
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="addToCart(product.title, product.id, qty)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs pt-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="first-tab"
          data-bs-toggle="tab"
          data-bs-target="#first"
          type="button"
          role="tab"
          aria-controls="first"
          aria-selected="true"
        >
          關於產品
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="second-tab"
          data-bs-toggle="tab"
          data-bs-target="#second"
          type="button"
          role="tab"
          aria-controls="second"
          aria-selected="false"
        >
          關於出貨
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="third-tab"
          data-bs-toggle="tab"
          data-bs-target="#third"
          type="button"
          role="tab"
          aria-controls="third"
          aria-selected="false"
        >
          關於物流
        </button>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade active show"
        id="first"
        role="tabpanel"
        aria-labelledby="first-tab"
      >
        <ul>
          <li>所有商品均提供詳細的尺寸、細節，確保您充分了解每項產品。</li>
          <li>
            商品顯示在架上即代表有現貨，但有時貨物仍在運送途中，造成短暫等待，敬請見諒。
          </li>
          <li>
            退換貨事宜，請參閱我們的常見問題頁面<a
              class="link"
              @click.prevent="$router.push('/user/faq')"
              style="cursor: pointer"
              >常見問題</a
            >。
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="second"
        role="tabpanel"
        aria-labelledby="second-tab"
      >
        <ul>
          <li>一般情況下，我們將在48小時內快速為您發貨，確保您第一時間收到心儀的產品</li>
          <li>
            若未能及時出貨，請您隨時聯繫我們的客服團隊，我們將竭誠為您處理。
          </li>
          <li>
            在節日或訂單量龐大的情況下，可能會稍微延後出貨，敬請見諒。我們致力於讓每一位顧客都能享受到最高品質的美味體驗！感謝您的理解與支持。
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="third"
        role="tabpanel"
        aria-labelledby="third-tab"
      >
        <ul>
          <li>
            我們與各大物流平台合作，發貨後通常會於1至2天內送到您手上，請耐心等待。
          </li>
          <li>
            如需查詢物流進度，歡迎至物流平台官網的「訂單查詢」頁面進行查詢。
          </li>
        </ul>
      </div>
    </div>
    <hr />

  </div>
</template>


<style lang="scss"  scoped>
.favBtn {
    top: 10px;
    right: 10px;
}
.activeFav{
  background-color:crimson;
}
.router-link-exact-active {
  background-color: transparent !important;
  font-weight: normal !important;
  color: inherit !important;
}
.active-reset {
  text-decoration: none;
  color: #212529;
}
</style>

<script>
import favorite from '@/methods/favorite'

export default {
  data () {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1,
      isLoading: false,
      favorite: favorite.getFavorite() || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product
        }
        this.isLoading = false
      })
    },
    goToProduct (id) {
      this.$router.push(`/productsList/${id}`)
    },
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
    addToCart (item, id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((res) => {
        this.emitter.emit('update-cart', id)
        this.$httpMessageState(res, `將"${item}"加入購物車`)
        this.isLoading = false
      })
    },
    toggleFavorite (item) {
      if (this.favorite.includes(item.id)) {
        this.favorite.splice(this.favorite.indexOf(item.id), 1)
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          `將"${item.title}"移除我的最愛`
        )
      } else {
        this.favorite.push(item.id)
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          `將"${item.title}"加入我的最愛`
        )
      }
      favorite.addToFavorite(this.favorite)
      this.emitter.emit('update-favorite', this.favorite)
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getProducts()
  }
}
</script>
