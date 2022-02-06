import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        employeelist:[
            {name:"Abhinand Hari", role:"Admin" , active:true},
            {name:"Abhiram Manohar" , role:"Tech Support" , active:true},
            {name:"Nithin Jayashankar" , role:"Tech Support" , active:false},
            {name:"Sameera Singh" , role:"Project Manager" , active:true},
            {name:"Sarvajit Ramesh" , role:"Software Developer" , active:false}
          ],
    },
    mutations:{
        addEmployee(state,name,role){
            state.employeelist.push({name,role});
        },
        removeEmployee(state){
            state.employeelist.pop()
        }
    }
})