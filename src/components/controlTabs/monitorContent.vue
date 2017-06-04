<template>
  <div class="monitorContent">
     <el-row :gutter="20">
       <el-col :span="6">
         <div class="monitorContent-left">
           <div class="monitorContent-item" v-for="item in pageData">
            <el-row :gutter="20">
              <el-col :span="24" v-if="!item.checked">
               <p>{{item.label + ':'}}</p>
              </el-col>
              <el-col :span="24" v-if="item.checked">
                <p><el-checkbox v-model="dataBind[item.checked]">{{item.label + ':'}}</el-checkbox></p>
              </el-col>
              <el-col :span="24" v-if="item.bind">
              <el-checkbox-group v-model="dataBind[item.bind]">
                <el-checkbox v-for="item in toggle" :label="item" :key="item"></el-checkbox>
              </el-checkbox-group>
            </el-col>
              <el-col :span="12" v-if="item.setting">
              </el-col>
            </el-row>
           </div>
         </div>
       </el-col>

       <el-col :span="9">
         <div class="monitorContent-right">
           <div class="monitorContent-item" v-for="item in pageData1">
             <el-row :gutter="20">
               <el-col :span="12" v-if="!item.checked">
                 <p>{{item.label + ':'}}</p>
               </el-col>
               <el-col :span="12" v-if="item.checked">
                 <p><el-checkbox v-model="dataBind[item.checked]">{{item.label}}</el-checkbox></p>
               </el-col>
               <el-col :span="12" v-if="item.bind">
                 <el-checkbox-group v-model="dataBind[item.bind]">
                   <el-checkbox v-for="item in toggle" :label="item" :key="item"></el-checkbox>
                 </el-checkbox-group>
               </el-col>
             </el-row>
           </div>
         </div>
       </el-col>


       <el-col :span="9">
         <div class="monitorContent-right">
           <div class="monitorContent-item" v-for="item in pageData2">
             <el-row :gutter="20">
               <el-col :span="12" v-if="item.checked">
                 <p><el-checkbox v-model="dataBind[item.checked]">{{item.label}}</el-checkbox></p>
               </el-col>
               <el-col :span="4" v-if="item.input">
                 <p>{{item.label + ':'}}</p>
               </el-col>
               <el-col :span="20" v-if="item.input">
                  <el-row>
                    <el-col :span="10">
                      向后调整大于等于(分钟)
                    </el-col>
                    <el-col :span="6">
                      <el-input type="primary" size="small"></el-input>
                    </el-col>
                  </el-row>
               </el-col>
             </el-row>
           </div>
         </div>
       </el-col>

     </el-row>
  </div>
</template>

<script>
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElRow from "element-ui/packages/row/src/row";
  const toggle = ['新增','取消'];
  export default {
    components: {
      ElRow,
      ElInput},
    name:'monitorContent',
    data() {
        return {
            toggle:toggle,
            dataBind: {
              addFltNo:['新增'],
              offAirport:['取消'],
              onAirport: ['新增','取消'],
              startExecute: true,
              endExecute:false,
              classHour:true,
              gen:true,
              telegram:true,
              locomotiveRelease:true,
              inputAir:true,
              outputAir:true,
              rfltTask:true,
              uwakeFlowLevel:true,
              uhightCate:true,
              uapproachType:true,
              uforeignCrew:true,
              STA:'',
              STD:''
            },
            pageData:[{
                label:'航班号',
                bind:'addFltNo'
            },{
                label:'计划起飞机场',
                bind:'offAirport'
            },{
              label:'计划落地机场',
              bind:'onAirport'
            },{
              label:'开始执行时间',
              checked:'startExecute'
            },{
              label:'结束执行时间',
              checked:'endExecute'
            },{
              label:'班期',
              checked:'classHour'
            }],
          pageData1: [{
            label:'情报区',
            checked:'gen'
          },{
            label:'电报地址',
            checked:'telegram'
          },{
            label:'机务放行区域',
            checked:'locomotiveRelease'
          },{
            label:'国际标准航班性质',
            checked:'outputAir'
          },{
            label:'国内标准航班性质',
            checked:'inputAir'
          },{
            label:'航班性质',
            checked:'rfltTask'
          },{
            label:'尾流等级',
            checked:'uwakeFlowLevel'
          },{
            label:'高度分类',
            checked:'uhightCate'
          },{
            label:'进近类别定义分类',
            checked:'uapproachType'
          },{
            label:'外籍机组',
            checked:'uforeignCrew'
          }],
          pageData2:[{
            label:'ICAO 机型',
            checked:'gen'
          },{
            label:'IATA 机型',
            checked:'telegram'
          },{
            label:'运行规范机型',
            checked:'locomotiveRelease'
          },{
            label:'商务定义机型',
            checked:'outputAir'
          },{
            label:'厂商定义机型',
            checked:'inputAir'
          },{
            label:'NDB 机型',
            checked:'rfltTask'
          },{
            label:'FMC 机型',
            checked:'uwakeFlowLevel'
          },{
            label:'机务机型',
            checked:'uhightCate'
          },{
            label:'机场批复的运行规范机型',
            checked:'uapproachType'
          },{
            label:'STD',
            input:'STD'
          },{
            label:'STA',
            input:'STA'
          }]
        }
    }
  }
</script>

<style>
  .monitorContent-left,.monitorContent-right {
    margin: 20px 0;
  }
  .monitorContent-left {
    border-right: 1px dotted red;
  }
  .monitorContent-item .el-row {
    display: flex;
    align-items: center;
  }
  .monitorContent-item  p {
     margin-left: 20px;
  }
</style>
