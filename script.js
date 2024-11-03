function display(val){
    document.getElementById('screen').value+=val
}
function equalTo(){
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function eraser(){
    document.getElementById('screen').value=''
}
