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
        <div
          class="h-9 w-9 bg-[#4E96FF] rounded-[10px] flex justify-center items-center"
        >
          <img
            src="../assets/images/history-icon.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
        <router-link to="/sensor"
          ><img
            src="../assets/images/sensor-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
        <router-link to="profile"
          ><img
            src="../assets/images/profile-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
      </div>
      <div class="flex mt-[48px] justify-between items-center">
        <div class="flex gap-4">
          <div
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">From: 14/02/2025</span>
            <img src="../assets/images/calendar-icon.svg" alt="" />
            <!-- <input type="date" /> -->
          </div>
          <div
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">To: 14/03/2025</span>
            <img src="../assets/images/calendar-icon.svg" alt="" />
          </div>
        </div>
        <div
          class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
        >
          <span class="text-[14px] block">Lọc theo cảm biến</span>
          <img src="../assets/images/down.svg" alt="" />
        </div>
      </div>
      <div class="mt-5 w-full glassmorphism">
        <div class="flex items-center gap-[268px] mt-10 ml-[60px]">
          <span class="font-bold text-[20px]">ID</span>
          <span class="font-bold text-[20px]">Thiết bị</span>
          <span class="font-bold text-[20px]">Hành động</span>
          <span class="font-bold text-[20px]">Thời gian</span>
        </div>
        <div class="w-full h-[1px] bg-white opacity-60 mt-9"></div>
        <div class="">
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
          <div
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>1</span>
            <span>Nhiệt độ</span>
            <span>Tắt</span>
            <span>2/9/2025 - 11:30:29</span>
          </div>
        </div>
        <img
          src="../assets/images/pag.svg"
          alt=""
          class="mx-auto mt-[54px] mb-9"
        />
      </div>
    </div>
  </div>
</template>
