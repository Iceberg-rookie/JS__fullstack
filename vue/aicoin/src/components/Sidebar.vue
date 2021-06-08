<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
// import bus from "../common/bus";
export default {
    data() {
        return {
            items: [
                {
                    icon: "el-icon-lx-home",
                    index: "dashboard",
                    title: "系统首页"
                },
                {
                    icon: "el-icon-lx-people",
                    index: "personal",
                    title: "个人中心",
                    subs: [
                        {
                            index: "settings",
                            title: "个人设置"
                        },
                        {
                            index: "orders",
                            title: "我的订单"
                        }
                    ]
                },
                {
                    icon: "el-icon-data-line",
                    index: "forecasting",
                    title: "价格预测",
                    subs: [
                        {
                            index: "Bitcoin",
                            title: "比特币"
                        },
                        {
                            index: "Litecoin",
                            title: "莱特币"
                        },
                        {
                            index: "Dogecoin",
                            title: "狗狗币"
                        }
                    ]
                },
                {
                    icon: "el-icon-lx-service",
                    index: "robot",
                    title: "量化机器人",
                    subs: [
                        {
                            index: "trading-strategy",
                            title: "交易策略"
                        },
                        {
                            index: "trading-record",
                            title: "交易记录"
                        },
                        {
                            index: "robots",
                            title: "机器人列表"
                        }
                    ]
                },
                {
                    icon: "el-icon-data-analysis",
                    index: "dataShow",
                    title: "数据展示",
                    subs: [
                        {
                            index: "Bitcoin-price",
                            title: "比特币价格"
                        },
                        {
                            index: "Litecoin-price",
                            title: "莱特币价格"
                        },
                        {
                            index: "Dogecoin-price",
                            title: "狗狗币价格"
                        }
                    ]
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace("/", "");
        },
        collapse(){
            return this.$store.state.collapse
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
