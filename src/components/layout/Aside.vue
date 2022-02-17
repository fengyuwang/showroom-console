<template>
  <nav class="flex flex-col justify-between">
    <image
      src="@/assets/images/scaffold/logo.png"
      class="w-137px h-152px mt-12 ml-8 mr-4"
      alt=""
    />
    <image
      src="@/assets/images/scaffold/aside-back.png"
      class="w-20px h-34px mb-12 ml-12"
      @tap="tap"
    />
  </nav>
</template>
<script>
export default {
  methods: {
    tap() {
      uni.navigateBack()
    }
  }
}
</script>
