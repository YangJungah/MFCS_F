<template>
  <div>
    <header>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid" style="margin-left: 30px; margin-right: 30px;">
    <a class="navbar-brand" href="/"><span style="font-weight: bold;">Metanet Future</span> Cloud Service</a>
    <RouterLink to="/console" class="btn btn-outline-dark btn-sm">콘솔로 이동</RouterLink>
    </div>
</nav>
  </header>
  <main>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3">
      <img src="./img/banner_mfcs.png" style="width: 100%; height: auto;">
  </div>
    <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom" >추천</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="d-flex flex-column align-items-start gap-2">
        <h3 class="fw-bold">복잡한 클라우드의 간결한 해답, <br>메타넷 MFCS </h3>
        <p class="text-muted">디지털 혁신의 기본 환경인 클라우드를 쉽게 만들고 빠르게 실행해보세요. <br>MFCS로 가능합니다! </p>
        <RouterLink to="/console" class="btn btn-dark btn-md">사용해보기</RouterLink>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div class="d-flex flex-column gap-2">
          <div
          class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3" style="background-color: #001E8C;">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#collection" />
            </svg>
          </div>
          <h4 class="fw-semibold mb-0">가상머신</h4>
          <p class="text-muted">MFCS 가상머신은 몇가지 선택과 설정만으로 단 몇초만에 생성이 가능합니다. 나의 환경에 꼭 맞는 가상 머신을 지금 바로 만들어 보세요.</p>
        </div>

        <div class="d-flex flex-column gap-2">
          <div
            class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3" style="background-color: #001E8C;">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#gear-fill" />
            </svg>
          </div>
          <h4 class="fw-semibold mb-0">스토리지</h4>
          <p class="text-muted">VM을 위한 고성능의 내구성이 뛰어난 디스크 스토리지를 관리해보세요. 대용량의 비정형 데이터를 만드는 데 최적화된 MFCS의 Blob 스토리지를 만들어보세요.</p>
        </div>

        <div class="d-flex flex-column gap-2">
          <div
          class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3" style="background-color: #001E8C;">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#speedometer" />
            </svg>
          </div>
          <h4 class="fw-semibold mb-0">가상 네트워크</h4>
          <p class="text-muted">가상 네트워크를 생성하고 관리하는 서비스 입니다. 가상 네트워크를 사용하면 다양한 리소스가 서로 안전하게 통신하고, 인터넷 및 온프레미스 네트워크와 연결할 수 있습니다.</p>
        </div>

        <div class="d-flex flex-column gap-2">
          <div
          class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3" style="background-color: #001E8C;">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#table" />
            </svg>
          </div>
          <h4 class="fw-semibold mb-0">안전하게 백업</h4>
          <p class="text-muted">백업 서비스는 데이터의 보존, 복원 및 재해 복구를 지원합니다. 다양한 데이터 워크로드를 안전하게 복구 하기 위하여 백업 서비스를 시작해보세요.</p>
      </div>
    </div>
  </div>
  </div>
  </main>
  </div>
</template>