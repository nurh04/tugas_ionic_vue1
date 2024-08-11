<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Todoy Apps</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">


      <ion-list>
        <ion-list-header>
          <ion-label>Judul Sejarah</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>
            <h2>Gajah Mada</h2>
            <p>Gajah Mada ialah MahaPatih dari kerajaan Majapahit. yang berambisi ingin menyatukan seluruh daratan Nusantara dibawah Kerajaan Majapahit</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Kebo Iwa</h2>
            <p>Kebo Iwa adalah salah seorang patih kerajaan Bali pada masa pemerintahan Prabu Sri Asta Sura Ratna Bumi Banten pada awal abad ke-14. Nama lain dari Kebo Iwa adalah Kebo Wandira atau Kebo Taruna yang bermakna kerbau yang perjaka</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Kebo Mercuet</h2>
            <p>Kebo Mercuet ialah Adipati Kerajaan Blambangan ,pada masa kerajaan majapahit yang dipimpin oleh seorang Ratu yang bernama Kencana Wungu</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Minakjinggo</h2>
            <p>Minak Jinggo adalah adipati Blambangan menggantikan Kebo Marcuet yang mengalami kekalahan saat Majapahit menyerang kadipaten blambangan</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Ki Juru Martani</h2>
            <p>Ki Juru Martani menjabat sebagai patih di Kerajaan Mataram sejak masa pemerintahan Panembahan Senapati dan dilanjutkan di bawah pemerintahan Anyakrawati.</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
        <ion-fab-button color="success">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { logoIonic, add } from 'ionicons/icons';
</script>

<style>
ion-content {
  height: 90%
}
</style>