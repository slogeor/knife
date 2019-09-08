$(function () {
  var param = {
    continent: '',
    national: '',
    name: '',
    phoneNum: '',
    gender: '',
    age: '',
    skinColor: '',
    file: ''
  };
  // 去空格
  function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  // 表单校验
  function valid() {
    // 所属大洲
    param.continent = $('#continent').val();
    // 国家
    param.national = $('#national').val();
    // 姓名
    param.name = $('#name').val();
    // 电话
    param.phoneNum = $('#phoneNum').val();
    // 性別
    param.gender = $("input[type='radio']:checked").val();
    // 年龄
    param.age = $('#age').val();
    // 肤色
    param.skinColor = $('#skinColor').val();

    if (!trim(param.continent)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.national)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.name)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.phoneNum)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.gender)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.age)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!trim(param.skinColor)) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }

    if (!param.file) {
      showMsg('Required field（*） cannot be empty');
      return false;
    }
    return true;
  };

  // 上传并预览图片
  function chooseImage(fileid, imgid, fileValId) {

    var fileObj = document.getElementById(fileid);
    if (typeof (fileObj) == "undefined" || fileObj.files.length == 0) {
      console.log('file ' + fileid + ' not exists');
      return;
    }
    console.log(fileObj.files[0])
    var file = fileObj.files[0];
    var fileType = file.type;
    var fileSize = file.size;

    console.log('fileType:', fileType)
    console.log('fileSize:', fileSize)
    var FILE_TYPE_MAP = ['image/jpeg', 'image/jpg', 'image/png', 'image/pjpeg'];
    // 文件格式检验
    if (FILE_TYPE_MAP.indexOf(fileType) === -1) {
      showMsg('File format error，Only supports the format jpeg、png、jpg.');
      return;
    }

    // 文件大小限制
    if (fileSize > (1 * 1024 * 1024)) {
      showMsg('Upload file (<1M)');
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      var imgResult = e.target.result;
      // console.log(imgResult);
      var imgObj = document.getElementById(imgid);
      if (typeof (imgObj) != 'undefined') {
        imgObj.setAttribute('src', imgResult);
      }
      var fileValObj = document.getElementById(fileValId);
      if (typeof (fileValObj) != 'undefined') {
        fileValObj.setAttribute('value', imgResult);
        param.file = imgResult;
        // param.file = './path/file';
      }
    };
  };

  // 监听文件变化
  $('#file').on('change', function () {
    chooseImage('file', 'photo', 'fileVal');
    $('#file').val('');
  });

  function showMsg(msg) {
    $('#err-msg').removeClass('autoHide').addClass('autoShow');
    $('#msg-txt').html(msg);
    setTimeout(() => {
      console.log(11)
      hideMsg();
    }, 3000)
  }

  function hideMsg() {
    $('#err-msg').addClass('autoHide').removeClass('autoShow');
  }

  $('#err-msg').on('click', function () {
    hideMsg();
  })

  // 加入
  $('#join').on('click', function () {
    $('#join-wrap').hide();
    $('#form-wrap').removeClass('hide');
  });

  // 提交表单
  $('#submit').on('click', function () {
    // $.get('http://39.97.167.25:8080/photo/test?test=111', function(result){
    //   console.log(result)
    // });
    if (!valid()) return;

    $.ajax({
      type: 'POST',
      url: 'http://39.97.167.25:8080/photo/manager',
      type: 'post',
      cache: false,
      dataType: 'json',
      data: {
        ...param,
      },
      success: function (jsonResult) {
        showMsg('Successful submission');
        console.log('success');
        $('#form-wrap').hide();
      },
      error: function (data) {
        // showMsg('');
      }
    });
    // console.log(param);
  });
});
