<script type="text/javascript">
import ModifyEmployee from './ModifyEmployee.vue'
export default({
  name: '#emplist',
  components: { ModifyEmployee},
  data(){
    return{
    employeelist:[
      {fname:"Abhinand Hari", role:"Admin" , active:true},
      {fname:"Abhiram Manohar" , role:"Tech Support" , active:true},
      {fname:"Nithin Jayashankar" , role:"Tech Support" , active:false},
      {fname:"Sameera Singh" , role:"Project Manager" , active:true},
      {fname:"Sarvajit Ramesh" , role:"Software Developer" , active:false}
    ]
  }
},
computed:{
  myProperty(){
    alert('Hi!')
    return 'Alerted the Horde'
  }
}
}
)
</script>
<template>
<div class = 'emplistwiththe modify'>
  <modify-employee/>
  <div class = 'emplist' >     
    <label v-for='emp in employeelist' v-bind:key='emp.active'>
    <div class="card">
    <div class="container">
      <b>{{emp.fname}}</b>
      <br>
      {{emp.role}}
    </div>
    </div>
    <br/>
    </label>
  </div>
  </div>
</template>


<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width:50%;
  margin-left: auto;
  margin-right: auto;
  height:auto;
  align-items: center;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
