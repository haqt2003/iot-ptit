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
        <div
          class="h-9 w-9 bg-[#4E96FF] rounded-[10px] flex justify-center items-center"
        >
          <img
            src="../assets/images/sensor-icon.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
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
            class="glassmorphism w-[250px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <input
              v-model="searchValue"
              type="text"
              class="bg-transparent outline-none text-[14px]"
              placeholder="Tìm kiếm theo chỉ số"
            />
          </div>
        </div>
        <div class="flex items-center gap-4 relative">
          <div
            @click="openSelect"
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span for="select" class="text-[14px] block">{{
              currentSensor === "temp"
                ? "Nhiệt độ"
                : currentSensor === "humidity"
                ? "Độ ẩm"
                : currentSensor === "time"
                ? "Thời gian"
                : currentSensor === "pm10"
                ? "Độ bụi"
                : currentSensor === "wind"
                ? "Tốc độ gió"
                : currentSensor === "all"
                ? "Tất cả"
                : (currentSensor = "light" ? "Ánh sáng" : "")
            }}</span>
            <img src="../assets/images/down.svg" alt="" />
          </div>
          <!-- 48 -> 56 -->
          <div
            v-if="isShow"
            class="absolute -bottom-60 left-0 w-[229px] p-[8px] rounded-[8px] bg-[#E2E3E4] z-10 text-black"
          >
            <div
              @click="onChangeSensor('all')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Tất cả
            </div>
            <div
              @click="onChangeSensor('temp')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Nhiệt độ
            </div>
            <div
              @click="onChangeSensor('humidity')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Độ ẩm
            </div>
            <div
              @click="onChangeSensor('light')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Ánh sáng
            </div>
            <div
              @click="onChangeSensor('pm10')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Độ bụi
            </div>

            <div
              @click="onChangeSensor('wind')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Tốc độ gió
            </div>
            <div
              @click="onChangeSensor('time')"
              class="rounded-[4px] cursor-pointer flex items-center gap-[10px] px-5 py-1 hover:bg-[#59a2ff] hover:text-white"
            >
              Thời gian
            </div>
          </div>
          <div
            @click="resizeList"
            class="glassmorphism w-[200px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">Kích thước: {{ pageSize }}</span>
            <img src="../assets/images/down.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="mt-5 w-full glassmorphism">
        <!-- Header Row -->
        <div
          class="grid grid-cols-7 items-center text-left gap-4 mt-10 pl-16 pr-6"
        >
          <span class="font-bold text-[20px]">ID</span>

          <div
            @click="onSort('temp')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Nhiệt độ</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'temp'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'temp') ||
                isSort.name !== 'temp'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>

          <div
            @click="onSort('humidity')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Độ ẩm</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'humidity'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'humidity') ||
                isSort.name !== 'humidity'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>

          <div
            @click="onSort('light')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Ánh sáng</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'light'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'light') ||
                isSort.name !== 'light'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>

          <div
            @click="onSort('pm10')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Độ bụi</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'pm10'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'pm10') ||
                isSort.name !== 'pm10'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>

          <div
            @click="onSort('wind')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Tốc độ gió</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'wind'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'wind') ||
                isSort.name !== 'wind'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>

          <div
            @click="onSort('time')"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Thời gian</span>
            <img
              v-if="isSort.direction === true && isSort.name === 'time'"
              src="../assets/images/ic_desc.svg"
              alt=""
            />
            <img
              v-if="
                (isSort.direction === false && isSort.name === 'time') ||
                isSort.name !== 'time'
              "
              src="../assets/images/ic_asc.svg"
              alt=""
            />
          </div>
        </div>

        <div class="w-full h-[1px] bg-white opacity-60 mt-9"></div>

        <div class="mt-6 space-y-10 pl-16 pr-6">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="grid grid-cols-7 items-center text-left gap-4 mt-10"
          >
            <span>{{ item.id }}</span>
            <span class="ml-5">{{ item.temp }}℃</span>
            <span class="ml-5">{{ item.humidity }}%</span>
            <span class="ml-8">{{ item.light }}</span>
            <span class="ml-6">{{ item.pm10 }}</span>
            <span class="ml-6">{{ item.windspeed }}</span>
            <span>{{ formatDate(item.time) }}</span>
          </div>
        </div>

        <!-- Pagination -->
        <vue-awesome-paginate
          :total-items="totalData"
          :items-per-page="pageSize"
          :max-pages-shown="4"
          v-model="pageNumber"
          paginate-buttons-class="btn-paginate"
          active-page-class="btn-paginate-active"
          back-button-class="back-btn-paginate"
          next-button-class="next-btn-paginate"
        >
          <template #prev-button>
            <button class="w-[20px] mt-[6px]">
              <img src="../assets/images/left.svg" alt="" />
            </button>
          </template>
          <template #next-button>
            <button class="w-[20px] mt-[6px]">
              <img src="../assets/images/right.svg" alt="" />
            </button>
          </template>
        </vue-awesome-paginate>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { onMounted, ref, watch } from "vue"
