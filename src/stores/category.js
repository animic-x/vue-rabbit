import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    const categoryLiist = ref([]);
    //action获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryApi();
        categoryLiist.value = res.result;
        console.log(categoryLiist.value);
    }
    return { categoryLiist,getCategory}

})
