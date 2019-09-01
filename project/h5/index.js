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
  function valid () {
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
      alert('所属大洲不能为空');
      return false;
    }

    if (!trim(param.national)) {
      alert('国家不能为空');
      return false;
    }

    if (!trim(param.name)) {
      alert('姓名不能为空');
      return false;
    }

    if (!trim(param.phoneNum)) {
      alert('手机号不能为空');
      return false;
    }

    if (!trim(param.gender)) {
      alert('性別不能为空');
      return false;
    }

    if (!trim(param.age)) {
      alert('年龄不能为空');
      return false;
    }

    if (!trim(param.skinColor)) {
      alert('肤色不能为空');
      return false;
    }

    if (!param.file) {
      alert('图片不能为空');
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
    var file = fileObj.files[0];
    var fileType = file.type;
    var fileSize = file.size;

    var FILE_TYPE_MAP = ['image/jpeg', 'image/jpg','image/png', 'image/pjpeg'];

    // 文件格式检验
    if (FILE_TYPE_MAP.indexOf(fileType) === -1) {
      alert('文件格式不对，只支持格式 jpeg、png、jpg');
      return;
    }

    // 文件大小限制
    if (fileSize > 1 * 1024 *1024) {
      alert('文件大小超过限制，最大不要超过1M');
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      var imgResult = e.target.result;
      console.log(imgResult);
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
  });

  // 加入
  $('#join').on('click', function() {
    $('#join-wrap').hide();
    $('#form-wrap').removeClass('hide');
  });

  // 提交表单
  $('#submit').on('click', function() {
    // $.get('http://39.97.167.25:8080/photo/test?test=111', function(result){
    //   console.log(result);
    // });
    if (!valid()) return;

    $.ajax({
      type:'POST',
      url: 'http://39.97.167.25:8080/photo/manager',
      type:'post',
      cache:false,
      dataType:'json',
      data: {
        ...param,
      },
      success: function (jsonResult) {
        alert('报名成功');
        console.log('success');
        $('#form-wrap').hide();
      },
      error: function (data){
        // alert('');
      }
    });
    // console.log(param);
  });
});