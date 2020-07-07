  
  function addpatient(h){
    firebase.database().ref('patient/' + h.id).set(h);
  }
  $(function(){

        var check = true;
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              check =false;
              //alert("event js listener activated");
            }
            else{check=true;}
            form.classList.add('was-validated');
          },false);
        });

       $("form").submit(function(){
        if(check)
        {
          var patient = {
            //id: $("#v1").val() + Date.now(),
            id: Date.now(),
            date: Date(Date.now()),
            //date: $("#v1").val(),
            //time: $("#v2").val(time.now()),
            
            //contact: $("#v5").val(),
            //comments: $("#v6").val(),
      
            patientName: $("#v7").val(),
            mobileNumber: $("#v8").val(),
            emailAddress: $("#v9").val(),
            age: $("#v10").val(),
            gender: $("#v11").val(),
            city: $("#v12").val(),
            country: $("#v13").val(),
            hospitalName: $("#v14").val(),
            bloodGroup: $("#v15").val()
          };

          addpatient(patient);
          alert("Form Submitted Successfully !");
        }
        else
        {
          alert("Please Try Again");
        }
      });
    });
   // });
  //if(check){
  //$("form").submit(function(){

   


//alert("check1");
    /*var patient = {
      //id: $("#v1").val() + Date.now(),
      id: Date.now(),
      date: Date(Date.now()),
      //date: $("#v1").val(),
      //time: $("#v2").val(time.now()),
      
      //contact: $("#v5").val(),
      //comments: $("#v6").val(),

      patientName: $("#v7").val(),
      mobileNumber: $("#v8").val(),
      emailAddress: $("#v9").val(),
      age: $("#v10").val(),
      gender: $("#v11").val(),
      city: $("#v12").val(),
      country: $("#v13").val(),
      hospitalName: $("#v14").val(),
      bloodGroup: $("#v15").val()
    };*/
    //alert("check2");
    /*
    var empty = true;
  
    $("input,select").filter('[required]').each(function(){
        if(jQuery(this).val() == ""){
            empty = false;
            return false;
          }
    });

    if(empty){
      addpatient(patient);
      alert("Created!");
    }
    else{
        alert('Invalid Field');
    }*/
    
    //addpatient(patient);
    //if(check){
    //alert("Created!");
  //}

 
  //});
//}

  
  var addpatientref = firebase.database().ref().child("patient");
    addpatientref.on("value", function(snapshot) {
        $("#show-patient").empty();
        var patientHTMLitem = "<h3>Patient List</h3>"
  
        snapshot.forEach(function(childsnapshot){
          var item = childsnapshot.val();
          patientHTMLitem += "<div class'patientHTMLitem'><hr><ul></div>";
          //patientHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
          patientHTMLitem += "<li><b> Date : </b><span>"+ item.date + "</span></li>"
          //patientHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
          patientHTMLitem += "<li><b> Patient Name : </b><span>"+ item.patientName + "</span></li>"
          patientHTMLitem += "<li><b> Mobile Number : </b><span>"+ item.mobileNumber + "</span></li>"
          patientHTMLitem += "<li><b> Email : </b><span>"+ item.emailAddress + "</span></li>"
          patientHTMLitem += "<li><b> Age : </b><span>"+ item.age + "</span></li>"
          patientHTMLitem += "<li><b> Gender : </b><span>"+ item.gender + "</span></li>"
          patientHTMLitem += "<li><b> Hospital Name : </b><span>"+ item.hospitalName + "</span></li>"
          patientHTMLitem += "<li><b> City : </b><span>"+ item.city + "</span></li>"
          patientHTMLitem += "<li><b> Country : </b><span>"+ item.country + "</span></li>"
          patientHTMLitem += "<li><b> Blood Group : </b><span>"+ item.bloodGroup + "</span></li>"
          patientHTMLitem += "</ul></div>";
          patientHTMLitem += "<button type='button' class='btn btn-primary delete-patient' id="+item.id+">Delete Patient</button>";
  
      });
      $("#show-patient").html(patientHTMLitem);
    });
  
    $(document).on("click", ".delete-patient", function(){
      var patientID = $(this).attr('id');
      firebase.database().ref("patient/" + patientID).remove();
    });
