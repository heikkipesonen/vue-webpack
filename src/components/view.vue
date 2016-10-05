<template lang="html">
  <div class="view">
    <div class="view-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.view-content {
  padding: 8px;
}
</style>