import { VueAwesomePaginate } from "vue-awesome-paginate"
export default {
  components: {
    VueAwesomePaginate,
  },
  setup() {
    const searchValue = ref("")
    const isSort = ref({
      name: "time",
      direction: true,
    })
    const currentSensor = ref("all")
    const isShow = ref(false)
    const currentPage = ref(1)
    const pageNumber = ref(1)
    const pageSize = ref(20)

    const list = ref([])
    const totalData = ref(NaN)

    const resizeList = () => {
      if (pageSize.value === 10) {
        pageSize.value = 20
      } else {
        pageSize.value = 10
      }

      const maxPage = Math.ceil(totalData.value / pageSize.value)
      if (pageNumber.value > maxPage) {
        pageNumber.value = maxPage
      }
    }

    const openSelect = () => {
      isShow.value = !isShow.value
    }

    function formatDate(dateString) {
      const date = new Date(dateString)
      const yyyy = date.getFullYear()
      const mm = String(date.getMonth() + 1).padStart(2, "0")
      const dd = String(date.getDate()).padStart(2, "0")
      const hh = String(date.getHours()).padStart(2, "0")
      const min = String(date.getMinutes()).padStart(2, "0")
      const ss = String(date.getSeconds()).padStart(2, "0")

      return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`
    }

    const onChangeSensor = (value) => {
      currentSensor.value = value
      isShow.value = !isShow.value
    }

    const onSort = (value) => {
      if (isSort.value.name === value) {
        isSort.value.direction = !isSort.value.direction
      }
      isSort.value.name = value

      getData()
    }

    const getData = async () => {
      const sort = isSort.value.direction ? "DESC" : "ASC"
      const response = await axios.get(
        `http://localhost:3000/sensors?searchValue=${searchValue.value}&type=${currentSensor.value}&sortType=${isSort.value.name}&sortDirection=${sort}&pageNumber=${pageNumber.value}&pageSize=${pageSize.value}`
      )
      list.value = response.data.data
      totalData.value = parseInt(response.data.count, 10)
    }

    watch([searchValue, currentSensor, pageNumber, pageSize], () => {
      getData()
    })

    onMounted(() => {
      getData()
      resizeList()
    })

    return {
      searchValue,
      totalData,
      pageNumber,
      isSort,
      pageSize,
      list,
      isShow,
      currentPage,
      currentSensor,
      resizeList,
      openSelect,
      onChangeSensor,
      onSort,
      formatDate,
    }
  },
}
</script>

<style scoped>
#componentContainer {
  display: flex;
  justify-content: center;
  justify-items: center;
}

.pagination-container {
  margin-top: 52px;
  font-size: 16px;
  margin-bottom: 36px;
}
</style>
