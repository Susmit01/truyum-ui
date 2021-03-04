function validation(){
    var name= document.getElementById("title").value;
    var price= document.getElementById("price").value;
    var inputDate= document.getElementById("dateOfLaunch").value; 
    if (name === ""){
        alert("Title is required");
        return false;
    }
    else if (name.length<2 || name.length>65){
        alert("Title should have 2 to 65 characters");
        return false;
    }
    if (price == "")
    {
        alert("Price is required");
        return false;
    }
    else if(!price.match(/^\d+$/)){
        alert("Price has to be a number");
        return false;
    }
    if (inputDate=== "")
    {
        alert("Date of Launch is required");
        return false;
    }

      return true;
}
