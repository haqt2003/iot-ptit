<template>
  <div
    class="bg-[url('@/assets/images/bg.svg')] bg-center bg-no-repeat bg-cover h-[100vh] w-[100vw] py-6 overflow-x-hidden"
  >
    <div class="max-w-[1280px] mx-auto glassmorphism-container p-5">
      <div
        class="glassmorphism w-[340px] h-[64px] mx-auto flex items-center justify-center gap-10"
      >
        <div
          class="h-9 w-9 bg-[#4E96FF] rounded-[10px] flex justify-center items-center"
        >
          <img
            src="../assets/images/dashboard-icon.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
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
        <router-link to="profile"
          ><img
            src="../assets/images/profile-icon.svg"
            alt=""
            class="cursor-pointer"
        /></router-link>
      </div>
      <div class="flex justify-between mt-9">
        <div class="w-[542px] h-[348px] glassmorphism px-8">
          <div class="flex justify-between items-center mt-7">
            <div class="flex items-center">
              <img src="../assets/images/logo.svg" alt="" />
              <div class="ml-5">
                <span class="block font-normal">Nhiệt độ</span>
                <div class="relative">
                  <span class="text-[56px] font-bold leading-none">23</span>
                  <span class="text-[20px] absolute top-4">°C</span>
                </div>
              </div>
            </div>
            <div class="text-center">
              <span class="text-[30px]">Thứ sáu</span>
              <span class="block">23 thg 7, 2024</span>
            </div>
          </div>
          <div class="mt-8 flex items-center gap-[140px]">
            <div class="flex items-center gap-4">
              <img src="../assets/images/humidity-icon.svg" alt="" />
              <div class="">
                <span class="text-[14px] font-light">Độ ẩm</span>
                <span class="block font-bold">88%</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <img src="../assets/images/light-icon.svg" alt="" />
              <div class="">
                <span class="text-[14px] font-light">Ánh sáng</span>
                <span class="block font-bold">700</span>
              </div>
            </div>
          </div>
          <div class="h-[1px] w-full bg-[#FFFFFF] opacity-30 mt-9"></div>
          <div class="text-center font-bold text-[56px] mt-2">11:00</div>
        </div>
        <div class="w-[678px] h-[348px] glassmorphism px-10">
          <div class="flex items-center justify-between mt-10">
            <div class="font-bold text-[32px]">ESP 8266</div>
            <a
              href="https://vi.wikipedia.org/wiki/ESP8266"
              target="_blank"
              class="flex items-center cursor-pointer"
            >
              <span class="text-[14px] block font-light mt-[1px]"
                >Tìm hiểu thêm</span
              >
              <img src="../assets/images/right.svg" alt="" />
            </a>
          </div>
          <div class="flex justify-between items-center mt-10">
            <p class="font-light text-[14px] text-justify w-[320px]">
              ESP8266, tên đầy đủ là ESP8266EX là một vi mạch Wi-Fi có hỗ trợ bộ
              giao thức TCP/IP và có thể tích hợp vào thành phần của vi điều
              khiển, được sản xuất bởi hãng Espressif Systems ở Thượng Hải,
              Trung Quốc, là một chip ESP8266 với 1 MiB bộ nhớ flash được tích
              hợp, cho phép người dùng có thể sản xuất các thiết bị có khả năng
              kết nối với Wi-Fi chỉ với một chip đơn.
            </p>
            <img src="../assets/images/esp.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-5">
        <div class="flex flex-wrap justify-between gap-5 w-[542px] h-[380px]">
          <div class="glassmorphism w-full h-[180px] px-8 relative">
            <div class="flex justify-between items-center mt-8">
              <span class="text-[20px]">Đèn 10</span>
              <label class="switch block" @click="toggleHumidity">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <img
              src="../assets/images/light.svg"
              alt=""
              class="absolute left-24 -bottom-18 w-[180px]"
            />
          </div>
          <div class="glassmorphism w-[261px] h-[180px] px-8 relative">
            <div class="flex justify-between items-center mt-8">
              <span class="text-[20px]">Đèn 2</span>
              <label class="switch block" @click="toggleTemp">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <img
              src="../assets/images/light.svg"
              alt=""
              class="absolute left-0 -bottom-22 w-[180px]"
            />
          </div>
          <div class="glassmorphism w-[261px] h-[180px] px-8 relative">
            <div class="flex justify-between items-center mt-8">
              <span class="text-[20px]">Đèn 3</span>
              <label class="switch block" @click="toggleLight">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <img
              src="../assets/images/light.svg"
              alt=""
              class="absolute left-0 -bottom-22 w-[180px]"
            />
          </div>
        </div>
        <div
          class="flex justify-center items-center w-[678px] h-[380px] glassmorphism px-10 py-6"
        >
          <Line :data="data" :options="options" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "vue-chartjs"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default defineComponent({
  name: "App",
  components: {
    Line,
  },
  setup() {
    const isTemp = ref(true)
    const isHumidity = ref(true)
    const isLight = ref(true)

    const data = reactive({
      labels: ["January", "February", "March"],
      datasets: [
        {
          data: [40, 20, 12],
          borderColor: "white",
          tension: 0,
          fill: false,
          borderWidth: 2,
        },
      ],
    })

    const options = reactive({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "white", // Màu chữ cho legend
          },
        },
      },
      backgroundColor: "white", // Nền trắng cho biểu đồ
      scales: {
        x: {
          ticks: {
            color: "white", // Màu chữ trục x là trắng
          },
          grid: {
            color: "#B8C0C3", // Màu đường kẻ trục x là trắng
          },
        },
        y: {
          ticks: {
            color: "white", // Màu chữ trục y là trắng
          },
          grid: {
            color: "#B8C0C3", // Màu đường kẻ trục x là trắng
          },
        },
      },
    })

    function toggleLight() {
      isLight.value = !isLight.value
    }

    function toggleHumidity() {
      isHumidity.value = !isHumidity.value
    }

    function toggleTemp() {
      isTemp.value = !isTemp.value
    }

    return { data, options, toggleLight, toggleHumidity, toggleTemp }
  },
})
</script>
