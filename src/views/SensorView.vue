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
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">From: 14/02/2025</span>
            <img src="../assets/images/calendar-icon.svg" alt="" />
          </div>
          <div
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">To: 14/03/2025</span>
            <img src="../assets/images/calendar-icon.svg" alt="" />
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="glassmorphism w-[229px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <span class="text-[14px] block">Lọc theo cảm biến</span>
            <img src="../assets/images/down.svg" alt="" />
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
        <div class="flex items-center gap-[185px] mt-10 ml-[60px]">
          <span class="font-bold text-[20px]">ID</span>
          <span class="font-bold text-[20px]">Nhiệt độ</span>
          <span class="font-bold text-[20px]">Độ ẩm</span>
          <span class="font-bold text-[20px]">Ánh sáng</span>
          <span class="font-bold text-[20px]">Thời gian</span>
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
    const currentPage = ref(1)
    const pageSize = ref(10)
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
      if (pageSize.value == 6) {
        pageSize.value = 10
      } else {
        pageSize.value = 6
      }
      currentPage.value = 1
    }

    const paginateList = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value
      const end = start + pageSize.value
      return tempList.value.slice(start, end)
    })

    const getList = async () => {
      tempList.value = list
    }

    onMounted(() => {
      getList()
      resizeList()
    })

    return {
      pageSize,
      list,
      tempList,
      paginateList,
      currentPage,
      getList,
      resizeList,
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
