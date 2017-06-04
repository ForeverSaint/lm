<template>
  <div>
  <!--查询区块表单-->
  <el-row :gutter="20">
  <el-form :inline="true" :model="formInline">
      <el-col :span="6">
       <el-form-item label="控制方案名称"> <el-input v-model="formInline.user" placeholder=""></el-input></el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="内容描述"><el-input v-model="formInline.content" placeholder=""></el-input></el-form-item>
      </el-col>
      <el-col :span="2">
       <el-form-item><el-button type="primary" @click="onSubmit" size="small">查询</el-button></el-form-item>
      </el-col>
  </el-form>
  </el-row>
<!--用户控制模板维护 Bar-->
   <div class="tool-bar">
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">用户控制模板维护</el-col>
        <el-col :span="1" :offset="16"><el-button type="primary" @click="dialogFormVisible = true" size="small">新增</el-button> </el-col>
        <el-col :span="1"><el-button type="success" @click="onSubmit" size="small">保存</el-button></el-col>
        <el-col :span="1"><el-button type="warning" @click="onSubmit" size="small">取消</el-button></el-col>
      </el-row>
    </div>
  <!--表格-->
  <div class="table">
     <el-table :data="tableData" style="width: 100%"  border stripe height="250" highlight-current-row  @current-change="handleCurrentChange">
      <el-table-column prop="name"  label="现有控制方案名称" width="180" align="center"></el-table-column>
      <el-table-column prop="createTime"  label="创建时间" width="180" align="center"></el-table-column>
      <el-table-column prop="createUser" label="创建人" align="center"></el-table-column>
      <!--<el-table-column prop="address" label="所在部门" align="center"></el-table-column>-->
      <el-table-column prop="description" label="控制内容描述" align="center"></el-table-column>
      <el-table-column prop="action" label="操作" align="center">
        <template scope="scope">
         <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
         <el-switch v-model="status" on-color="#13ce66" off-color="#ff4949" on-text="开启" off-text="关闭"></el-switch>
        </template>
      </el-table-column>
     </el-table>
    <!--分割线-->
    <h3 class="spilt"></h3>
    <!--详细操作面板-->
    <div class="broad">
      <div class="left">
        <el-form ref="form" :model="form" label-position="left" label-width="80px">
          <fieldset>
            <legend align="left">
              <el-button type="success" size="small">发布时间控制</el-button>
            </legend>
            <el-row>
              <el-col :span="18"><el-form-item label="分钟"> <el-input v-model="form.minute"></el-input></el-form-item></el-col>
              <el-col :span="6"><div class="tips">(逗号隔开)</div></el-col>
            </el-row>
            <el-row>
               <el-col :span="18"><el-form-item label="小时(24)"> <el-input v-model="form.hour"></el-input></el-form-item></el-col>
               <el-col :span="6"><div class="tips">(逗号隔开)</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="18"><el-form-item label="日期"><el-input v-model="form.date"></el-input></el-form-item></el-col>
              <el-col :span="6"><div class="tips">(逗号隔开)</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                 <el-form-item label="月份">
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                 </el-form-item>
              </el-col>
              <el-col :span="4"></el-col>
            </el-row>
             <el-row>
                 <el-col :span="20">
                  <el-form-item label="星期">
                   <el-checkbox-group v-model="checkedWeekDays">
                       <el-checkbox v-for="weekday in WeekDays" :label="weekday" :key="weekday">{{weekday}}</el-checkbox>
                   </el-checkbox-group>
                  </el-form-item>
                 </el-col>
                  <el-col :span="4"></el-col>
             </el-row>
          </fieldset>
        </el-form>
      </div>


      <div class="right">
        <!--发布内容选择-->
        <el-row>
          <el-col :span="3">
            <div class="label">发布内容选择</div>
          </el-col>
          <el-col :span="21">
             <el-radio-group v-model="radio1">
                <el-radio v-for="item in radios" :label="item.label" :key="item.label">{{item.text}}</el-radio>
              </el-radio-group>
          </el-col>
        </el-row>
          <el-row>
         <el-col :span="3">
              <div class="label">发布内容选择</div>
         </el-col>
         <el-col :span="21">
               <el-radio-group v-model="radio2">
                <el-radio v-for="item in radios1" :label="item.label" :key="item.label">{{item.text}}</el-radio>
              </el-radio-group>
         </el-col>
          </el-row>
           <el-row>
          <el-col :span="3">
              <div class="label">发布格式选择</div>
         </el-col>
         <el-col :span="21">
               <el-radio-group v-model="radio2">
                <el-radio v-for="item in radios2" :label="item.label" :key="item.label">{{item.text}}</el-radio>
              </el-radio-group>
         </el-col>
        </el-row>
         <!--底部-->
       <el-row>
          <div class="bottom">
            <!---->
            <p class="left-bar">
              发布途径控制
            </p>
              <div class="tabs">
                <ul>
                  <li @click="toggle(index,tab.view)" v-for="(tab,index) in tabs" :key="tab.type">
                      {{tab.type}}
                  </li>
                </ul>
                <keep-alive>
                  <component :is="currentView"></component>
                </keep-alive>
              </div>
          </div>
       </el-row>
      </div>
    </div>
  </div>
<!--新增Model-->
    <div class="addModel">
      <add-model :display="dialogFormVisible" v-on:close="close" v-on:confirm="confirm"></add-model>
    </div>
  </div>
