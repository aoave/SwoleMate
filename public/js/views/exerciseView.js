var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype.render = function(){
  var html = $("<div class = 'exercise'></div>")
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  html.append($("<p>"+ this.exercise.title +"</p>"));
  return html;
}
