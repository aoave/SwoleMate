var WorkoutView = function(workout) {
  this.workout = workout;
  this.$el = $("<div class='workout'></div>");
};

WorkoutView.prototype = {
  render: function(){
    var self = this;
    self.$el.append("<h3>" + self.workout.title + "</h3>")
    self.workout.exercises.forEach(function(exercise){
      var view = new ExerciseView(exercises)
      self.$el.append(view.render())
    }
  }
}
