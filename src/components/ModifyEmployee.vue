<template>
    <div class = 'modify'>
<div id="box">
  <div class="btn group">
     <span id="button" v-on:click=popform()>{{ invite }} </span>
     </div>
     <br/>
    <form action="AddPerson" class="form" @submit=addingPerson()>
      <p><input type="text" placeholder="Name"/></p>
      <p><input type="text" placeholder="Role" /></p>
      <p><input type="submit" value="Invite!!!" /></p>
    </form>
    <div class="btn group">
      <span id="button" v-on:click=popform()>{{ remove }}</span>
    </div>
    <br/>
    <form action="RemovePerson" class="form" @submit=removePerson()>
      <p><input type="text" placeholder="Remove Who?"/></p>
      <p><input type="submit" value="Remove!!!" /></p>
    </form>
    <div class = "btn group">
      <span id="button" v-on:click=popform()>{{ modify }}</span>
    </div>
    <br/>
    <form action="ModifyPerson" class="form" onsubmit="alert('Successfully Modified');">
      <p><input type="text" placeholder="Name"/></p>
      <p><input type="text" placeholder="Role" /></p>
      <p><input type="submit" value="Modify!!!" /></p>
    </form>
</div>
    </div>
</template>
<script>
import $ from 'jquery';
export default({
    name: '#modify',
    data(){
        return{
            invite:'Click here to invite',
            remove:'Click here to remove',
            modify:'Click here to modify'
        }
    },
    methods: {
        addingPerson(){ 
          alert("Invited Employee");
          this.$store.commit('addEmployee',{name:"Hello",
          role:"Technician",active:true});
        },        
        removePerson(){ 
          "alert('Successfully Removed');"
          this.$store.commit('removeEmployee');
  $("#box form").toggle("slow");
  return false;
        },        
        modifyPerson(){ 
  $("#box form").toggle("slow");
  return false;
        },
        popform(){
  $("#box form").toggle("slow");
  return false;
        }
    },
    props:{
      empname: String,
      emprole:String
    }
})
</script>
<style scoped>
#box {
  padding:5px;
  width:200px;
  z-index:10;
  position:relative;  
  float: left;
}
#box form {
 background:#006969;
 padding:5px;
 display:none;
 position:relative;
 top:27px;
}
#box form {
 background:#006969;
 padding:5px;
 display:none;
 position:relative;
 top:27px;
}
#box form {
 background:#006969;
 padding:5px;
 display:none;
 position:relative;
 top:27px;
}
#button {
  width:75px;
  background:#006969;
  color:#fff;
  padding:3px 10px;
  border:1px solid #006969;  
  margin-bottom:15px;  
  cursor:pointer;
}
input[type="submit"] {
  background:none;
  color:#fff;
  border:none;
  text-align:left;
  cursor:pointer;
}
</style>