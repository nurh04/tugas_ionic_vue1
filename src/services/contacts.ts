import { ref } from "vue";
import { useStorage } from '@vueuse/core'

export const data = ref<any[]>([
    {
        name: 'Jack',
        phone: '08245023355',
        email: 'jack@gmail.com',
        address: '',
        gender: 1,
        isFav: true
    }
])