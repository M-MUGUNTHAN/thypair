import Creator from './Automation';
class FormBasic extends Creator{
     constructor(name=null){
          var state = {
               brand:"",
               date:"",
               live_campaign:"",
               website:"",
               budget:"",
               utm_source:"",
               utm_medium:"",
               utm_campaign:"",
               utm_term:"",
               utm_content:"",
           };
           var dispatch={             
            };
            
     super(state,dispatch,name);
}
};




export var  FormBasicExport = new FormBasic('FormBasic');

