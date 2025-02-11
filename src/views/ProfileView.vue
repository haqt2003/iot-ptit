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
      <div class="mt-[48px] w-full glassmorphism h-[734px] p-10">
        <div class="flex gap-[60px]">
          <img src="../assets/images/img.svg" alt="" />
          <div class="text-[20px]">
            <div class="mt-6">
              <span class="font-bold">Họ và tên: </span>Trần Quang Hà
            </div>
            <div class="mt-6">
              <span class="font-bold">Mã sinh viên: </span>B21DCPT007
            </div>
            <a
              href="https://github.com/haqt2003/iot-ptit"
              target="_blank"
              class="mt-6 block"
            >
              <span class="font-bold">Github: </span>github.com/haqt2003/io
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
