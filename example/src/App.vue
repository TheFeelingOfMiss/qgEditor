<template>
  <div id="app">
    <hatech-web-component-editor style="margin-bottom: 10px"
                                 ref="editor"
                                 v-model="content"
                                 :config="config"
                                 pattern="decoupledEditor"/>
    <button @click="destoryEditor">销毁编辑器</button>
    <button @click="disabledEditor">禁用编辑器</button>
    <button @click="unDisabledEditor">启用编辑器</button>
    <button @click="showEditor">显示编辑器</button>
    <button @click="hideEditor">隐藏编辑器</button>
    <button @click="reloadEditor">重新加载编辑器</button>
  </div>
</template>

<script>
  import HatechWebComponentEditor from '../../packages/component/src/main'

  export default {
    name: 'App',
    components: {
      HatechWebComponentEditor
    },
    data() {
      return {
        content: '',
        config: {
          handleSave: this.handleSave
        }
      }
    },
    watch: {
      'content': function (newVal) {
        console.log(newVal)
      }
    },
    methods: {
      /**
       * 若在toolbar中显示保存按钮，父组件希望点击保存后的所做操作示例
       * @param data
       */
      handleSave(data) {
        console.log(data)
      },
      destoryEditor() {
        this.$refs.editor.destory()
      },
      unDisabledEditor() {
        this.$refs.editor.handleEditorDisabled(false)
      },
      disabledEditor() {
        this.$refs.editor.handleEditorDisabled(true)
      },
      showEditor() {
        this.$refs.editor.handleEditorVisible(true)
      },
      hideEditor() {
        this.$refs.editor.handleEditorVisible(false)
      },
      reloadEditor() {
        this.$refs.editor.reload()
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
