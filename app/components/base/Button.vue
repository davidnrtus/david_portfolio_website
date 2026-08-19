<script setup lang="ts">
withDefaults(defineProps<{
  iconLeft?: string,
  iconRight?: string
}>(), {
  iconLeft: undefined,
  iconRight: undefined
})
</script>

<template>
  <button class="h-11 px-4 inline-flex items-center justify-center gap-1 text-sm text-primary-text bg-white/[2%] rounded-xl border border-[#647dff80]">
    <NuxtIcon v-if="iconLeft" :name="iconLeft" class="text-base" />
    <slot/>
    <NuxtIcon v-if="iconRight" :name="iconRight" class="text-base" />
  </button>
</template>