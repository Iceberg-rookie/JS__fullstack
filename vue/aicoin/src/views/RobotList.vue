<template>
    <div>
        <div class="crumbs">
           <el-breadcrumb>
            <el-breadcrumb-item>
              <i class="el-icon-lx-calendar"></i> 量化机器人
            </el-breadcrumb-item>
            <el-breadcrumb-item>机器人列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55px" align="center"></el-table-column>
                <el-table-column
                  type="index"
                  :index="indexMethod"
                  align="center"
                ></el-table-column>
                <el-table-column prop="name" label="币种" align="center"></el-table-column>
                <el-table-column label="价格" align="center">
                    <template #default="scope">￥{{ scope.row.money }}</template>
                </el-table-column>
                <el-table-column label="成交数量" align="center">
                    <template #default="scope">{{ scope.row.num }}</template>
                </el-table-column>
                <el-table-column label="手续费" align="center">
                    <template #default="scope">{{ scope.row.fee }}</template>
                </el-table-column>
                <el-table-column label="已实现盈亏" align="center">
                    <template #default="scope">{{ scope.row.pal }}</template>
                </el-table-column>

                <el-table-column prop="date" label="交易时间" align="center"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template #default="scope">
                        <el-button
                            type="text"
                            icon="el-icon-search"
                            @click="show(scope.$index, scope.row)"
                        >查看</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <div class="pagination">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="query.pageSize"
                ></el-pagination>
            </div>
        </div>

        <!-- 查看弹出框 -->
        <el-dialog title="查看" v-model="showVisible" width="30%">
            
            <template #footer>  
                <span class="dialog-footer">
                    <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from "../api/index";
export default {
    name: "robotlist",
    data() {
        return {
            query: {
                name: '',
                currentPage: 1,
                pageSize: 12,
            },
            tableData: [],
            multipleSelection: [],
            showVisible: false,
            delList: [],
            pageTotal: 0,
            idx: -1,
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // index自增长
        indexMethod(index) {
            return ++index
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                // console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 10;
            });
        },
        // 删除操作
        handleDelete(index) {
            // 二次确认删除
            this.$confirm("确定要删除吗？", "提示", {
              type: "warning"
            })
              .then(() => {
                this.$message.success("删除成功");
                this.tableData.splice(index, 1);
              })
              .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        delAllSelection() {
          // const length = this.multipleSelection.length;
          // let str = "";
          this.delList = this.delList.concat(this.multipleSelection);
          // for (let i = 0; i < length; i++) {
              // str += this.multipleSelection[i].name + " ";
          // }
          this.$message.success(`删除成功`);

        },
        // 查看操作
        show(index, row) {
          this.idx = index;
          this.form = row;
          this.showVisible = true;
        },
        // 确认
        confirm() {
          this.showVisible = false;
        },
        // 分页导航
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}

.table {
    width: 100%;
    font-size: 14px;
}

.red {
    color: #ff0000;
}

.mr10 {
    margin-right: 10px;
}

.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>