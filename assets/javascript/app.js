$(document).ready(function (){
    
    $.ajax({
        query:"http://dictionaryapi.com/api/v3/references/collegiate/json/voluminous?&key=badf0fb9-2111-4efc-99f2-e6ac5ada80bd",
        method: "GET"
    }).then(function (response){
        console.log(response)
    })
})