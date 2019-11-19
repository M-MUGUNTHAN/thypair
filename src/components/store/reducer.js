import * as constant from './const';
import jQuery from 'jquery';
// import $ from 'jquery'
// import { copyObj } from '../utils/func';
const copyObj = (obj)=>obj? Object.prototype.toString.call(obj)=="[object Object]"? jQuery.extend(true, {}, obj):JSON.parse(JSON.stringify(obj)):obj

const vals = Object.keys(constant)  //$.map(constant,(k,v)=>v)
// console.log("stateVal:",vals.reduce((obj,val)=>{console.log(obj,val); return obj}),{})
var initState={}
var dispatchFunc = {}
var dispatchClass = {}
vals.map((val)=>{
    initState[constant[val].classname]=constant[val].state_obj;
    // $.map(constant[val].dispatchNames,(name,objName)=>dispatchFunc[name]=constant[val].dispatch_obj[objName]);
    // $.map(constant[val].dispatchNames,(name,objName)=>dispatchClass[name]=constant[val]);
    Object.entries(constant[val].dispatchNames).map(x=>{var name=x[1];var objName=x[0];return dispatchFunc[name]=constant[val].dispatch_obj[objName]})
    Object.entries(constant[val].dispatchNames).map(x=>{var name=x[1];return dispatchClass[name]=constant[val]})
    return null
});

export default (state=initState,action)=>{
    if (action.type==="SagaInit"){var newstate=copyObj(state);newstate["saga"]=action.saga;return newstate }
    if( !(action.type in dispatchClass)){console.log("invalid action type:",action.type,action); return state}
    var ObjClass = dispatchClass[action.type];
    ObjClass.initState = copyObj(initState[ObjClass.classname])
    ObjClass.stateGlobal = copyObj(state);
    ObjClass.stateLocal = copyObj(ObjClass.stateGlobal[ObjClass.classname]);
    // console.log("dispatch:",ObjClass.stateLocal)
    dispatchFunc[action.type](...ObjClass.order);
    ObjClass.stateGlobal[ObjClass.classname] = copyObj(ObjClass.stateLocal);
    // console.log("after mod dispatch:",ObjClass.stateLocal)
    return ObjClass.stateGlobal
}
