function show_InfoModal (content){
  //First load the content
  $('#infoModalTitle').html(content);
  jQuery.ajax({
  url: "/src/infoModal/"+content+".txt",
  dataType:"text",
  success: function( result ) {
    $("#infoModalBody").html(result);
    //Then display it
    $('#infoModal').modal('show');
  },
  error: _ => {
    $("#infoModalBody").html("Ein Fehler ist aufgetreten, bitte versuche es erneut");
    //Then display it
    $('#infoModal').modal('show');
  }
  });

}

console.log("hey");
