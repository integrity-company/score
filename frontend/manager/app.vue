<template>
  <div class="manager">
    <NuxtLayout :is-logined="isLogined">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const isLogined = true;
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
</style>
