<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid" style="margin-left: 30px; margin-right: 30px;">
            <RouterLink to="/console" class="navbar-brand">
              <span style="font-weight: bold;">Metanet Future</span> Cloud Service <span style="font-size: small;color: #001E8C;">Enterprise</span>
            </RouterLink>
            <RouterLink to="/" class="btn btn-outline-dark btn-sm">나가기</RouterLink>
          </div>
        </nav>
      </header>
      <main class="form-signin">
        <div class="text-center">
    <form>
      <h1 class="h1 mb-3 fw-normal">MFCS</h1>
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">이메일을 입력해주세요.</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">비밀번호를 입력해주세요</label>
      </div>
      <div class="d-flex justify-content-end">
        <RouterLink to="/console/joinus" class="mb-2">회원가입</RouterLink>
      </div>
      <div> 
        <button class="btn btn-dark" type="submit" style="width: fit-content; height: auto;">로그인</button>
      </div>
    </form>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {

}
  </script>
  
  <style>
  form {
    max-width: 350px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .form-floating {
    margin-bottom: 10px;
  }
  </style>
  