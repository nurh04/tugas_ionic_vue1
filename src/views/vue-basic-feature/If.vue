<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons slot=start>
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>IF</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">IF</ion-title>
                </ion-toolbar>
            </ion-header>

            <div v-if="jk==1">
                <h2>Lakik</h2>
            </div>
            
            <div v-else="gender==2">
                <h2>Ciwi</h2>
            </div>
            
            <ion-button @click="ubahgender" expand="block" fill="solid" color="tertiary">
                Click Cekali
            </ion-button>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}

//variable biasa
let jk=2 // 1=lakik | 2=ciwi
let gender = ref(2) // 1=lakik | 2=ciwi

// function ubahJK
const ubahJK = () => {
    // // 1. If
    // if(jk==1) {
    //     jk=2
    // } else {
    //     jk=1
    // }

    // 2. tertiary
    jk = jk == 1 ? 2 : 1
}

const ubahgender = () => {
    gender.value = gender.value == 1 ? 2 : 1
}
</script>

<style></style>