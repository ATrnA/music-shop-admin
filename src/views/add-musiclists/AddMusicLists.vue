<!--
 * @Author: xujintai
 * @Date: 2021-04-12 10:35:40
 * @LastEditors: xujintai
 * @LastEditTime: 2021-04-13 17:30:38
 * @Description: file content
 * @FilePath: \music-shop-admin\src\views\add-musiclists\AddMusicLists.vue
-->
<template>
  <div id="add-music-lists">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="音乐名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="音乐分类" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择音乐分类">
          <el-option label="民谣" value="1"></el-option>
          <el-option label="传统" value="2"></el-option>
          <el-option label="武侠" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="音乐价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="上架时间" required>
        <el-col :span="11">
          <el-form-item prop="addDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="上传音乐">
        <!-- 参考链接：https://blog.csdn.net/weixin_42193004/article/details/96275626 -->
        <input
          type="file"
          @change="fileChange"
          multiple
          id="musicFileInput"
          ref="musicFileInput"
          accept="audio/mpeg"
        />
      </el-form-item>
      <el-form-item label="音乐简介" prop="musicIntroduce">
        <el-input type="textarea" v-model="ruleForm.musicIntroduce"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- <audio
      autoplay="autoplay"
      controls="controls"
      loop="loop"
      preload="auto"
      src="@/assets/music/黄种人.mp3"
    ></audio>-->
    <audio autoplay="autoplay" id="audio" controls="controls" loop="loop" preload="auto" src></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        addDate: "",
        type: [],
        resource: "",
        musicIntroduce: "",
        price: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入音乐价格", trigger: "change" },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        type: [
          {
            // type: "array",
            required: true,
            message: "请至少选择一个分类",
            trigger: "change",
          },
        ],
        musicRource: [
          { required: true, message: "请选择音乐资源", trigger: "change" },
        ],
        musicIntroduce: [
          { required: true, message: "请填写音乐简介", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          const file = document.getElementById("music-file").files[0];
          console.log(file);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    fileChange(e) {
      // 读取上传的file
      //FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
      // const reader = new FileReader();
      // reader.onload = function (e) {
      //   console.log(typeof e.target.result);
      //   document.getElementById("audio").src = e.target.result;
      // };
      // reader.readAsDataURL(file);

      this.uploadFile();
    },
    uploadFile() {
      const file = document.getElementById("musicFileInput").files[0];
      const xhr = new XMLHttpRequest();
      const fd = new FormData();
      //"file"字段必须和后端保持统一，将文件变为FormData的对象
      fd.append("file", file);
      xhr.open("POST", "http://127.0.0.1:8000/music", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let { path } = JSON.parse(xhr.responseText);
          path = path.split("public\\music\\")[1];
          document.getElementById(
            "audio"
          ).src = `http://127.0.0.1:8000/music/${path}`;
        }
      };
      xhr.send(fd);
    },
  },
};
</script>

<style scoped lang="scss">
#add-music-lists {
  display: flex;
  justify-content: center;
  .el-form {
    width: 40vw;
  }
}
</style>