</template>

<script>
import tab_one from '@/components/tab/tab_one'
import tab_two from '@/components/tab/tab_two'
import addModel from '@/components/addModel/addModel'
import ElCol from "element-ui/packages/col/src/col";
import { timeFormater } from 'tools';
//import fetch from 'fetch';

const cityOptions = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const WeekDays = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
const radios = [
  {label:'1',text:'ODS数据'},
  {label:'2',text:'MVT计划对比'},
  {label:'3',text:'ASM计划对比'}];

  const radios1 = [
  {label:'6',text:'变更前后内容'},
  {label:'7',text:'仅变更后'}];

  const radios2 = [
  {label:'10',text:'按天计划'},
  {label:'11',text:'长期计划'}]

export default {
  name: 'hello',
  components: {
    ElCol,
    tab_one,
      tab_two,
      addModel
  },
  data () {
    return {
      formInline: {
        user:'',
        content:''
      },
      form: {
        region:'',
        checked:true,
        minute:'',
        hour:'',
        date:''
      },
      status:true,
      tableData: [],
      checkedCities: ['01', '02'],
      checkedWeekDays: ['星期一','星期二'],
      WeekDays: WeekDays,
      cities: cityOptions,
      isIndeterminate: true,
      radios: radios,
      radios1: radios1,
      radios2: radios2,
      radio1:'',
      radio2:'',
      radio3:'',
      currentView:'tab_one',
      tabs: [
        {
            type:'邮件',
            view:'tab_one'
        },
        {
          type:'电报',
          view:'tab_two'
        }
      ],
      active:0,
      dialogFormVisible:false
    }
  },
  created() {
    this.init();
  },
  methods: {
    //提交表单方法
    onSubmit() {
      console.log(this.formInline);
    },
    //初始化数据
    init() {
        //返回的promise必须使用箭头函数
      this.$ajax('/aoc/flightPlanDist/flightPlanDistRule/ls')
        .then(response => {
          console.log(response);
          this.loadTableData(response.data.body.rows);
        })
        .catch(response => {
          console.log(response);
        });
    },
    //表格数据整理
     loadTableData(data) {
       if(this.tableData.length !== 0) this.tableData.length === 0 ;
       if(!data) return true;
        let key = ['createTime','createUser','description','name'];
        let tableData = [];
        for(let i of data) {
          tableData.push({
             createTime: i.createTime === undefined ? '' : timeFormater(i.createTime,'yyyy-MM-dd hh:mm:ss') ,
             createUser: i.createUser === undefined ? '' : i.createUser ,
             description: i.description === undefined ? '' : i.description ,
             name: i.name === undefined ? '' : i.name
           })
        }
       this.tableData = tableData;
        console.log(this.tableData.length);
     },
    //表格单选时间
    handleCurrentChange(val) {
        console.log(val);
    },
    //编辑操作
    handleEdit(index, row) {
        console.log(index, row);
    },
    //删除操作
    handleDelete(index, row) {
        console.log(index, row);
    },
    //
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
    //动态组件切换方法
    toggle(i,v) {
        this.active = i;
        this.currentView = v;
    },
    //弹窗关闭操作,可执行异步关闭
    close() {
        setTimeout(() => {
            //..设置loading和其他操作，延时为示例
          this.dialogFormVisible = false;
        },1000)
    },
    //弹框确认操作，可执行异步关闭
    confirm() {
        this.dialogFormVisible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
    .tool-bar {
       background-color:#D5EBCB;
       padding:10px 0;
       margin-bottom: 20px;
    }
    .spilt {
      border:1px dashed #3C763D;
    }
    .broad {
      display: flex;
    }
    .broad .left {
      flex: 500px 0 0;
      margin-right: 20px;
      border-right: 1px solid #D6ECCD;
    }
    .broad .right {
      flex: 1 0 0;
    }
    .el-checkbox-group {
      text-align: left;
    }
    .el-checkbox-group .el-checkbox:nth-child(7) {
      margin-left:0;
    }

    .el-checkbox-group:nth-of-type(2) .el-checkbox:nth-child(5) {
      margin-left:0;
    }

    .tips {
      line-height: 2;
      text-align: center;
    }
    .label {
      line-height: 1.2;
      text-align: left;
    }
    .right .el-row {
      margin: 5px 0 10px 0 ;
    }
    .right .el-row  .el-col:nth-child(2) {
      text-align: left;
    }
     .right .el-row:nth-child(4) .el-radio:last-child {
       margin-left: 72px;
     }
     .bottom {
       border:1px solid #D6ECCD;
       border-radius: 5px;
       position: relative;
       padding-bottom:36px;
     }
     .bottom .left-bar {
       position: absolute;
       top:36px;
       left: -10px;
       width: 16px;
       font-size: 12px;
       padding: 10px 2px;
       text-align: center;
       color: #fff;
       background-color: #13CE66;
     }
    .tabs > ul > li{
      display: inline-block;
      width: 40px;
      text-align: center;
      padding: 2px 10px;
      color:#fff;
      background-color: #5BC0DE;
      border-right: 1px solid #fff;
      border-radius: 3px;
    }
  .tab {
    margin-left: 40px;
    margin-right: 20px;
    height: 110px;
    overflow: auto;
    border: 2px solid #3498DB;
    border-radius: 5px;
    padding: 0 20px;
  }
</style>

