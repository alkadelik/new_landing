<script setup>
import AppButton from "@components/AppButton.vue"
import AppSection from "@components/AppSection.vue"

const footerLinks = {
  Contact: [
    { name: "hello@leyyow.com", href: "mailto:hello@leyyow.com" },
    { name: "Instagram", href: "https://www.instagram.com/leyyow_app" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/leyyow" },
    { name: "WhatsApp", href: "https://wa.me/1234567890" },
  ],
  Products: [
    { name: "Leyyow Sales", href: "/orders" },
    { name: "Eventful", href: "https://eventful.leyyow.com", new: true },
  ],
  Resources: [
    {
      name: "Terms",
      href: "https://leyyow.notion.site/Refund-policy-162f3934f3148085a337fc0d3cbffb99?pvs=4",
    },
    {
      name: "Privacy",
      href: "https://leyyow.notion.site/Refund-policy-162f3934f3148085a337fc0d3cbffb99?pvs=4",
    },
    { name: "Help & Support", href: "https://leyyow.notion.site/faq?pvs=4" },
    { name: "FAQs", href: "/#faqs" },
  ],
}
</script>

<template>
  <div>
    <header class="font-outfit">
      <nav class="mx-auto flex max-w-4xl items-center justify-between gap-6 px-4 py-4 md:px-2">
        <RouterLink to="/" class="mr-6">
          <img src="/LYW.svg?url" alt="Leyyow Logo" class="h-8" />
        </RouterLink>

        <div class="ml-4 hidden items-center gap-8 md:inline-flex">
          <a href="#solutions" class="text-core-600 font-semibold"> Solutions </a>
          <a href="#resources" class="text-core-600 font-semibold"> Resources </a>
          <a href="#faqs" class="text-core-600 font-semibold"> FAQs </a>
          <a href="#pricing" class="text-core-600 font-semibold"> Pricing </a>
          <a href="https://eventful.leyyow.com" target="_blank" class="text-core-600 font-semibold">
            Eventful
          </a>
        </div>

        <div class="inline-flex items-center gap-2 sm:gap-6">
          <a href="http://suite.leyyow.com/login" target="_blank" rel="noopener noreferrer">
            <AppButton class="gradient-btn px-6!" label="Sign In" />
          </a>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer
      class="font-outfit rounded-t-4xl border-t border-gray-200 bg-[#3D292C] pt-16 pb-8 text-white lg:rounded-t-[64px]"
    >
      <AppSection class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <img src="/LYW.svg?url" alt="Leyyow Logo" class="mb-4 h-8" />
        </div>
        <div class="col-span-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div v-for="key in Object.keys(footerLinks)" :key="key">
            <h3 class="mb-4 text-sm font-semibold text-white">{{ key }}</h3>
            <div class="flex flex-col gap-3">
              <a
                v-for="link in footerLinks[key]"
                :key="link.name"
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                class="hover:text-primary font-light text-white hover:underline"
              >
                {{ link.name }}
                <span
                  v-if="link.new"
                  :class="[
                    'border border-green-400 bg-green-100 text-xs text-green-500',
                    'ml-2 inline-flex items-center rounded-full px-2 py-0.5 font-normal',
                  ]"
                >
                  New
                </span>
              </a>
            </div>
          </div>
        </div>
      </AppSection>
      <div class="border-core-800 mt-16 border-t" />
      <AppSection
        class="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <div>
          <h3 class="mb-2 text-lg font-medium text-white md:text-xl">Sell smarter with Leyyow</h3>
          <p class="text-sm text-gray-50 md:text-base">
            Start free, cancel anytime, and only pay when you're ready to scale.
          </p>
        </div>
        <p class="mt-4 text-sm text-gray-50 md:mt-0 md:text-base">
          &copy; {{ new Date().getFullYear() }} Leyyow. All rights reserved.
        </p>
      </AppSection>
    </footer>
  </div>
</template>
