<!--
 * @Author: xujintai
 * @Date: 2021-04-12 10:27:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-04-12 13:21:29
 * @Description: file content
 * @FilePath: \music-shop-admin\src\views\admin-index\AdminIndex.vue
-->
<template>
  <div id="admin-index">
    <el-container>
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>管理员管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">增加管理员</el-menu-item>
                    <el-menu-item index="1-2">管理员维护</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">增加用户</el-menu-item>
                    <el-menu-item index="2-2">用户维护</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>音乐管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/admin-index/AddMusicLists">音乐上架</el-menu-item>
                    <el-menu-item index="3-2">音乐维护</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-submenu,
.el-menu-item {
  width: 200px;
}
</style>