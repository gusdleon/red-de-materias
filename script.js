function ckChange(ckType){
    if(!Fisica_I_y_Lab.checked){
        Fisica_II_y_lab.disabled = true;
    }else {
        Fisica_II_y_lab.disabled = false;
    }
    if (!Fisica_II_y_lab.checked) {
        Materia3.disabled = true;
    }else {
        Materia3.disabled = false;
    }
    /*
    var ckName = document.getElementsByName(ckType.name);
    var checked = document.getElementById(ckType.id);

    if (checked.checked) {
      **for(var i=0; i < ckName.length; i++){

          if(!ckName[i].checked){
              ckName[i].disabled = true;
          }else{
              ckName[i].disabled = false;
          }
      }
    }
    else {
      for(var i=0; i < ckName.length; i++){
        ckName[i].disabled = false;
      }
  }
  */
}
