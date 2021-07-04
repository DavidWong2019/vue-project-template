<template>
  <div>
    <div id="tinymce"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // function ajaxUpload() {
    //   return Promise.resolve({
    //     uploadedImageUrl: 'https://www.xiyoukeji.com/images/logo_xs.gif',
    //   });
    // }
    window.tinymce.init({
      selector: '#tinymce',
      language: 'zh_CN', // 需要在官网自己下载一个全局的langs包。同时我提供的powerpaste本身自带一个langs包里面含中文，所以可以100%支持中文。
      plugins: [
        'powerpaste', // plugins中，用powerpaste替换原来的paste
        // ...
      ],
      external_plugins: {
        powerpaste: '/static/js/tinymce/plugins/powerpaste/plugin.min.js',
      },
      powerpaste_word_import: 'propmt', // 参数可以是propmt, merge, clear，效果自行切换对比
      powerpaste_html_import: 'propmt', // propmt, merge, clear
      powerpaste_allow_local_images: true,
      // paste_data_images: true,
      // images_upload_handler(blobInfo, success, failure) {
      //   // 这个函数主要处理word中的图片，并自动完成上传；
      //   // ajaxUpload是自己定义的一个函数；在回调中，记得调用success函数，传入上传好的图片地址；
      //   // blobInfo.blob() 得到图片的file对象；
      //   // success(blobInfo.blob());
      //   ajaxUpload(blobInfo.blob()).then((data) => {
      //     // 上传成功后，调用success函数传入图片地址
      //     success(data.uploadedImageUrl);
      //   });
      // },
      // images_upload_url: '/sdasd/asdads',
      // toolbar_sticky: true,
      // autosave_ask_before_unload: false,
      // tinymce的其他配置参数
    });
  },
};
</script>

<style lang="scss" scoped></style>
