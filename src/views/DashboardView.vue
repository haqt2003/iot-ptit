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
                  <span class="text-[56px] font-bold leading-none">{{
                    temp
                  }}</span>
                  <span class="text-[20px] absolute top-4">°C</span>
                </div>
              </div>
            </div>
            <div class="text-center">
              <span class="text-[30px]">{{ currentDay }}</span>
              <span class="block">{{ currentDate }}</span>
            </div>
          </div>
          <div class="mt-8 flex items-center gap-[140px]">
            <div class="flex items-center gap-4">
              <img src="../assets/images/humidity-icon.svg" alt="" />
              <div class="">
                <span class="text-[14px] font-light">Độ ẩm</span>
                <span class="block font-bold">{{ humidity }}%</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <img
                src="../assets/images/light-icon.svg"
                alt=""
                :class="{ 'glow-red': pm10 > 60 }"
              />
              <div class="">
                <span class="text-[14px] font-light">Ánh sáng</span>
                <span class="block font-bold">{{ light }}</span>
              </div>
            </div>
          </div>
          <div class="h-[1px] w-full bg-[#FFFFFF] opacity-30 mt-9"></div>
          <div class="text-center font-bold text-[56px] mt-2">
            {{ currentTime }}
          </div>
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
              <span class="text-[20px]">Đèn 1</span>
              <label class="switch block" @click.prevent="toggleLight(1)">
                <input
                  type="checkbox"
                  :checked="isLight1"
                  class="cursor-default pointer-events-none"
                />
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
            <div class="flex justify-between items-center mt-6">
              <span class="text-[20px]">Đèn 2</span>
              <div class="flex items-center gap-1">
                <img
                  v-if="isLoading2"
                  src="../assets/images/loading.svg"
                  alt=""
                  class="w-8"
                />
                <label class="switch block" @click.prevent="toggleLight(2)">
                  <input
                    type="checkbox"
                    :checked="isLight2"
                    class="cursor-default pointer-events-none"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
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
              <div class="flex items-center gap-1">
                <img
                  v-if="isLoading3"
                  src="../assets/images/loading.svg"
                  alt=""
                  class="w-8"
                />
                <label class="switch block" @click.prevent="toggleLight(3)">
                  <input
                    type="checkbox"
                    :checked="isLight3"
                    class="cursor-default pointer-events-none"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
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

      <!-- Add data -->
      <div class="flex justify-between mt-5">
        <div class="flex flex-wrap justify-between gap-5 w-[542px] h-[380px]">
          <div
            class="glassmorphism w-[261px] h-[180px] px-8 relative"
            :class="{ 'blink-red': light > 1000 }"
          >
            <div class="flex justify-between items-center mt-8">
              <span class="text-[20px]">Đèn 4</span>
              <div class="flex items-center gap-1">
                <img
                  v-if="isLoading4"
                  src="../assets/images/loading.svg"
                  alt=""
                  class="w-8"
                />
                <label class="switch block" @click.prevent="toggleLight(4)">
                  <input
                    type="checkbox"
                    :checked="isLight4"
                    class="cursor-default pointer-events-none"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <img
              src="../assets/images/light.svg"
              alt=""
              class="absolute left-0 -bottom-22 w-[180px]"
            />
          </div>

          <div class="glassmorphism w-[261px] h-[180px] px-8 relative">
            <div class="flex justify-between items-center mt-8">
              <span class="text-[20px]">Đèn 5</span>
              <div class="flex items-center gap-1">
                <img
                  v-if="isLoading5"
                  src="../assets/images/loading.svg"
                  alt=""
                  class="w-8"
                />
                <label class="switch block" @click.prevent="toggleLight(5)">
                  <input
                    type="checkbox"
                    :checked="isLight5"
                    class="cursor-default pointer-events-none"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
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
          <Line :data="newData" :options="options" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive, ref } from "vue"
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
import axios from "axios"
import dayjs from "dayjs"

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
    let intervalId = null
    let intervalId2 = null

    const currentTime = ref("")
    const currentDay = ref("")
    const currentDate = ref("")

    const temp = ref(null)
    const humidity = ref(null)
    const light = ref(null)
    const pm10 = ref(null)
    const wind = ref(null)

    const isLight1 = ref(false)
    const isLight2 = ref(false)
    const isLight3 = ref(false)
    const isLight4 = ref(false)
    const isLight5 = ref(false)

    const isLoading1 = ref(false)
    const isLoading2 = ref(false)
    const isLoading3 = ref(false)
    const isLoading4 = ref(false)
    const isLoading5 = ref(false)

    const data = ref({
      labels: ["January", "February", "March"],
      datasets: [
        {
          label: "Nhiệt độ (°C)",
          data: [40, 20, 12],
          borderColor: "#E5989B",
          tension: 0,
          fill: false,
          borderWidth: 2,
        },
        {
          label: "Độ ẩm (%)",
          data: [20, 40, 16],
          borderColor: "#9EC6F3",
          tension: 0,
          fill: false,
          borderWidth: 2,
        },
        {
          label: "Ánh sáng (lux)",
          data: [13, 26, 52],
          borderColor: "white",
          tension: 0,
          fill: false,
          borderWidth: 2,
        },
      ],
    })

    const newData = ref({
      labels: ["January", "February", "March"],
      datasets: [
        {
          label: "Độ bụi",
          data: [40, 20, 12],
          borderColor: "#E5989B",
          tension: 0,
          fill: false,
          borderWidth: 2,
        },
        {
          label: "Tốc độ gió",
          data: [20, 40, 16],
          borderColor: "#9EC6F3",
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

    async function toggleLight(number) {
      let actionValue
      if (number === 1) {
        actionValue = isLight1.value ? 0 : 1
        isLoading1.value = true
        const response = await axios.post("http://localhost:3000/devices/", {
          name: "led 1",
          action: actionValue,
        })
        console.log(response.data.message)

        isLight1.value = !isLight1.value
      } else if (number === 2) {
        actionValue = isLight2.value ? 0 : 1
        isLoading2.value = true
        const response = await axios.post("http://localhost:3000/devices/", {
          name: "led 2",
          action: actionValue,
        })
        if (response.data.message === "success") {
          isLight2.value = !isLight2.value
        }
        isLoading2.value = false
      } else if (number === 3) {
        actionValue = isLight3.value ? 0 : 1
        isLoading3.value = true
        const response = await axios.post("http://localhost:3000/devices/", {
          name: "led 3",
          action: actionValue,
        })
        if (response.data.message === "success") {
          isLight3.value = !isLight3.value
        }
        isLoading3.value = false
      } else if (number === 4) {
        actionValue = isLight4.value ? 0 : 1
        isLoading4.value = true
        const response = await axios.post("http://localhost:3000/devices/", {
          name: "led 4",
          action: actionValue,
        })
        if (response.data.message === "success") {
          isLight4.value = !isLight4.value
        }
        isLoading4.value = false
      } else if (number === 5) {
        actionValue = isLight5.value ? 0 : 1
        isLoading5.value = true
        const response = await axios.post("http://localhost:3000/devices/", {
          name: "led 5",
          action: actionValue,
        })
        if (response.data.message === "success") {
          isLight5.value = !isLight5.value
        }
        isLoading5.value = false
      }
    }

    function updateTime() {
      const now = new Date()

      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      currentTime.value = `${hours}:${minutes}`

      const days = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
      ]
      currentDay.value = days[now.getDay()]

      const day = now.getDate()
      const month = now.getMonth() + 1
      const year = now.getFullYear()
      currentDate.value = `${day} thg ${month}, ${year}`
    }

    const getNewest = async () => {
      const response = await axios.get("http://localhost:3000/sensors/newest")
      temp.value = response.data[0].temp
      humidity.value = response.data[0].humidity
      light.value = response.data[0].light
      pm10.value = response.data[0].pm10
      wind.value = response.data[0].windspeed
    }

    const getChart = async () => {
      const response = await axios.get("http://localhost:3000/sensors/chart")
      const chartData = response.data.reverse()

      const labels = chartData.map((item) =>
        dayjs(item.time).format("HH:mm:ss")
      )

      const temps = chartData.map((item) => item.temp)
      const humidities = chartData.map((item) => item.humidity)
      const lights = chartData.map((item) => item.light)

      data.value = {
        ...data.value,
        labels: labels,
        datasets: [
          {
            ...data.value.datasets[0],
            data: temps,
          },
          {
            ...data.value.datasets[1],
            data: humidities,
          },
          {
            ...data.value.datasets[2],
            data: lights,
          },
        ],
      }
    }

    const getChart2 = async () => {
      const response = await axios.get("http://localhost:3000/sensors/chart2")
      console.log(response)
      const chartData = response.data.reverse()

      const labels = chartData.map((item) =>
        dayjs(item.time).format("HH:mm:ss")
      )

      const pm10 = chartData.map((item) => item.pm10)
      const windSpeed = chartData.map((item) => item.windspeed)

      newData.value = {
        ...newData.value,
        labels: labels,
        datasets: [
          {
            ...newData.value.datasets[0],
            data: pm10,
          },
          {
            ...newData.value.datasets[1],
            data: windSpeed,
          },
        ],
      }
    }

    onMounted(() => {
      getNewest()
      getChart()
      getChart2()
      intervalId = setInterval(() => {
        getNewest()
      }, 1000)

      intervalId2 = setInterval(() => {
        getChart()
        getChart2()
      }, 5000)

      setInterval(() => {
        updateTime()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(intervalId)
      clearInterval(intervalId2)
    })

    return {
      currentTime,
      currentDay,
      currentDate,
      data,
      newData,
      options,
      temp,
      humidity,
      light,
      pm10,
      wind,
      isLight1,
      isLight2,
      isLight3,
      isLight4,
      isLight5,
      isLoading1,
      isLoading2,
      isLoading3,
      isLoading4,
      isLoading5,
      toggleLight,
      getNewest,
    }
  },
})
</script>
