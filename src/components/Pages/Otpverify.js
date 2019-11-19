import React,{useState} from 'react';
import OtpInput from 'react-otp-input';
export default function Otpverify(props) {
  const [OTP, setOTP] = useState("");
    return (
    <div style={{width:"100%",height:"100%",color:"white"}}>
      <div style={{display:"block",margin:"auto",width:"80%",
    marginTop: "10%",marginRight: "10%"}}>
      <h1 style={{margin:"0 auto",fontSize:"30px"}}>Verification Code</h1>
        <p>gfggdsvfvgd fggadsgsd hdggfsddsvbhdsv</p>
        <OtpInput
          onChange={setOTP}
          value={OTP}
          containerStyle={{alignItems:"center",justifyContent:"center",}}
          shouldAutoFocus={true}
          isInputNum={true}
          focusStyle={{color:"#A70036"}}
          inputStyle={{width:"45px",fontSize:"1.5rem",margin:"10px",height:"55px",backgroundColor:'white',color:"#A70036",outline:"none",borderWidth:"0px",borderRadius:"15px"}}
        />
      </div>
       
    </div>
        );
}

