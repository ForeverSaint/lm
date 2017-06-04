<template>
  <div class="monitorRange">
      <el-row>
        <el-col :span="4"><p>公司IATA代码:</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="IATA"></el-input></el-col>
        <el-col :span="4"><p><el-button type="primary" >修改</el-button></p></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>公司ICAO代码:</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="ICAO"></el-input></el-col>
        <el-col :span="4"><p><el-button type="primary">修改</el-button></p></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>分公司:</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="branch"></el-input></el-col>
        <el-col :span="4"><p><el-button type="primary">修改</el-button></p></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>航班类型:</p></el-col>
        <el-col :span="10">
          <el-checkbox-group v-model="checked">
            <el-checkbox v-for="item in checkList" :label="item" :key="item"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>航班性质选择:</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="fltTypeSelect"></el-input></el-col>
        <el-col :span="4"><p><el-button type="primary">修改</el-button></p></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>航站选择(ICAO代码):</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="ICAOCODE"></el-input></el-col>
        <el-col :span="4">
           <div class="io">
             <el-checkbox-group v-model="icaocode">
               <el-checkbox v-for="item in icaochecklist" :label="item" :key="item"></el-checkbox>
             </el-checkbox-group>
           </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>航站选择(IATA代码):</p></el-col>
        <el-col :span="10">
          <el-input type="textarea" :rows="3" v-model="IATACODE"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="10">
          <el-checkbox-group v-model="icaocode">
            <el-checkbox v-for="item in latacheckList" :label="item" :key="item"></el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>重点航班:</p></el-col>
        <el-col :span="10"><el-input type="textarea" :rows="3" v-model="emphasis"></el-input></el-col>
        <el-col :span="4"><p><el-button type="primary">修改</el-button></p></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><p>航线区域:</p></el-col>
        <el-col :span="3" :offset="1">
          <el-tree
            :data="data1"
            show-checkbox
            node-key="id"
            :props="defaultProps" :default-expand-all=true>
          </el-tree>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :props="defaultProps" :default-expand-all=true>
          </el-tree>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tree
            :data="data3"
            show-checkbox
            node-key="id"
            :props="defaultProps" :default-expand-all=true>
          </el-tree>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
  </div>
</template>

<script>
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  const  checkList = ['国际','国内','地区'];
  const  latacheckList = ['OD','VVIP','ETOPS','二放','极地','优选'];
  const  icaochecklist = ['进港','出港'];
  export default {
    components: {
      ElButton,
      ElInput},
    name:'monitorRange',
    data() {
        return {
          IATA:'',
          ICAO:'',
          branch:'',
          checkList:checkList,
          checked:[],
          fltType:[],
          fltTypeSelect:'',
          ICAOCODE:'',
          IATACODE:'',
          latacheckList:latacheckList,
          iatacode:['OD','VVIP'],
          icaochecklist:icaochecklist,
          icaocode:[],
          emphasis:'',
          data1:[{
              id:1,
              label:'国际航班',
              children: [{
                id: '1-1',
                label: '北美洲'
              }, {
                id: '1-2',
                label: '南美洲'
              },{
                id: '1-3',
                label: '欧洲'
              },{
                id: '1-4',
                label: '非洲'
              },{
                id: '1-5',
                label: '亚洲'
              },{
                id: '1-6',
                label: '大洋洲'
              }]
          }],
          data2:[{
            id:2,
            label:'国内航班',
            children: [{
              id: '2-1',
              label: '华北'
            }, {
              id: '2-2',
              label: '华南'
            },{
              id: '2-3',
              label: '华东'
            },{
              id: '2-4',
              label: '西南'
            },{
              id: '2-5',
              label: '西北'
            },{
              id: '2-6',
              label: '中南'
            },{
              id: '2-7',
              label: '东北'
            }]
          }],
          data3:[{
            id:3,
            label:'地区航班',
            children: [{
              id: '3-1',
              label: '港'
            }, {
              id: '3-2',
              label: '澳'
            },{
              id: '3-3',
              label: '台'
            }]
          }],
          defaultProps:{
            children: 'children',
            label: 'label'
          }
        }
    }
  }
</script>

<style scoped>
  .monitorRange p {
    margin: 0 20px;
  }
    .monitorRange .el-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
      margin-top: 20px;
    }
  .monitorRange .io {
    width: 55px;
    margin-left: 20px;
  }
  .monitorRange .io  .el-checkbox:nth-child(2){
    margin-left: 0;
    margin-top: 5px;
  }
</style>
