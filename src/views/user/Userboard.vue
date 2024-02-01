<template class="position-relative">
  <UserNavbar />
  <div class="container-fluid mt-3">
    <ToastMessages />
    <router-view/>
  </div>
  <UserFooter /> 
  <div
    class="position-fixed start-0 bottom-0 p-3"
    style="z-index: 1000"
  >
    <button
      type="button"
      class="btn btn-dark text-white rounded-circle opacity-50"
      style="height: 30px; width: 30px; padding: 0;"
      @click="scrollToTop"
    >
      <i class="bi bi-arrow-up"/>
    </button>
  </div>
</template>


<script>
import UserNavbar from '@/components/UserNavbar.vue'
import UserFooter from '@/components/UserFooter.vue'
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ToastMessages,
    UserNavbar,
    UserFooter,
  },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0
      })
    }
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>