var ExerciseView = function(exercise){
  this.exercise = exercise;
}

<<<<<<< HEAD
ExerciseView.prototype.render = function(){
  var html = $("<div class = 'exercise'></div>")
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  return html;
=======
ExerciseView.prototype = {
  render: function(){
    var el = $("<p>Name: " + this.exercise.name + "</p>" + "<p>Description: " + this.exercise.description + "</p>" + "<p>Sets: " + this.exercise.sets + "</p>" + "<p>Reps: " + this.exercise.reps + "</p>" + "<p>Video Demo: " + this.exercise.video_url + "</p>");
    return(el)
  }
>>>>>>> upstream/master
}
