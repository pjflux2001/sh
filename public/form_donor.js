  // function to create donor

  function addDonor(h){
    firebase.database().ref('donor/' + h.id).set(h);
  }

  $(add_donor).click(function(e){
    var donor = {
      //id: $("#v1").val() + Date.now(),
      id: Date.now(),
      date: Date(Date.now()),
      //date: $("#v1").val(),
      //time: $("#v2").val(),
      
      //contact: $("#v5").val(),
      //comments: $("#v6").val(),

      donorName: $("#v7").val(),
      mobileNumber: $("#v8").val(),
      emailAddress: $("#v9").val(),
      age: $("#v10").val(),
      gender: $("#v11").val(),
      city: $("#v12").val(),
      country: $("#v13").val(),
      bloodGroup: $("#v14").val(),
      diabetes: $("#v15").val(),
      liver: $("#v16").val(),
      kidney: $("#v17").val(),
      lung: $("#v18").val(),
      bloodPressure: $("#v19").val(),
      recoveryDate: $("#v20").val()
    };

        var empty = true;
  
        $("input,select").filter('[required]').each(function(){
            if(jQuery(this).val() == ""){
                empty = false;
                return false;
              }
        });

        if(empty){
          addDonor(donor);
          alert("Created!");
        }
        else{
            alert('Invalid Field');
        }
    
    });
  

    // 
  var adddonorref = firebase.database().ref().child("donor");
    adddonorref.on("value", function(snapshot) {
        $("#show-donor").empty();
        var donorHTMLitem = "<h3> Donor List </h3>"
  
        snapshot.forEach(function(childsnapshot){
          var item = childsnapshot.val();
          donorHTMLitem += "<div class'patientHTMLitem'><hr><ul></div>";
          //patientHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
          donorHTMLitem += "<li><b> Date : </b><span>"+ item.date + "</span></li>"
          //patientHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
          donorHTMLitem += "<li><b> Patient Name : </b><span>"+ item.donorName + "</span></li>"
          donorHTMLitem += "<li><b> Mobile Number : </b><span>"+ item.mobileNumber + "</span></li>"
          donorHTMLitem += "<li><b> Email : </b><span>"+ item.emailAddress + "</span></li>"
          donorHTMLitem += "<li><b> Age : </b><span>"+ item.age + "</span></li>"
          donorHTMLitem += "<li><b> Gender : </b><span>"+ item.gender + "</span></li>"
          donorHTMLitem += "<li><b> City : </b><span>"+ item.city + "</span></li>"
          donorHTMLitem += "<li><b> Country : </b><span>"+ item.country + "</span></li>"
          donorHTMLitem += "<li><b> Blood Group : </b><span>"+ item.bloodGroup + "</span></li>"
          donorHTMLitem += "<li><b> Diabetes : </b><span>"+ item.diabetes + "</span></li>"
          donorHTMLitem += "<li><b> Liver Disease : </b><span>"+ item.liver + "</span></li>"
          donorHTMLitem += "<li><b> Kidney Disease : </b><span>"+ item.kidney + "</span></li>"
          donorHTMLitem += "<li><b> Blood Pressure Problem : </b><span>"+ item.bloodPressure + "</span></li>"
          donorHTMLitem += "<li><b> Recovery Date : </b><span>"+ item.recoveryDate + "</span></li>"
          donorHTMLitem += "</ul></div>";
          donorHTMLitem += "<button type='button' class='btn btn-primary delete-donor' id="+item.id+">Delete Donor</button>";
  
      });
      $("#show-donor").html(donorHTMLitem);
    });
  
    $(document).on("click", ".delete-donor", function(){
      var donorID = $(this).attr('id');
      firebase.database().ref("donor/" + donorID).remove();
    });