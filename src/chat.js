import React, { Component } from 'react';

class KommunicateChat extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {
                "userId": '055667788',
                "userName": 'ABC',
                "authenticationTypeId" : 1,
                "appId":"2cfbc65b77f505c2ca3913979ba4b8ddf",
                "popupWidget":true,
                "attachment": true,
                "automaticChatOpenOnNavigation":false,
                "voiceInput":true,
                "voiceInputTimeout": 5,
                "language": "en-US",
                "quickReplies":
                    [
                        "Speak with an Agent",
                        "Book a Demo",
                        "Sample Bots",
                    ],
                
            };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render() {
        return (
        <div></div>
        )
    }
}
export default KommunicateChat;