<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <p>{{ name }}</p>
      <h2>{{ kelas }}</h2> -->


      <ion-list>

        <ion-list-header>Vue Basic Feature</ion-list-header>

        <ion-item @click="toState" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>State</h2>
            <p>State Management</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toIterator" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Iterator - v-for</h2>
            <p></p>
          </ion-label>
        </ion-item>
        
        <ion-item @click="toIf" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>If statement - v-if</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toModel" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Model - Two Data Binding - v-if</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toEvent" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Event</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toLifecycle" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Lifecycle</h2>
            <p></p>
          </ion-label>
        </ion-item>

      </ion-list>

    
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const toEvent = () => router.push({ path: '/vue/event'})
const toIf = () => router.push({ path: '/vue/if'})
const toIterator = () => router.push({ path: '/vue/iterator'})
const toLifecycle = () => router.push({ path: '/vue/lifecycle'})
const toModel = () => router.push({ path: '/vue/model'})
const tostate = () => router.push({ path: '/vue/state'})

// VARIABLE let, var, const
// penulisan variable dengan const
// let tidak bersifat constant. jadi nilai variable tidak bisa dirubah
let name ='Arif'

// penulisan variable dengan const
// const bersifat constant. jadi nilai variable tidak bisa dirubah
const kelas = 'ik2'

// FUNCTION
// menggunakan syntax function
function gantiNama(name: string) {
  alert('ganti nama')
}

// menggunakan syntax coust
const gantiKelas = (name: string) => {
  alert('ganti kelas')
}

// TIPE PRIMITIVE
// string, number, boolean, any, array
// 1. string
const peliharaan: string = 'burung'

// 2. number
const umur: number = 4

// 3. boolean
const isHidup: boolean = false // true,false

// 4. any
const gaje: any = false

// 5. array
const names: Array<string> = [
  'arif',
  'mike',
  'jack',
  'tom',
]

const nilais: number[] = [
  123,
  10,
  20,
  30,
]

const semrawut: any[] = [
  'saya',
  123,
  true,
]

// TIPE DATA OBJECT
const orang = {
  nama: 'arif',
  kelas: 'ik2',
  umur: 21,
}

const siswa: any[] = [
  {
    name: 'jack',
    umur: 18,
  },
  {
    name: 'mike',
    umur: 19,
  },
  {
    name: 'tom',
    umur: 20,
  }
]

// TYPE - CUSTOM
type Orang = {
  name: string
  kelas: string
  umur: number
  isHidup?: boolean
  alamat?: string,
  jk?: KELAMIN
}

const orang1: Orang = {
  name: '',
  kelas: '',
  isHidup: false,
  umur: 21,
}

const orang2: Orang = {
  name: '',
  kelas: '',
  umur: 21,
  jk: "laki-laki"
}

// TYPE - enumable
type KELAMIN = 'laki-laki' | 'perempuan'
</script>
