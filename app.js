console.log('start')

function ss(){
  console.log('sss')
}
var result=document.getElementById("result");
var file=document.getElementById("file");

function readAsDataURL(){
    var file = document.getElementById("file").files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("看清楚，这个需要图片！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(e){
        var result=document.getElementById("result");
        console.log(this.result)


        result.innerHTML='<img src="' + this.result +'" alt="" />';
    }
}

function fff(e){
  console.log(e)
  console.log(111)
  readAsDataURL()
}
