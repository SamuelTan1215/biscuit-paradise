<template>
    <section class="py-5 bg-light">
      <div class="container">
        <div class="service text-center px-4 py-5 mb-5">
          <div class="text-white text-center p-3 cover d-inline-block">
            <h1 class="fw-bold my-3">聯絡我們</h1>
            <p class="mb-0">我們將盡快安排專員與您聯繫</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 mb-3 mb-md-0">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">姓名</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label">電話</label>
                <input type="text" class="form-control" id="phone" />
              </div>
              <div class="col-12">
                <label for="Email" class="form-label">Email</label>
                <input type="text" class="form-control" id="Email" />
              </div>
              <div class="col-12">
                <label for="" class="form-label">聯繫內容</label>
                <textarea class="form-control" id="" rows="6"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-lg">送出表單</button>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58913.69113296482!2d120.27104849233065!3d22.649847496498833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fb21935ccd%3A0xf44e336c93ecbd!2z5oSb5rKz!5e0!3m2!1szh-TW!2stw!4v1626020589805!5m2!1szh-TW!2stw"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 text-dark text-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <i class="bi bi-telephone fs-1 text-primary"></i>
            <b class="d-block mt-3">+886 0988-888888</b>
          </div>
          <div class="col-sm-4">
            <i class="bi bi-geo-alt fs-1 text-primary"></i>
            <b class="d-block mt-3">高雄市XX區XX路XX號</b>
          </div>
          <div class="col-sm-4">
            <i class="bi bi-envelope fs-1 text-primary"></i>
            <b class="d-block mt-3">customer-service@example.com</b>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.service {
    background-image: url("../../assets/images/img/main.jpg");
    background-position: center;
    height: 350px;
    background-size: cover;
}

.cover {
    background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));
}
</style>