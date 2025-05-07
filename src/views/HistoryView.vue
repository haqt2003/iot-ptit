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
              v-model="searchTime"
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
        <!-- Header -->
        <div class="grid grid-cols-4 gap-4 mt-10 ml-[60px] pr-[10px]">
          <span class="font-bold text-[20px]">ID</span>
          <span class="font-bold text-[20px]">Thiết bị</span>
          <span class="font-bold text-[20px] ml-10">Hành động</span>
          <div
            @click="onSortTime"
            class="flex items-center justify-center gap-2 cursor-pointer"
          >
            <span class="font-bold text-[20px]">Thời gian</span>
            <img v-if="!isSortDesc" src="../assets/images/ic_asc.svg" alt="" />
            <img v-if="isSortDesc" src="../assets/images/ic_desc.svg" alt="" />
          </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-[1px] bg-white opacity-60 mt-9"></div>

        <!-- List -->
        <div
          class="grid grid-cols-4 gap-4 mt-10 ml-[60px] pr-[10px]"
          v-for="(item, index) in list"
          :key="index"
        >
          <span>{{ item.id }}</span>
          <span class="">{{ item.name }}</span>
          <span class="ml-[78px]">{{ item.action ? "Bật" : "Tắt" }}</span>
          <span class="text-center">{{ formatDate(item.time) }}</span>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center">
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
    const searchTime = ref("")
    const isSortDesc = ref(true)
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

    const onSortTime = () => {
      isSortDesc.value = !isSortDesc.value
    }

    const getData = async () => {
      const sort = isSortDesc.value ? "DESC" : "ASC"
      const response = await axios.get(
        `http://localhost:3000/devices?searchTime=${searchTime.value}&sortDirection=${sort}&pageNumber=${pageNumber.value}&pageSize=${pageSize.value}`
      )
      list.value = response.data.data
      totalData.value = parseInt(response.data.count, 10)
    }

    watch([searchTime, isSortDesc, pageNumber, pageSize], () => {
      getData()
    })

    onMounted(() => {
      resizeList()
      getData()
    })

    return {
      searchTime,
      pageNumber,
      isSortDesc,
      pageSize,
      list,
      totalData,
      resizeList,
      formatDate,
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
