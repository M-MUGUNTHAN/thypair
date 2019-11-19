import jQuery from 'jquery';
// import { copyObj } from '../utils/func';
export const copyObj = (obj)=>obj? Object.prototype.toString.call(obj)=="[object Object]"? jQuery.extend(true, {}, obj):JSON.parse(JSON.stringify(obj)):obj