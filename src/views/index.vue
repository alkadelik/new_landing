<script setup lang="ts">
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide } from "vue3-carousel"
import { onMounted, ref } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"
import Chip from "@components/Chip.vue"
import Icon from "@components/Icon.vue"
import AppButton from "@components/AppButton.vue"
import ConsentBanner from "@components/ConsentBanner.vue"
import AppSection from "@components/AppSection.vue"
import Avatar from "@components/Avatar.vue"
import ButtonGroup from "@components/ButtonGroup.vue"
import { BUSINESSES, FEATURES, PRICINGS, SOLUTIONS } from "@/constants/home"

onMounted(() => {
  AOS.init({ duration: 800, easing: "ease-in-out", once: true })
})

const activeFeatSlide = ref(0)

// Button Group state
const selectedFeatureTab = ref("Optimise")
const selectedPricingPeriod = ref("Monthly")

const openSignup = (plan?: string) => {
  let url = "https://suite.leyyow.com/signup"
  if (plan) url += `?plan=${plan}`
  window.open(url, "_blank")
}
</script>

<template>
  <div class="font-outfit text-gray-900">
    <section class="py-8 md:py-16 md:pb-0" aria-label="Hero section">
      <div class="relative mx-auto max-w-6xl">
        <!-- Background with opacity -->
        <div
          :style="{ backgroundImage: 'url(/images/lines.svg)' }"
          class="pointer-events-none absolute inset-0 bg-size-[91%,100%] bg-center bg-no-repeat opacity-30"
        ></div>

        <div
          class="relative mx-auto flex w-full flex-col items-center gap-8 bg-cover bg-center bg-repeat px-4 md:bg-bottom"
        >
          <!-- hero text -->
          <div class="relative mx-auto mb-0 w-full max-w-3xl text-center md:mb-12">
            <!-- Radial gradient background -->
            <div
              class="pointer-events-none absolute top-1/2 left-1/2 -z-10 max-h-[150%] max-w-[150%] -translate-x-1/2 -translate-y-1/2"
              style="
                background: radial-gradient(
                  circle,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 255, 255, 0.95) 30%,
                  rgba(255, 255, 255, 0.8) 50%,
                  rgba(255, 255, 255, 0.4) 70%,
                  transparent 100%
                );
                filter: blur(60px);
              "
            ></div>

            <a href="http://eventful.leyyow.com" target="_blank" rel="noopener noreferrer">
              <Chip size="md" class="pl-1!">
                <template #prepend>
                  <Chip size="sm" label="✨ Now live!!" variant="filled" />
                </template>
                <span class="ml-2 hidden sm:inline lg:hidden xl:inline"
                  >Eventful by Leyyow, for organisers</span
                >
                <span class="sm:hidden lg:inline xl:hidden">Eventful by Leyyow</span>
                <template #append>
                  <Icon name="arrow-right" size="16" />
                </template>
              </Chip>
            </a>
            <h1
              class="mt-8 font-sans text-2xl leading-normal font-semibold md:text-5xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Simple
              <span class="text-warning-600 font-bold">Sales Management</span><br />
              for small retail businesses
            </h1>
            <p
              class="text-md mt-6 mb-10 text-gray-600 xl:leading-[1.65]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Running a growing business can be overwhelming. Leyyow keeps you in control by helping
              you sell online, track your inventory, monitor your sales, and understand your
              customers - all in one place.
            </p>

            <AppButton label="Get Started" class="gradient-btn px-10!" @click="openSignup()" />
          </div>
        </div>

        <!-- Yellowish radial gradient behind button and dashboard -->
        <div
          class="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-full max-h-[600px] w-full max-w-[800px] -translate-x-1/2 md:h-[400px] md:w-[1000px]"
          style="
            background: radial-gradient(
              circle,
              rgba(253, 224, 0, 0.4) 0%,
              rgba(253, 224, 0, 0.25) 30%,
              rgba(253, 224, 0, 0.15) 50%,
              rgba(253, 224, 0, 0.05) 70%,
              transparent 100%
            );
            filter: blur(80px);
          "
        ></div>

        <img
          src="/images/hero-image.webp"
          alt="Leyyow sales management dashboard showing inventory, orders, and analytics for small retail businesses"
          class="relative z-10 mx-auto mt-8 w-90 max-w-6xl md:w-full"
        />
      </div>

      <div class="mx-auto max-w-6xl px-4 py-6" role="region" aria-label="Key solutions">
        <div>
          <Carousel
            v-model="activeFeatSlide"
            :items-to-show="1"
            :autoplay="0"
            :wrap-around="true"
            :gap="12"
            :breakpoints="{
              640: { itemsToShow: 3, gap: 48 },
            }"
          >
            <Slide
              v-for="(feat, f) in SOLUTIONS"
              :key="f"
              class="h-full overflow-hidden rounded-xl"
            >
              <div
                class="flex flex-col items-center p-4 text-center md:items-start md:text-left"
                :class="activeFeatSlide === f ? 'opacity-100!' : 'opacity-100!'"
              >
                <!-- Progress bar -->
                <div class="h-1 w-full rounded-full bg-gray-200">
                  <div
                    class="h-1 rounded-full"
                    :style="`background: linear-gradient( 136.41deg, #1a2a6c -3.7%, #b21f1f 53.98%, #fdbb2d 99.39% ); width: ${
                      activeFeatSlide === f ? '100%' : '0%'
                    }`"
                  ></div>
                </div>
                <!--  -->
                <!-- <span
                  class="bg-primary-500/10 border-primary-500/40 ring-primary-500/30 my-6 mb-3 flex h-12 w-12 items-center justify-center rounded-full border-4 ring-4"
                >
                  <Icon :name="feat.icon" class="text-primary-500 h-6 w-6" />
                </span> -->
                <h4 class="mb-1 pt-4 text-lg font-semibold">{{ feat.title }}</h4>
                <p class="text-core-600 text-base">
                  {{ feat.subtitle }}
                </p>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>

      <div
        class="mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-xl px-12 py-8 lg:px-16"
        role="region"
        aria-label="Trusted businesses"
      >
        <p class="text-husk-400 text-md mb-4 text-center md:mb-4 md:text-lg">
          Businesses that love us:
        </p>

        <div>
          <Carousel
            :items-to-show="2"
            :autoplay="1500"
            :wrap-around="true"
            :gap="12"
            :height="120"
            :breakpoints="{
              640: { itemsToShow: 3, gap: 32 },
              768: { itemsToShow: 4, gap: 48 },
              1024: { itemsToShow: 5, gap: 64 },
            }"
          >
            <Slide v-for="n in BUSINESSES" :key="n.id" class="h-full overflow-hidden rounded-xl">
              <img
                :src="n.url"
                :alt="`Business ${n.id} that uses Leyyow for sales management`"
                class="h-full w-full rounded-xl"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
    </section>

    <AppSection id="features" class="py-12 md:py-24">
      <div class="mr-0 mb-8 max-w-2xl px-4 md:mb-16">
        <span class="text-primary-700 text-sm font-semibold uppercase">Features</span>
        <h2
          class="mt-4 font-sans text-2xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Make Selling Easier, Every Day
        </h2>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Everything you need to sell, fulfil orders, and stay organised - whether you're online, in
          DMs, or at pop-ups.
        </p>
      </div>

      <div class="justify-left flex px-4">
        <ButtonGroup
          v-model="selectedFeatureTab"
          :options="['Optimise', 'Scale', 'Improve']"
          class="w-full max-w-2xl"
        />
      </div>

      <div
        class="mt-8 grid gap-8 md:grid-cols-2"
        :class="selectedFeatureTab === 'Improve' ? '' : 'md:grid-rows-5'"
      >
        <div
          v-for="(feat, x) in FEATURES[selectedFeatureTab]"
          :key="feat.title"
          :class="[
            'flex flex-col gap-8 rounded-3xl border p-8 pt-12 pb-0',
            {
              'bg-blue-25 border-blue-200 md:col-start-1 md:row-span-2 md:row-start-1':
                x === 0 && selectedFeatureTab !== 'Improve',
            },
            {
              'border-warning-200 bg-warning-25 md:col-start-2 md:row-span-3 md:row-start-1':
                x === 1 && selectedFeatureTab !== 'Improve',
            },
            {
              'border-warning-200 bg-warning-25': x === 1 && selectedFeatureTab === 'Improve',
            },
            {
              'border-success-200 bg-success-25 md:col-start-1 md:row-span-3 md:row-start-3':
                x === 2 && selectedFeatureTab !== 'Improve',
            },
            {
              'border-bloom-300 bg-bloom-25 md:col-start-2 md:row-span-2 md:row-start-4':
                x === 3 && selectedFeatureTab !== 'Improve',
            },
            {
              'bg-blue-25 border-blue-200': x === 0 && selectedFeatureTab === 'Improve',
            },
            'relative min-h-60 flex-col-reverse! overflow-hidden bg-no-repeat',
            // selectedFeatureTab === 'Optimise' && x !== 1 ? 'flex-col-reverse!' : 'pb-8!',
            feat.image ? 'justify-between' : 'justify-center',
          ]"
          data-aos="fade-up"
          :data-aos-delay="x * 100"
        >
          <img
            src="/images/bg-dots-pattern.svg"
            alt="Background"
            class="absolute inset-0 left-40 h-full w-full object-cover opacity-50"
          />
          <img
            v-if="feat.image"
            :src="feat.image"
            :alt="`${feat.title} - ${feat.subtitle}`"
            :class="[
              'z-10 mx-auto w-full object-contain',
              selectedFeatureTab !== 'Improve' && (x === 0 || x === 3)
                ? 'aspect-4/3 max-h-60'
                : 'aspect-3/4 max-h-[360px]',
            ]"
          />

          <div>
            <h3 class="z-10 mb-2 text-2xl font-bold text-gray-900">
              {{ feat.title }}
              <Chip v-if="feat.beta" color="success" label="Beta" size="sm" />
            </h3>
            <p class="text-md z-10 text-gray-600">
              {{ feat.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </AppSection>

    <AppSection
      background="my-0 md:my-12"
      class="flex flex-col-reverse items-center gap-20 py-12 md:flex-row"
    >
      <!-- <div
        class="border-warning-200 bg-warning-25 h-96 w-full rounded-3xl border md:h-150 md:w-1/2"
      ></div> -->
      <img src="/images/why-leyyow.svg" class="h-64 w-80 md:h-120 md:w-1/2" />

      <div class="w-full text-center md:w-1/2 md:text-left">
        <span class="text-primary-700 text-sm font-semibold uppercase">Benefits</span>
        <h2
          class="mt-2 font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Why Leyyow?
        </h2>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Because we care deeply about small businesses - and it shows in everything we do.
        </p>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          We’ve talked to, observed, and worked with over 200 business owners - listening carefully
          to their challenges and aspirations. This is why we’re confident we’ve built the right
          solutions to support their growth.
        </p>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Choosing Leyyow ensures you always have the best tools and latest technology to grow your
          business.
        </p>
      </div>
    </AppSection>

    <AppSection id="testimonials" class="py-12 md:py-24">
      <div class="mx-auto mb-8 max-w-xl px-4 text-center md:mb-16">
        <h2
          class="mt-4 font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Wall of Love
        </h2>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Our favourite part of building Leyyow? Seeing how much easier it makes life for the people
          who use it.
        </p>
      </div>

      <div class="space-y-12">
        <div>
          <Carousel
            :items-to-show="1"
            :autoplay="2500"
            :wrap-around="true"
            :gap="8"
            :breakpoints="{
              640: { itemsToShow: 2, gap: 16 },
              768: { itemsToShow: 2, gap: 32 },
              1024: { itemsToShow: 3, gap: 48 },
            }"
          >
            <Slide v-for="n in 5" :key="n">
              <div
                class="border-warning-200 bg-warning-25 flex flex-col items-start rounded-3xl border px-5 py-8"
                data-aos="fade-up"
                :data-aos-delay="n * 100"
              >
                <div class="inline-flex gap-2">
                  <Icon
                    v-for="v in 5"
                    :key="v"
                    size="20"
                    name="star-filled"
                    :class="v <= 4 ? 'text-warning-400' : 'text-gray-300'"
                  />
                </div>
                <p class="mt-4 mb-6 text-sm">
                  "Leyyow made organizing our pop-up event a breeze. The platform's intuitive
                  interface and seamless vendor management tools saved us countless hours."
                </p>
                <Avatar
                  url="https://randomuser.me/api/portraits/women/2.jpg"
                  name="Tolu A."
                  extra-text="Marketing Lead, ShopEase"
                  extra-text-class="text-primary-500!"
                  class="mt-auto"
                />
              </div>
            </Slide>
          </Carousel>
        </div>
        <!--  -->
        <div class="hidden md:block">
          <Carousel
            :items-to-show="1"
            :autoplay="3200"
            :wrap-around="true"
            :gap="12"
            :breakpoints="{
              640: { itemsToShow: 2, gap: 32 },
              768: { itemsToShow: 2, gap: 48 },
              1024: { itemsToShow: 3, gap: 64 },
            }"
          >
            <Slide v-for="n in 5" :key="n">
              <div
                class="border-warning-200 bg-warning-25 flex flex-col items-start rounded-3xl border px-5 py-8"
                data-aos="fade-up"
                :data-aos-delay="n * 100"
              >
                <div class="inline-flex gap-2">
                  <Icon
                    v-for="v in 5"
                    :key="v"
                    size="20"
                    name="star-filled"
                    :class="v <= 4 ? 'text-warning-400' : 'text-gray-300'"
                  />
                </div>
                <p class="mt-4 mb-6 text-sm">
                  "Leyyow made organizing our pop-up event a breeze. The platform's intuitive
                  interface and seamless vendor management tools saved us countless hours."
                </p>
                <Avatar
                  url="https://randomuser.me/api/portraits/women/2.jpg"
                  name="Tolu A."
                  extra-text="Marketing Lead, ShopEase"
                  extra-text-class="text-primary-500!"
                  class="mt-auto"
                />
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </AppSection>

    <AppSection
      id="pricing"
      background="from-warning-50 to-warning-50 bg-linear-to-br via-white"
      class="relative py-24"
    >
      <div
        :style="{ backgroundImage: 'url(/images/lines.svg)' }"
        class="pointer-events-none absolute inset-0 bg-size-[91%,100%] bg-center bg-no-repeat opacity-40"
      ></div>
      <div class="mx-auto mb-8 max-w-xl px-4 text-center">
        <h2
          class="font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Great tools. Better prices
        </h2>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          No hidden fees. No surprises. Pick a plan that gives you the tools you need to sell and
          stay organised.
        </p>
      </div>

      <!-- Button Group - Monthly, Yearly -->
      <div class="flex justify-center px-4">
        <ButtonGroup
          v-model="selectedPricingPeriod"
          :options="['Monthly', 'Yearly (-20%)']"
          class="w-full max-w-xl"
        />
      </div>

      <div class="mt-8 flex flex-col justify-center gap-8 sm:flex-row">
        <div
          v-for="(p, index) in PRICINGS"
          :key="p.name"
          class="border-warning-200 bg-warning-25 flex w-full flex-col rounded-3xl border sm:w-1/2 md:w-1/3"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="rounded-3xl p-4">
            <div :style="p.background" class="rounded-2xl p-4">
              <div class="flex justify-between">
                <Chip
                  :label="p.name"
                  size="sm"
                  :class="`border-white! bg-white! ${p.name === 'Bloom' ? 'text-[#4CA30D]!' : 'text-success-700!'}`"
                />

                <Chip
                  v-if="p.name === 'Bloom'"
                  label="Leyyow's Choice"
                  size="sm"
                  class="bg-white!"
                />
              </div>

              <h3 class="mt-6 text-3xl font-semibold">
                ₦{{ selectedPricingPeriod === "Monthly" ? p.price : (p.price * 12 * 0.8).toFixed(0)
                }}<span class="ml-0.5 text-base font-normal text-gray-500"
                  >k/{{ selectedPricingPeriod === "Monthly" ? "month" : "year" }}</span
                >
              </h3>
            </div>

            <p class="my-4 text-sm text-gray-600">
              Essential tools to manage your store. Free forever.
            </p>
          </div>

          <ul class="space-y-4 px-6 py-6 pt-0!">
            <li v-for="feat in p.features" :key="feat" class="flex items-start gap-2">
              <Icon name="check-icon2" class="mt-0.5 h-6 w-6 shrink-0 md:h-7 md:w-7" />
              <span class="text-core-600 text-sm">{{ feat }}</span>
            </li>
          </ul>
          <div class="p-4 pb-6">
            <AppButton
              label="Get Started"
              class="gradient-btn w-full! px-10"
              @click="openSignup()"
            />
          </div>
        </div>
      </div>
    </AppSection>

    <AppSection
      class="gap:4 relative flex flex-col-reverse items-center py-12 md:flex-row md:gap-20"
    >
      <div
        :style="{ backgroundImage: 'url(/images/lines.svg)' }"
        class="pointer-events-none absolute inset-0 z-0 bg-size-[91%,100%] bg-center bg-no-repeat opacity-40"
      ></div>
      <div class="z-10 w-full text-center md:w-1/2 md:text-left">
        <span class="text-primary-700 text-sm font-semibold uppercase"
          >Manage Vendors. Discover Events.</span
        >
        <h2
          class="mt-2 font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Introducing Eventful
        </h2>

        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Eventful is where event organisers and small businesses meet. Organisers can easily list
          events, manage vendor spots, and streamline registration.
        </p>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Merchants can browse pop-ups, apply in minutes, and showcase their products to new
          audiences.
        </p>
        <div class="z-10 flex justify-center py-6 md:justify-start">
          <AppButton
            label="Create an Event"
            class="gradient-btn Z-10 px-10"
            @click="openSignup()"
          />
          <a
            href="http://
          
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppButton label="Find a Pop-up" class="ml-4! px-10!" variant="outlined" />
          </a>
        </div>
      </div>
      <img src="/images/eventful.svg" class="h-64 w-80 md:h-120 md:w-1/2" />
    </AppSection>

    <!-- <AppSection
      class="py-20"
      background="from-warning-100 to-warning-100 bg-linear-to-br via-white my-12"
    >
      <div class="mx-auto mb-8 max-w-xl px-4 text-center">
        <span class="text-primary-700 text-sm font-semibold uppercase">Benefits</span>
        <h2
          class="mt-2 font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get started
        </h2>
        <p class="mt-5 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Eventful is our dedicated platform for organisers of pop-up events and small-business
          showcases. We know how important pop-ups are for small businesses, so we built a platform
          that supports both.
        </p>
      </div>

      <div class="flex flex-col gap-12 py-8 md:flex-row md:items-center md:gap-20">
        <div
          v-for="v in 2"
          :key="v"
          class="border-warning-200 bg-warning-25 flex h-90 w-full flex-col rounded-3xl border p-8 md:h-150 md:w-1/2"
          data-aos="fade-up"
          :data-aos-delay="(v - 1) * 100"
        >
          <AppButton
            label="Get Started"
            class="gradient-btn mt-auto px-10!"
            style=""
            @click="openSignup()"
          />
        </div>
      </div>
    </AppSection> -->

    <!-- <AppSection
      background="from-warning-100 to-warning-100 bg-linear-to-br via-white"
      class="flex justify-center gap-20 py-40"
    >
      <div class="w-full max-w-4xl text-center">
        <span class="text-primary-700 text-sm font-semibold uppercase">Benefits</span>
        <h2
          class="mt-2 font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Introducing Eventful
        </h2>
        <p class="mt-5 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Eventful is our dedicated platform for organisers of pop-up events and small-business
          showcases. We know how important pop-ups are for small businesses, so we built a platform
          that supports both Organisers *and* Vendors.
        </p>
        <p class="mt-5 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Organisers can launch events, manage registrations, set fees, and offer discount codes
          while small businesses can easily find pop-ups, apply to exhibit, and grow their reach.
        </p>
        <AppButton
          label="Get Started"
          class="gradient-btn mt-6 px-10!"
          style="
            background: linear-gradient(136.41deg, #1a2a6c -3.7%, #b21f1f 53.98%, #fdbb2d 99.39%);
          "
          @click="openSignup()"
        />
      </div>
    </AppSection> -->

    <!-- <AppSection background="" class="relative py-4 md:py-20">
      <div
        :style="{ backgroundImage: 'url(/images/lines.svg)' }"
        class="pointer-events-none absolute inset-0 bg-size-[91%,100%] bg-center bg-no-repeat opacity-40"
      ></div>
      <div class="mx-auto mb-8 max-w-xl px-4 text-center">
        <h2
          class="font-sans text-3xl font-semibold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Grow with Leyyow
        </h2>
        <p class="text-md mt-5 text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Get practical tips, guides, and resources to help you run, market, and scale your business
          with confidence.
        </p>
      </div>

      <div class="grid gap-8 py-8 md:grid-cols-3">
        <div
          v-for="(v, index) in LEYYOW_PAGES"
          :key="v.tag"
          class="border-warning-200 bg-warning-25 flex flex-col rounded-3xl border p-8"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="bg-warning-100 mb-6 h-48 w-full rounded-lg"></div>
          <h3 class="mb-2 text-lg font-semibold text-gray-600">{{ v.title }}</h3>
          <p class="text-sm text-gray-600">
            {{ v.subtitle }}
          </p>
          <hr class="border-warning-200 my-5" />
          <div class="flex justify-between">
            <Chip :label="v.tag" :color="v.tagColor" size="sm" class="rounded!" />
            <a
              :href="v.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-600 hover:text-primary-700 flex items-center gap-1 font-medium"
            >
              {{ v.linkText }}
              <Icon name="arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </AppSection> -->

    <!-- Consent Banner -->
    <ConsentBanner />
  </div>
</template>
