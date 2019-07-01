// This serves as a fake database:
var simpleData = {'title': 'Waiting in Line',
                  'profilePic': 'images/lorempixel.people.1.jpeg',
                  'index': 1};

var complexData = [
  {'title': 'Needfinding', 'profilePic': 'images/lorempixel.city.1.jpeg', 'index': 2},
  {'title': 'Prototyping', 'profilePic': 'images/lorempixel.technics.1.jpeg', 'index': 3},
  {'title': 'Heuristic Evaluation', 'profilePic': 'images/lorempixel.abstract.1.jpeg', 'index': 4},
  {'title': 'Visualization', 'profilePic': 'images/lorempixel.abstract.8.jpeg', 'index': 5},
  {'title': 'Social design', 'profilePic': 'images/lorempixel.people.2.jpeg', 'index': 6},
  {'title': 'Gestural interaction', 'profilePic': 'images/lorempixel.technics.2.jpeg', 'index': 7},
  {'title': 'Design tools', 'profilePic': 'images/lorempixel.city.2.jpeg', 'index': 8}
]


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  // BEGIN - STEP 1


  // start with a simple template
  var html = template(simpleData);
  console.log(html);
  parentDiv.append(html);

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }




  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName1');
  if (name) {
    $("#myFav1").html(name);
  }
  let isTrue1 = true;
  $("#Favorite1").click(function() {

      if (isTrue1 == true) {
        var newName1 = "true";
        isTrue1 = !isTrue1;
      }
      else {
        var newName1 = "false";
        isTrue1 = !isTrue1;
      }

      $("#myFav1").html(newName1);
      localStorage.setItem('customName1', nameName1);
  });

  // when you first load the page, set a custom name if you have one:
  var name2 = localStorage.getItem('customName2');
  if (name2) {
    $("#myFav2").html(name2);
  }

  // use localStorage to store your name
  let isTrue2 = true;
  $("#Favorite2").click(function() {
      if (isTrue2 == true) {
            var newName2 = "true";
            isTrue2 = !isTrue2;
      }
      else {
            var newName2 = "false";
            isTrue2 = !isTrue2;
      }

      $("#myFav2").html(newName2);
      localStorage.setItem('customName2', newName2);
  });

  // when you first load the page, set a custom name if you have one:
  var name3 = localStorage.getItem('customName3');
  if (name3) {
    $("#myFav3").html(name3);
  }

  // use localStorage to store your name
  let isTrue3 = true;
  $("#Favorite3").click(function() {
      if (isTrue3 == true) {
            var newName3 = "true";
            isTrue3 = !isTrue3;
      }
      else {
            var newName3 = "false";
            isTrue3 = !isTrue3;
      }

      $("#myFav3").html(newName3);
      localStorage.setItem('customName3', newName3);
  });

  // when you first load the page, set a custom name if you have one:
  var name4 = localStorage.getItem('customName4');
  if (name4) {
    $("#myFav4").html(name4);
  }

  // use localStorage to store your name
  let isTrue4 = true;
  $("#Favorite4").click(function() {
      if (isTrue4 == true) {
            var newName4 = "true";
            isTrue4 = !isTrue4;
      }
      else {
            var newName4 = "false";
            isTrue4 = !isTrue4;
      }

      $("#myFav4").html(newName4);
      localStorage.setItem('customName4', newName4);
  });

  // when you first load the page, set a custom name if you have one:
  var name5 = localStorage.getItem('customName5');
  if (name5) {
    $("#myFav5").html(name5);
  }

  // use localStorage to store your name
  let isTrue5 = true;
  $("#Favorite5").click(function() {
      if (isTrue5 == true) {
            var newName5 = "true";
            isTrue5 = !isTrue5;
      }
      else {
            var newName5 = "false";
            isTrue5 = !isTrue5;
      }

      $("#myFav5").html(newName5);
      localStorage.setItem('customName5', newName5);
  });

  // when you first load the page, set a custom name if you have one:
  var name6 = localStorage.getItem('customName6');
  if (name6) {
    $("#myFav6").html(name6);
  }

  // use localStorage to store your name
  let isTrue6 = true;
  $("#Favorite6").click(function() {
      if (isTrue6 == true) {
            var newName6 = "true";
            isTrue6 = !isTrue6;
      }
      else {
            var newName6 = "false";
            isTrue6 = !isTrue6;
      }

      $("#myFav6").html(newName6);
      localStorage.setItem('customName6', newName6);
  });

  // when you first load the page, set a custom name if you have one:
  var name7 = localStorage.getItem('customName7');
  if (name7) {
    $("#myFav7").html(name7);
  }

  // use localStorage to store your name
  let isTrue7 = true;
  $("#Favorite7").click(function() {
      if (isTrue7 == true) {
            var newName7 = "true";
            isTrue7 = !isTrue7;
      }
      else {
            var newName7 = "false";
            isTrue7 = !isTrue7;
      }

      $("#myFav7").html(newName7);
      localStorage.setItem('customName7', newName7);
  });

  // when you first load the page, set a custom name if you have one:
  var name8 = localStorage.getItem('customName8');
  if (name8) {
    $("#myFav8").html(name2);
  }

  // use localStorage to store your name
  let isTrue8 = true;
  $("#Favorite8").click(function() {
      if (isTrue8 == true) {
            var newName8 = "true";
            isTrue8 = !isTrue8;
      }
      else {
            var newName8 = "false";
            isTrue8 = !isTrue8;
      }

      $("#myFav8").html(newName8);
      localStorage.setItem('customName8', newName8);
  });

  // when you first load the page, set a custom name if you have one:
  var name9 = localStorage.getItem('customName9');
  if (name9) {
    $("#myFav9").html(name9);
  }

  // use localStorage to store your name
  let isTrue9 = true;
  $("#Favorite9").click(function() {
      if (isTrue9 == true) {
            var newName9 = "true";
            isTrue9 = !isTrue9;
      }
      else {
            var newName9 = "false";
            isTrue9 = !isTrue9;
      }

      $("#myFav9").html(newName9);
      localStorage.setItem('customName9', newName9);
  });

});
