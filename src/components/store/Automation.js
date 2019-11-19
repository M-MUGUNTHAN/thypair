import jQuery from 'jquery';
const copyObj = (obj)=>obj? Object.prototype.toString.call(obj)=="[object Object]"? jQuery.extend(true, {}, obj):JSON.parse(JSON.stringify(obj)):obj

// import * as API from '../sagas/API';
export default class Creator {
    constructor(state_obj,dispatch_obj,_name=null){
         var name =_name?_name:  this.constructor.name;
         this.stateGlobal={};
         this.stateLocal={};
         this.initState={};
         this.order = [];
         this.saga = ()=>{};
         this.state_obj=state_obj;
         dispatch_obj["RESET"]=()=>{this.stateLocal=this.initState} //extra common functions
         dispatch_obj["ChangeState"]=(_name,val)=>{this.stateLocal[_name]=val} //extra common functions
         this.dispatch_obj=dispatch_obj;
         this.classname=name;
         this.dispatchNamesArray= Object.keys(this.dispatch_obj)  //$.map(this.dispatch_obj,(val,key)=>key);
        //  console.log("dispatch",this.dispatch_obj)
         this.dispatchNames=this.dispatchNamesArray.reduce(
              function(obj,val){obj[val]=name+'_'+val; return obj},{});
    
    } 
    reset=()=>{this.stateLocal=this.initState}
 
    // getApiData(){ 
    //     var user =JSON.parse(sessionStorage.getItem("User"))
    //     if(user.emailVerified)
    //     {return { formname:this.classname, user:user.email}}
    //     else {alert("Please verify your email to Use this application."); return null}
    // }
    getArguments(func) {
         const ARROW = true;
         const FUNC_ARGS = ARROW ? /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m : /^(function)\s*[^\(]*\(\s*([^\)]*)\)/m;
         const FUNC_ARG_SPLIT = /,/;
         const FUNC_ARG = /^\s*(_?)(.+?)\1\s*$/;
         const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
     
         return ((func || '').toString().replace(STRIP_COMMENTS, '').match(FUNC_ARGS) || ['', '', ''])[2]
             .split(FUNC_ARG_SPLIT)
             .map(function(arg) {
                 return arg.replace(FUNC_ARG, function(all, underscore, name) {
                     return name.split('=')[0].trim();
                 });
             })
             .filter(String);
     }
    get_state(state){
        var obj = copyObj(state['reduce'][this.classname]);
        obj["stateLocal"]=this.stateLocal
        obj["stateGlobal"]=this.stateGlobal
        // console.log("getstate:",state,obj)

         return obj
        
     }
     get_dispatcher(dispatch){
         this.saga=dispatch
         
          var OBJ= this.dispatchNamesArray.reduce(
               (obj,val)=>{obj[val]=(...all)=>{this.order=all;  return dispatch({...this.getArguments(this.dispatch_obj[val]).reduce(
                    (obj,val)=>{obj[val]=val;return obj},{}), 'type':this.dispatchNames[val]})};
           return obj},{});
           OBJ["dispatch"] = dispatch
        OBJ["saga"]=(action)=>dispatch(action)
        // OBJ["getApiData"]=()=> this.getApiData()
        // OBJ["RESET"] = ()=>  dispatch({'type':this.classname+"_RESET_DATA"})
        return OBJ;
     }
} 