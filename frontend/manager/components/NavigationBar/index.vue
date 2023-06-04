<template>
  <nav>
    <div class="nav">
      <NuxtLink to="/" class="nav-home">
        <h1 class="font-bold text-3xl">Score</h1>
      </NuxtLink>

      <div class="nav-menu">
        <div v-if="isLogined">
          <div class="nav-menu-detail">
            <NuxtLink to="/">{{ $t("headerMenu.membership") }}</NuxtLink>
            <NuxtLink to="/">{{ $t("headerMenu.song") }}</NuxtLink>
            <NuxtLink to="/login">{{ $t("headerMenu.logout") }}</NuxtLink>
          </div>
        </div>
        <div v-else>
          <NuxtLink to="/login">{{ $t("headerMenu.login") }}</NuxtLink>
        </div>
        <div class="w-30">
          <div class="relative mt-1">
            <select
              v-model="locale"
              class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <option value="ko">ko</option>
              <option value="jp">jp</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
type NavigationBarProps = {
  isLogined: boolean;
};

const Props = withDefaults(defineProps<NavigationBarProps>(), {
  isLogined: false,
});

const { locale } = useI18n();
</script>

<style lang="scss">
.nav {
  background-color: #eee;
  height: 50px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;

  &-menu {
    display: flex;
    column-gap: 20px;
    align-items: center;

    &-detail {
      display: flex;
      column-gap: 20px;
    }
  }

  & a {
    text-decoration: none;
  }
}
</style>
