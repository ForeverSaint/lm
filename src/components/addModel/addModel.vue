<template>
    <div>
      <el-dialog title="收货地址" :visible="display" size="full">
         <!--方案搜索框-->
        <el-form :model="form">
          <!--方案搜索框-->
          <el-row>
            <el-col :span="8" :offset="2">
              <el-form-item label="方案名称" label-width="120px">
                <el-input v-model="form.name" auto-complete="on" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-form-item label="内容描述" label-width="120px">
                <el-input v-model="form.description" auto-complete="on" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--监控方案Tab组件-->
          <div class="monitor-tabs">
            <el-row>
               <el-col :span="24">
                 <ul>
                   <li  @click="toggle(index,tab.view)"
                        v-for="(tab,index) in tabs"
                        :key="tab.type"
                        :class="{active:active===index}"
                   >
                     {{tab.type}}
                   </li>
                 </ul>
                 <!--tab组件-->
                 <div class="tabs">
                   <keep-alive>
                     <component :is="currentView"></component>
                   </keep-alive>
                 </div>
               </el-col>
            </el-row>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>

</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElCol from "element-ui/packages/col/src/col";
  import monitorSetting from "@/components/controlTabs/monitorSetting";
  import monitorRange from "@/components/controlTabs/monitorRange";
  import monitorContent from "@/components/controlTabs/monitorContent"
  import displayContent from "@/components/controlTabs/displayContent"

    export default {
      components: {
        ElCol,
        ElFormItem,
        ElRow,
        monitorSetting,
        monitorRange,
        monitorContent,
        displayContent
      },
      name:'addModel',
        props: {
          display: {
              type: Boolean,
               default: false
          }
        },
       data() {
          return {
            form: {
                name:'',
                description:''
            },
            currentView:'monitorRange',
            tabs:[{
                type:'监控范围',
                view:'monitorRange'
            },{
                type:'监控内容',
                view:'monitorContent'
            },{
                type:'显示内容',
                view:'displayContent'
            },{
                type:'运控监控设置',
                view:'monitorSetting'
            }],
            active:0
          }
       },
         methods: {
          //关闭操作
            close() {
               this.$emit('close');
            },
           //确定操作
            confirm() {
              this.$emit('confirm');
            },
           //切换组件
           toggle(i,v) {
             this.active = i;
             this.currentView = v
           }
         }
    }

</script>

<style scoped>
  .monitor-tabs  ul li{
      display: inline-block;
      padding:3px 5px;
      color:#fff;
      margin-right: 5px;
      cursor: pointer;
      background-color: cadetblue;
  }
  .monitor-tabs  ul  .active {
    transition: all .3s;
    background-color: #0099FF;
  }
  .tabs {
    border:1px solid #797979;
    min-height: 600px;
  }
</style>
