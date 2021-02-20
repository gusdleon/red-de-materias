function cambio(param){
    if (Fisica_I.checked && Fisica_I_Lab.checked && Algebra_para_Ingenieria.checked){
        Fisica_II.disabled = false;
        Fisica_II_Lab.disabled = false;
        document.getElementById("1-1").style.color = "#498b2a";
    } else {
        Fisica_II.disabled = true;
        Fisica_II_Lab.disabled = true;
        Fisica_II.checked = false;
        Fisica_II_Lab.checked = false;
        document.getElementById("1-1").style.color = "#ff0000";
    }
    /*if (!Fisica_II.checked) {
        Materia3.disabled = true;
    }else {
        Materia3.disabled = false;
    }
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
