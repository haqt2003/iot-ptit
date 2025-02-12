<template>
  <div
    class="bg-[url('@/assets/images/bg.svg')] bg-center bg-no-repeat bg-cover h-[100vh] w-[100vw] py-6 overflow-x-hidden"
  >
    <div class="max-w-[1280px] mx-auto glassmorphism-container p-5">
      <div
        class="glassmorphism w-[340px] h-[64px] mx-auto flex items-center justify-center gap-10"
      >
        <router-link to="/"
          ><img
            src="../assets/images/dashboard-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
        <router-link to="/history"
          ><img
            src="../assets/images/history-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
        <router-link to="/sensor"
          ><img
            src="../assets/images/sensor-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
        <div
          class="h-9 w-9 bg-[#4E96FF] rounded-[10px] flex justify-center items-center"
        >
          <img
            src="../assets/images/profile-icon.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
      </div>
      <div class="mt-[48px] w-full glassmorphism h-[720px] p-10">
        <div class="flex justify-between gap-10">
          <div class="h-[650px]">
            <div class="rounded-[24px] h-[400px] w-[400px] overflow-hidden">
              <img src="../assets/images/img.svg" alt="" />
            </div>
            <div class="text-[20px]">
              <div class="mt-6 font-bold text-[32px] text-center gap-4">
                Trần Quang Hà
              </div>
              <div class="mt-2 text-center">B21DCPT007</div>
              <div class="mt-2 text-center font-light">haqt2003@gmail.com</div>
              <div class="flex mt-8 items-center justify-center gap-4">
                <a
                  href="https://github.com/haqt2003/iot-ptit"
                  target="_blank"
                  class="flex glassmorphism items-center justify-center gap-4 w-[160px] py-2"
                >
                  <img src="../assets/images/github-icon.svg" alt="" />
                  <span>Github</span>
                </a>
                <a
                  href="https://github.com/haqt2003/iot-ptit"
                  target="_blank"
                  class="flex glassmorphism items-center justify-center gap-3 w-[160px] py-2"
                >
                  <img src="../assets/images/web-icon.svg" alt="" />
                  <span>API Docs</span>
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-[24px] overflow-hidden w-[720px] h-[640px]">
            <object
              data="https://firebasestorage.googleapis.com/v0/b/the-best-records.appspot.com/o/tmp.pdf?alt=media&token=5e76b706-b4b6-438a-9652-1fd842c76d2a"
              type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
