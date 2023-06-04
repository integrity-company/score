<template>
  <div>
    <NavigationBar :is-logined="isLogined" />

    <slot />
  </div>
</template>
<script lang="ts" setup>
type LayoutsDefaultProps = {
  isLogined: boolean;
};

const Props = withDefaults(defineProps<LayoutsDefaultProps>(), {
  isLogined: false,
});
</script>
