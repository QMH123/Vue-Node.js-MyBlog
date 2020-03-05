<template>
    <div class="box">
        <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 80%;position:relative;left:10%;top:10%;">
    <el-table-column
      label="博客标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<style scoped>
    .box{
        position: relative;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        background-color: white;
        border-radius: 10px;
    }
</style>
<script>
  export default {
    name:'manager',
    data() {
      return {
        tableData: [],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
         var that = this
        var blogtitle = row.title
        this.$confirm('是否确定编辑博客信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            console.log(blogtitle)
           that.$router.push({name:'editBlog',params:{title:blogtitle}});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
      handleDelete(index, row) {
          var that = this
        var title = row.title
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           that.$request
                .post('/blog/delBlog',{"title":title})
                .then((res)=>{
                    console.log(res)
                    that.$request
                      .get('/blog/getBlogList')
                      .then((res)=>{
                        // console.log(res.data)
                        that.tableData = res.data
                    })
                })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    created(){
        var that = this
        this.$request
        .get('/blog/getBlogList')
        .then((res)=>{
            // console.log(res.data)
            that.tableData = res.data
        })
    }
  }
</script>
