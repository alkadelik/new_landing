<template>
  <!-- Overlay backdrop -->
  <transition name="fade">
    <div v-if="showBanner" class="fixed inset-0 z-9998 bg-black/70"></div>
  </transition>

  <!-- Banner -->
  <transition name="slide-up">
    <div
      v-if="showBanner"
      class="fixed right-0 bottom-0 left-0 z-9999 w-full max-w-3xl rounded-t-lg border border-gray-200 bg-white p-4 shadow-lg sm:rounded-b-lg sm:p-6 lg:right-8 lg:bottom-8 lg:left-[unset]"
    >
      <div class="relative w-full sm:w-4/5 sm:pr-0">
        <h3 class="mb-2 text-base font-semibold sm:text-lg">We use Cookies</h3>
        <p class="text-core-700 mb-4 text-sm sm:text-base">
          We use cookies to make your browsing smoother, personalise your experience, and help us
          improve our website.
        </p>

        <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <AppButton label="Essential Cookies Only" color="alt" @click="acceptConsent" />
          <AppButton label="Accept All" variant="outlined" @click="acceptConsent" />
        </div>
      </div>

      <img
        src="/images/cookie.png"
        alt="Cookies"
        class="absolute -top-2 -right-2 w-16 sm:-top-4 sm:-right-4 sm:w-28"
      />
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue"
import AppButton from "@/components/AppButton.vue"

const showBanner = ref(false)

onMounted(() => {
  const consent = localStorage.getItem("user_consent")
  if (consent !== "granted") showBanner.value = true
})

const acceptConsent = () => {
  if (window.gtag) {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })
  }
  localStorage.setItem("user_consent", "granted")
  showBanner.value = false
}

// const declineConsent = () => {
//   if (window.gtag) {
//     window.gtag("consent", "update", {
//       ad_storage: "denied",
//       analytics_storage: "denied",
//     })
//   }
//   localStorage.setItem("user_consent", "denied")
//   showBanner.value = false
// }
</script>

<style scoped>
/* Smooth slide-up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Fade animation for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
