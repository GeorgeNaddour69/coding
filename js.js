var code = document.getElementById("inp_txt")
var results = document.getElementById("the_res")
function code_run()
{
results.innerHTML = code.value
localStorage.setItem("results",code.value)

}


onload = ()=>{
if (localStorage.getItem("results")!== null && localStorage.getItem("results")!== "")
{code.value = localStorage.getItem("results")
alert("تم استرجاع الكود السابق")}

}

function delete_code()
{
code.value = ""
results.innerHTML = ""


}


function delet_str()
{
localStorage.clear()
alert("تم حذف الذاكرة المحلية بنجاح ")
}



