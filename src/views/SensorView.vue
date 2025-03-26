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
                : currentSensor === "all"
                ? "Tất cả"
                : (currentSensor = "light" ? "Ánh sáng" : "")
            }}</span>
            <img src="../assets/images/down.svg" alt="" />
          </div>
          <div
            v-if="isShow"
            class="absolute -bottom-48 left-0 w-[229px] p-[8px] rounded-[8px] bg-[#E2E3E4] z-10 text-black"
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
        <div class="flex items-center gap-[160px] mt-10 mx-[60px]">
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
        <div class="">
          <div
            v-for="(item, index) in paginateList"
            :key="index"
            class="flex mt-10 items-center justify-between mx-auto w-[1113px] text-center"
          >
            <span>{{ item.id }}</span>
            <span>{{ item.temp }}℃</span>
            <span>{{ item.humidity }}%</span>
            <span>{{ item.light }}</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <vue-awesome-paginate
          :total-items="list.length"
          :items-per-page="pageSize"
          :max-pages-shown="3"
          v-model="currentPage"
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
import { onMounted, reactive, ref, computed } from "vue"
import { VueAwesomePaginate } from "vue-awesome-paginate"
export default {
  components: {
    VueAwesomePaginate,
  },
  setup() {
    const isSort = ref({
      name: "time",
      direction: true,
    })
    const currentSensor = ref("all")
    const isShow = ref(false)
    const currentPage = ref(1)
    const pageSize = ref(20)
    const tempList = ref([])
    const list = reactive([
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "1",
        temp: "25",
        humidity: "88",
        light: "700",
        time: "2/9/2025 - 11:30:29",
      },
    ])
    const resizeList = () => {
      if (pageSize.value == 10) {
        pageSize.value = 20
      } else {
        pageSize.value = 10
      }
      currentPage.value = 1
    }

    const paginateList = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value
      const end = start + pageSize.value
      return tempList.value.slice(start, end)
    })

    const openSelect = () => {
      isShow.value = !isShow.value
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
    }

    const getList = async () => {
      tempList.value = list
    }

    onMounted(() => {
      getList()
      resizeList()
    })

    return {
      isSort,
      pageSize,
      list,
      tempList,
      isShow,
      paginateList,
      currentPage,
      currentSensor,
      getList,
      resizeList,
      openSelect,
      onChangeSensor,
      onSort,
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
