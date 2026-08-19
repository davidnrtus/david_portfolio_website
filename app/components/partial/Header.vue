<template>
  <header class="h-20 fixed top-0 left-0 right-0 w-full z-100 px-4 sm:px-8 xl:px-12">
    <div class="flex items-center justify-between gap-6 h-full">
      <div class="flex items-center gap-1 font-black text-xl min-w-[122px]">
        <span class="text-primary-cyan text-lg">{{ "</>" }}</span>      
        <span>Doan Tu</span>
      </div>
      <nav class="flex-1">
        <ul class="w-full h-full flex items-center justify-center gap-x-6">
          <li v-for="item in menu" :key="item.name">
            <a :href="item.href" class="uppercase text-primary-gray font-light text-sm">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center min-w-[122px]">
        <BaseButton icon-right="arrow_right">
          Download CV
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menu = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'About',
    href: '#'
  },
  {
    name: 'Contact',
    href: '#'
  }
]
</script>

<style lang="css" scoped>
header {
  background-color: rgba(5,8,22,.58);
  border-bottom: 1px solid rgba(120,140,255,.16);
  backdrop-filter: blur(18px);
}
</style>