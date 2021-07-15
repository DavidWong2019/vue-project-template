export const baseToolBars = [
  'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize',
  'powerpaste',
  'importword',
];

export const configs = {
  language: 'zh_CN', // 需要在官网自己下载一个全局的langs包。同时我提供的powerpaste本身自带一个langs包里面含中文，所以可以100%支持中文。
  plugins: [
    'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize',
    'powerpaste',
    'importword',
  ],
  height: 650, // 编辑器高度
  min_height: 400,
  toolbar_groups: {
    formatting: {
      text: '文字格式',
      tooltip: 'Formatting',
      items: 'bold italic underline | superscript subscript',
    },
    alignment: {
      icon: 'align-left',
      tooltip: 'alignment',
      items: 'alignleft aligncenter alignright alignjustify',
    },
  },
  toolbar:
    // eslint-disable-next-line no-multi-str
    'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | lineheight formatpainter',
  external_plugins: {
    powerpaste: '/static/js/tinymce5/plugins/powerpaste/plugin.min.js',
  },
  powerpaste_word_import: 'propmt', // 参数可以是propmt, merge, clear，效果自行切换对比
  powerpaste_html_import: 'propmt', // propmt, merge, clear
  powerpaste_allow_local_images: true,
  paste_data_images: true,
  autosave_ask_before_unload: false,
  toolbar_sticky: true,
  images_upload_handler(blobInfo, success, failure) {
    // 这个函数主要处理word中的图片，并自动完成上传；
    // ajaxUpload是自己定义的一个函数；在回调中，记得调用success函数，传入上传好的图片地址；
    // blobInfo.blob() 得到图片的file对象；
    success(blobInfo.blob());
    // ajaxUpload(blobInfo.blob()).then((data) => {
    //   // 上传成功后，调用success函数传入图片地址
    //   success(data.uploadedImageUrl);
    // });
  },
};
