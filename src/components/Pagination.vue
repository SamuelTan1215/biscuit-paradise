<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="goPrev(currentPageInside)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)"> {{ page }} </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="goNext(currentPageInside)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { 
  props: ['pages','currentPageInside'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
    goNext(currentPageInside){
      currentPageInside +=1;
      this.$emit('go-Next', currentPageInside);
    },
    goPrev(currentPageInside){
      currentPageInside -=1;
      this.$emit('go-Prev', currentPageInside);
    }
  },
};
</script>