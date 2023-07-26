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
  <RouterView></RouterView>
  </div>
  </template>
  
  <script>
  export default {

};
  </script>
  
  <style></style>
  