<template>
  <div class="bg-primary py-4">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-6 d-flex align-items-center">
          <p class="text-smaller text-light mb-0">Designed © 2022 by EvaLi</p>
        </div>
        <div class="col-6">
          <ul
            class="
              list-unstyled
              h4
              d-flex
              justify-content-end
              align-items-center
              mb-0
            "
          >
            <li>
              <router-link to="/" class="btn btn-sm btn-outline-light me-3">
                <i class="bi bi-house"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="btn btn-sm btn-outline-light">
                <i class="fab fa-whmcs fa-fw"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
