function showFunction(id) {
  var x_inner = document.getElementById(id+'_inner');
  var x_arrow = document.getElementById(id+'_arrow');

  if (x_inner.style.display == "none" || x_inner.style.display == "") {
    x_inner.style.display = "block";
    x_arrow.style.transform = "translate(0%, 0%) rotate(225deg)" ;
  } else {
    x_inner.style.display = "none";
    x_arrow.style.transform = "translate(0%, 0%) rotate(45deg)";
  }
}

document.getElementById("id_pa_wrap").addEventListener("click", function(){ showFunction("id_pa")}, false);
document.getElementById("id_pb_wrap").addEventListener("click", function(){ showFunction("id_pb")}, false);
document.getElementById("id_pc_wrap").addEventListener("click", function(){ showFunction("id_pc")}, false);
document.getElementById("id_pd_wrap").addEventListener("click", function(){ showFunction("id_pd")}, false);
document.getElementById("id_pe_wrap").addEventListener("click", function(){ showFunction("id_pe")}, false);