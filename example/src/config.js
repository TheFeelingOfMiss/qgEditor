/**
 * 较全配置
 * plugins: 'handleSave handleCancle essentialFactor print paste preview powerpaste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave indent2em autoresize lineheight',
 * toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor handleSave handleCancle essentialFactor | alignleft aligncenter alignright alignjustify outdent indent | \
 *          styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
 *          table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs',
 */

const BASE_URL = process.env.BASE_URL;
export default {
  language:'zh_CN',
  // 语言包绝对路径
  language_url : `${BASE_URL}editor/langs/zh_CN.js`,
  skin_url: `${BASE_URL}editor/skins/ui/oxide`,
  content_css: `${BASE_URL}editor/skins/content/default`,
  height: 600,
  plugins: 'handleSave handleCancle media essentialFactor subscript preview powerpaste searchreplace autolink directionality visualblocks visualchars fullscreen image link template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern emoticons autosave indent2em lineheight',
  menu: {
    file: {title: '文件', items: 'newdocument handleSave restoredraft handleCancle | preview | print'},
    edit: {title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'},
    insert: {title: '插入', items: 'image imagetools media link codesample inserttable essentialFactor | charmap emoticons hr | pagebreak nonbreaking anchor | insertdatetime'},
    view: {title: '查看', items: 'code | visualaid visualblocks | fullscreen'},
    format: {title: '格式', items: 'bold italic underline strikethrough superscript subscript codeformat alignleft aligncenter alignright alignjustify outdent indent indent2em lineheight | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'},
    table: {title: '表格', items: 'inserttable tableprops deletetable | cell row column'},
    tools: {title: '工具', items: 'code wordcount'}
  },
  toolbar: 'undo redo restoredraft | forecolor backcolor bold italic underline strikethrough link anchor essentialFactor | alignleft aligncenter alignright alignjustify outdent indent indent2em lineheight | \
  formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | table image charmap emoticons hr pagebreak insertdatetime preview | fullscreen',
  fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
  font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
  // 默认base64
  automatic_uploads: true,
  paste_data_images: true,
  powerpaste_word_import: 'merge',
  // 设定上传服务路径
  images_upload_url: '',
  // 图片上传自定义实现
  images_upload_handler: (blobInfo, success, failure) => {
    console.log(failure);
    const img = 'data:image/jpeg;base64,' + blobInfo.base64();
    success(img);
  },
  importcss_append: true,
  autosave_ask_before_unload: false,
  // 隐藏右下角技术支持
  branding: false,
  // 隐藏底栏的元素路径
  elementpath: false,
  // 编辑器返回内容格式
  outputType: 'html',
  // 保存后是否销毁编辑器
  destroyAfterSaved: false,
  // 取消是否直接销毁编辑器（若不是直接销毁编辑器则是隐藏编辑器）
  destroyAfterCancle: false,
  // 保存事件 -- 接收文本内容
  handleSave: data => {console.log(data)},
  // 注册编辑器自定义事件 注册后可通过execCommand调用
  addCommand: addCommand => {console.log(addCommand)}
}

