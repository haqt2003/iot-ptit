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
      <div class="flex relative mt-[48px] justify-between items-center">
        <div class="flex gap-4">
          <div
            class="glassmorphism w-[250px] h-[48px] px-5 flex items-center justify-between cursor-pointer"
          >
            <input
              type="text"
              class="bg-transparent outline-none text-[14px]"
              placeholder="Tìm kiếm theo thời gian"
            />
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
      <div class="mt-5 w-full glassmorphism">
        <div class="flex items-center gap-[265px] mt-10 ml-[60px]">
          <span class="font-bold text-[20px]">ID</span>
          <span class="font-bold text-[20px]">Thiết bị</span>
          <span class="font-bold text-[20px]">Hành động</span>
          <div
            @click="onSortTime"
            class="flex items-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Thời gian</span>
            <img v-if="!isSortDesc" src="../assets/images/ic_asc.svg" alt="" />
            <img v-if="isSortDesc" src="../assets/images/ic_desc.svg" alt="" />
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
            <span>{{ item.name }}</span>
            <span>{{ item.action }}</span>
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
    const isSortDesc = ref(true)
    const currentPage = ref(1)
    const pageSize = ref(20)
    const list = reactive([
      {
        id: "1",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "2",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "3",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "4",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "5",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "6",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "7",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "8",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "9",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "10",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "11",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "12",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "13",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "14",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "15",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
      {
        id: "16",
        name: "Nhiệt độ",
        action: "Tắt",
        time: "2/9/2025 - 11:30:29",
      },
    ])
    const tempList = ref([])

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

    const getList = async () => {
      tempList.value = list
    }

    const onSortTime = () => {
      isSortDesc.value = !isSortDesc.value
    }

    onMounted(() => {
      getList()
      resizeList()
    })

    return {
      isSortDesc,
      pageSize,
      list,
      tempList,
      paginateList,
      currentPage,
      getList,
      resizeList,
      onSortTime,
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
