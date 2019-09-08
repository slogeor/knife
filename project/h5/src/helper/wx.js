// 环境注入
var isWxReady = false;
var readyFunc = [];
var wxApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'closeWindow'];
window.wxApi = {};
wxApiList.forEach(function (apiName) {
  window.wxApi[apiName] = function (params) {
    if (isWxReady) {
      wx[apiName](params);
    } else {
      readyFunc.push(function () {
        wx[apiName](params);
      });
    }
  };
});

window.wxApi.config = function (_ref) {
  var _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    appId = _ref.appId,
    timestamp = _ref.timestamp,
    nonceStr = _ref.nonceStr,
    signature = _ref.signature,
    _ref$jsApiList = _ref.jsApiList,
    jsApiList = _ref$jsApiList === void 0 ? ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'closeWindow'] : _ref$jsApiList;

  console.log(debug)
  console.log(jsApiList)
  console.log(appId)
  console.log(nonceStr)
  console.log(signature)
  wx.config({
    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，
    // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，
    // 仅在pc端时才会打印。
    debug: debug,
    // 必填，公众号的唯一标识
    appId: appId,
    // 必填，生成签名的时间戳
    timestamp: timestamp,
    // 必填，生成签名的随机串
    nonceStr: nonceStr,
    // 必填，签名，见附录1
    signature: signature,
    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    jsApiList: jsApiList
  });
  wx.ready(function () {
    isWxReady = true;

    if (readyFunc.length) {
      readyFunc.forEach(function (cb) {
        if (typeof cb === 'function') {
          cb();
        }
      });
    }
  });
};

function fetchWXParam(cb) {
  $.ajax({
    type: 'GET',
    url: 'http://39.97.167.25:80/weChat/getConfig',
    cache: false,
    data: {
      url: window.location.href.split('#')[0]
    },
    success: function (jsonResult) {
      if (jsonResult.ret && jsonResult.data) {
        console.log(jsonResult.data)
        cb(jsonResult.data)
      }
    },
    error: function (data) {}
  });
}

window.wxConfig = {
  init: function () {
    fetchWXParam(window.wxApi.config)
  },
  wxShareConfig: function(_ref) {
    var title = _ref.title,
        desc = _ref.desc,
        link = _ref.link,
        imgUrl = _ref.imgUrl,
        _ref$onSuccess = _ref.onSuccess,
        onSuccess = _ref$onSuccess === void 0 ? NOOP : _ref$onSuccess,
        _ref$onCancel = _ref.onCancel,
        onCancel = _ref$onCancel === void 0 ? NOOP : _ref$onCancel;
    // 分享到朋友圈
    window.wxApi.onMenuShareTimeline({
      title: title,
      // 分享标题
      link: link,
      // 分享链接
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {
        // 用户确认分享后执行的回调函数
        onSuccess();
      },
      cancel: function cancel() {
        // 用户取消分享后执行的回调函数
        onCancel();
      }
    }); // 分享给朋友

    window.wxApi.onMenuShareAppMessage({
      title: title,
      // 分享标题
      desc: desc,
      // 分享描述
      link: link,
      // 分享链接
      imgUrl: imgUrl,
      // 分享图标
      type: '',
      // 分享类型,music、video或link，不填默认为link
      dataUrl: '',
      // 如果type是music或video，则要提供数据链接，默认为空
      success: function success() {
        // 用户确认分享后执行的回调函数
        onSuccess();
      },
      cancel: function cancel() {
        // 用户取消分享后执行的回调函数
        onCancel();
      }
    }); // 分享到QQ

    window.wxApi.onMenuShareQQ({
      title: title,
      // 分享标题
      desc: desc,
      // 分享描述
      link: link,
      // 分享链接
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {
        // 用户确认分享后执行的回调函数
        onSuccess();
      },
      cancel: function cancel() {
        // 用户取消分享后执行的回调函数
        onCancel();
      }
    });
  }
}
