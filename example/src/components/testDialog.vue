<template>
  <el-dialog title="这是一个弹框"
    :visible="visible"
  >
    <p>
      此弹框用于模拟自定义插件与编辑器做交互
    </p>
  </el-dialog>
</template>

<script>
  export default {
    name: "testDialog",
    props: {
      visible: {
        type: Boolean,
        required: false,
        default: () => (false)
      }
    },
    data: () => {
      return {
      }
    }
  }
</script>

<style scoped>

</style>