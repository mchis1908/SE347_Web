import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

class KommunicateChat extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { user_id, tennv } = this.props;
        (function(d, m){
            var kommunicateSettings = {
                "userId": !user_id ? '' : user_id,
                "userName": !tennv ? '' : tennv,
                "authenticationTypeId" : 1,
                "appId":"ba40f9d597326471f447b818cad725f3",
                "automaticChatOpenOnNavigation":true,
                "popupWidget":true,
                "attachment": true,
                "voiceInput":true,
                "voiceInputTimeout": 5,
                "language": "en-US",
                "quickReplies":
                    [
                        "Đây có phải cửa hàng ký gửi quần áo cũ không?",
                        "Mức phí mà tôi phải trả cho một sản phẩm là bao nhiêu?",
                        "Thời gian cửa hàng hoạt động là?",
                        "Cho tôi biết địa chỉ của cửa hàng?",
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

// Map Redux state to component props
const mapStateToProps = state => ({
    user_id: state.value.user_id,
    tennv: state.value.tennv,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(KommunicateChat);