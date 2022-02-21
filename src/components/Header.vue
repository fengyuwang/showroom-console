<template>
  <header class="flex flex-row-reverse items-center">
    <view class="flex flex-col items-end w-full">
      <view class="status-bar"></view>
      <image
        src="@/assets/images/scaffold/status.png"
        class="w-285px h-33px mx-8 mt-4"
      />
      <image
        src="@/assets/images/scaffold/status_line.png"
        class="w-full h-6px mt-2"
      />
    </view>
  </header>
</template>

<style scoped>
.status-bar {
  height: var(--status-bar-height);
}
</style>
