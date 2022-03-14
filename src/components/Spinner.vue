<template>
  <div class="spin"></div>
</template>

<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 40px auto;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top-color: #F9A826;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { transform: rotateZ(360deg) }
}
</style>
