
//Initilizing the cometchat
CometChat.init(APP_ID).then(
    ()=> {
      console.log("Initialization completed successfully");
  
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );

//user login
 const handleLogin = event => {
    event.preventDefault();
    const { username } = this.state;
    if(!username){
      NotificationManager.error('Username must not be empty', 'Login Failed');
      return;
    }
    this.setState({
      isLoading: true
    })
    CometChat.login(username,this.state.API_KEY).then(
      user => {
        console.log("Login Successful:", {user});
        NotificationManager.success('You are now logged in', 'Login Success');
        this.setState({ username: '', isLoading: false });
        this.props.history.push({
          pathname: '/call',
          state: { user }
        })
      },
      error => {
        NotificationManager.error('Username is not registered', 'Login Failed');
        this.setState({
          isLoading: false
        })
      }
    );
  };

///////////////////////////////////////////////   CHAT    //////////////////////////////////////// 

 //useEffect componentdidmount function
 // initiliziing the function to fetch any previous messages send to this chat room
  var messagesRequest = new CometChat.MessagesRequestBuilder()
  .setGUID(REACT_APP_COMETCHAT_GUID)
  .setLimit(100)
  .build();

messagesRequest.fetchPrevious().then(
  messages => {
    this.setState({
      chat: messages,
      isLoading: false,
    });
  },
  error => {
    console.log('Message fetching failed with error:', error);
  }
);

//useEffect componentdidmount function
//CometChat message listener that will listen for any incoming message in real-time
CometChat.addMessageListener(
  'MESSAGE_LISTENER_KEY',
  new CometChat.MessageListener({
    onTextMessageReceived: message => {
      var {chat} = this.state;
      console.log('Incoming Message Log', {message});
      chat.push(message);
      this.setState({
        chat
      });
    },
  })
);

//handling the send message
const handleSendMessage = event => {
  event.preventDefault();
  const {message} = this.state;
  var textMessage = new CometChat.TextMessage(
    REACT_APP_COMETCHAT_GUID,
    message,
    CometChat.MESSAGE_TYPE.TEXT,
    CometChat.RECEIVER_TYPE.GROUP
  );
  CometChat.sendMessage(textMessage).then(
    message => {
      const { chat } = this.state;
      chat.push(message);
      this.setState({
        chat
      })
      console.log('Message sent successfully:', message);
    },
    error => {
      console.log('Message sending failed with error:', error);
    }
  );
  this.setState({
    message: '',
  });
};


//////////////////////////////////////     CALL    ///////////////////////////////////

//useEffect Componentdidmount 
//call listener
CometChat.addCallListener(
  listnerID,
  new CometChat.CallListener({
    onIncomingCallReceived(call) {
      console.log("Incoming 1:", call);
        console.log("Income", call.sessionId);
        setMyState(call)
          console.log("state set")
        //   this.sesid=call.sessionId;
    },
    onOutgoingCallAccepted(call) {
      console.log("Outgoing call accepted:", call);
      CometChat.startCall(
        call.sessionId,
        document.getElementById("callScreen"),
        new CometChat.OngoingCallListener({
          onUserJoined: user => {
            /* Notification received here if another user joins the call. */
            console.log("User joined call:", user);
            /* this method can be use to display message or perform any actions if someone joining the call */
          },
          onUserLeft: user => {
            /* Notification received here if another user left the call. */
            console.log("User left call:", user);
            /* this method can be use to display message or perform any actions if someone leaving the call */
          },
          onCallEnded: call => {
            /* Notification received here if current ongoing call is ended. */
            console.log("Call ended:", call);
            /* hiding/closing the call screen can be done here. */
          }
        })
      );
      // Outgoing Call Accepted
    },
    onOutgoingCallRejected(call) {
      console.log("Outgoing call rejected:", call);
      // Outgoing Call Rejected
    },
    onIncomingCallCancelled(call) {
      console.log("Incoming call calcelled:", call);
    }
  })
);

// start a call
const startVideoChat=()=>{
  var receiverID = this.state.receiver_id;
  var callType = CometChat.CALL_TYPE.VIDEO;
  var receiverType = CometChat.RECEIVER_TYPE.USER;
  var call = new CometChat.Call(receiverID, callType, receiverType);
  console.log(receiverID);
  CometChat.initiateCall(call).then(
    outGoingCall => {
      console.log("Call initiated successfully:", outGoingCall.sessionId);
      this.setState({sessionId: outGoingCall.sessionId},()=>{
          if(this.state.sessionIdSTate === true){
              this.acceptCall(this.state.sessionId)
          }
      })
      // perform action on success. Like show your calling screen.
    },
    error => {
      console.log("Call initialization failed with exception:", error);
    }
  );
}

//accept call
const acceptCall=()=>{
  console.log("accept call",this.state.sessionId);
CometChat.acceptCall(this.state.sessionId).then(
  call => {
    console.log("Call accepted successfully:", call,);
    console.log("call accepted now....");
    // start the call using the startCall() method
    CometChat.startCall(
      call.sessionId,
      document.getElementById("callScreen"),
      new CometChat.OngoingCallListener({
        onUserJoined: user => {
          /* Notification received here if another user joins the call. */
          console.log("User joined call:", user);
          /* this method can be use to display message or perform any actions if someone joining the call */
        },
        onUserLeft: user => {
          /* Notification received here if another user left the call. */
          console.log("User left call:", user);
          /* this method can be use to display message or perform any actions if someone leaving the call */
        },
        onCallEnded: call => {
          /* Notification received here if current ongoing call is ended. */
          console.log("Call ended:", call);
          /* hiding/closing the call screen can be done here. */
        }
      })
    );
  },
  error => {
    console.log("Call acceptance failed with error", error);
    // handle exception
  }
);
}

//reject call
const rejectCall=()=>{
  var sessionID=this.state.user.sessionId;
var status = CometChat.CALL_STATUS.REJECTED;
CometChat.rejectCall(sessionID, status).then(
  call => {
    console.log("Call rejected successfully", call);
  },
  error => {
    console.log("Call rejection failed with error:", error);
  }
);
}
