<template>
  <el-container>
    <el-aside width="200px">
      <side-menu @addTab="addTab"> </side-menu>
    </el-aside>
    <el-container>
      <el-header :style="headerStyle">
        <menu-header> </menu-header>
      </el-header>
      <el-main>
        <el-tabs
          v-model="editTabValue"
          type="card"
          closable
          @tab-click="tabClick"
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in panes.tabs"
            :key="item.name"
            :label="item.name"
            :name="item.name"
          >
            {{ item.name }}
          </el-tab-pane>
        </el-tabs>
        <slot name="mainContext"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import SideMenu from '@/components/basicLayout/sideMenu.vue';
import MenuHeader from '@/components/basicLayout/menuHeader.vue';
import { menuStyle } from '@/style';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'basicLayout',
  components: { MenuHeader, SideMenu },
  setup() {
    const { backgroundColor, color } = menuStyle;
    const editTabValue = ref('');
    var panes = reactive({
      tabs: [],
    });
    const currentComp = ref('');
    const router = useRouter();

    const addTab = (route: RouteRecordRaw) => {
      editTabValue.value = route.name;
      if (panes.tabs.length > 0) {
        let tempList = panes.tabs.filter((item) => {
          return item.name === route.name;
        });
        if (tempList.length === 0) {
          panes.tabs.push(route);
        }
      } else {
        panes.tabs.push(route);
      }
    };
    const removeTab = (targetName) => {
      if (targetName === editTabValue.value) {
        panes.tabs.forEach((item, index) => {
          if (item.name === targetName) {
            let panesTab = panes.tabs[index + 1] || panes.tabs[index - 1];
            if (panesTab) {
              editTabValue.value = panesTab.name;
              router.push({ name: panesTab.name });
            }
          }
        });
      }
      panes.tabs = panes.tabs.filter((item) => item.name !== targetName);
      if (panes.tabs.length === 0) {
        router.push({ path: '/' });
      }
    };
    const tabClick = (tab) => {
      router.push({ name: tab.props.name });
    };
    const headerStyle = {
      backgroundColor: backgroundColor,
      color: color,
    };
    return {
      headerStyle,
      addTab,
      editTabValue,
      panes,
      tabClick,
      currentComp,
      removeTab,
    };
  },
});
</script>

<style scoped></style>
