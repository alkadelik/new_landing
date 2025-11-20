<template>
  <div :class="containerClasses">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      :class="[buttonClasses, getActiveClass(option)]"
      @click="emit('update:modelValue', option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, HTMLAttributes, onMounted } from "vue"

export interface ButtonGroupProps {
  /** The options to display as buttons */
  options: string[]
  /** The variant of the button group */
  variant?: "warning" | "primary" | "success"
  /** The currently selected value */
  modelValue: string
  /** Additional classes for the button group container */
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  variant: "warning",
})

onMounted(() => {
  if (!props.modelValue && props.options.length > 0) {
    emit("update:modelValue", props.options[0]!)
  }
})

const VARIANTS = {
  primary: {
    container: "bg-primary-25 border-primary-200",
    activeButton: "bg-primary-100 text-core-700",
    inactiveButton: "text-core-600 bg-transparent",
  },
  success: {
    container: "bg-success-25 border-success-200",
    activeButton: "bg-success-100 text-core-700",
    inactiveButton: "text-core-600 bg-transparent",
  },
  warning: {
    container: "bg-warning-25 border-warning-200",
    activeButton: "bg-warning-100 text-core-700",
    inactiveButton: "text-core-600 bg-transparent",
  },
}

const containerClasses = computed(() => [
  "inline-flex rounded-2xl border p-1.5",
  VARIANTS[props.variant]?.container || "",
  props.class,
])

const getActiveClass = (option: string) => {
  return option === props.modelValue
    ? VARIANTS[props.variant]?.activeButton || ""
    : VARIANTS[props.variant]?.inactiveButton || ""
}

const buttonClasses = computed(() => [
  "flex-1 rounded-xl border-0 px-6 py-3 text-sm font-medium",
  "transition-all duration-200 focus:outline-none",
])

const emit = defineEmits<{ "update:modelValue": [value: string] }>()
</script>
