<template>
  <section :id="props.id" :class="[props.background, 'w-full']" :style="props.style">
    <div :class="['container mx-auto px-4 sm:px-6 lg:px-11', 'max-w-7xl', props.class]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { HTMLAttributes } from "vue"

export interface AppSectionProps {
  /** Background class for the section wrapper e.g. bg-white, bg-gray-100 */
  background?: HTMLAttributes["class"]

  /**  Section ID */
  id?: HTMLAttributes["id"] | undefined

  /**  Additional custom classes to the section content */
  class?: HTMLAttributes["class"]

  style?: HTMLAttributes["style"]
}

const props = withDefaults(defineProps<AppSectionProps>(), {
  background: "bg-transparent",
  id: undefined,
})
</script>
