$(function(){var e={continent:"",national:"",name:"",phoneNum:"",gender:"",age:"",skinColor:"",file:""};function n(e){return e.replace(/(^\s*)|(\s*$)/g,"")}$("#file").on("change",function(){!function(n,l,a){var t=document.getElementById(n);if(void 0!==t&&0!=t.files.length){var i=t.files[0],o=i.type,r=i.size;if(-1!==["image/jpeg","image/jpg","image/png","image/pjpeg"].indexOf(o))if(r>1048576)alert("文件大小超过限制，最大不要超过1M");else{var s=new FileReader;s.readAsDataURL(i),s.onload=function(n){var t=n.target.result;console.log(t);var i=document.getElementById(l);void 0!==i&&i.setAttribute("src",t);var o=document.getElementById(a);void 0!==o&&(o.setAttribute("value",t),e.file=t)}}else alert("文件格式不对，只支持格式 jpeg、png、jpg")}else console.log("file "+n+" not exists")}("file","photo","fileVal")}),$("#join").on("click",function(){$("#join-wrap").hide(),$("#form-wrap").removeClass("hide")}),$("#submit").on("click",function(){e.continent=$("#continent").val(),e.national=$("#national").val(),e.name=$("#name").val(),e.phoneNum=$("#phoneNum").val(),e.gender=$("input[type='radio']:checked").val(),e.age=$("#age").val(),e.skinColor=$("#skinColor").val(),(n(e.continent)?n(e.national)?n(e.name)?n(e.phoneNum)?n(e.gender)?n(e.age)?n(e.skinColor)?e.file||(alert("supload pic is null"),0):(alert("skinColor is null"),0):(alert("age is null"),0):(alert("gender is null"),0):(alert("phoneNum is null"),0):(alert("name is null"),0):(alert("national is null"),0):(alert("continent is null"),0))&&$.ajax({type:"POST",url:"http://39.97.167.25:8080/photo/manager",type:"post",cache:!1,dataType:"json",data:{...e},success:function(e){alert("Sign up success"),console.log("success"),$("#form-wrap").hide()},error:function(e){}})})});
