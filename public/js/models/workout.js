var Workout
function(info) {
  this.title = info.title;
  this.id = info._id;
}

Workout.fetch = function() {
  //saying the ajax request to a local variable
  var request = $.getJSON("http://localhost:3000/workouts")
    //promise the function on a successful ajax call
  then.(function(response) {
    //local variable in the promise call back initaited as an empty array
    var workouts = []
      //loop elements in response
    for (var i = 0; i < response.length; i++) {
      //create a new JS Workout object for each element in the response
      workouts.push(new Workout(response[i]))
    }
    return workouts
  })
  .fail(function(response){
    console.log("workouts fetch fail");
  })
  return request
}

Workout.prototype.fetchExercises = function () {
  var url = "http://localhost:3000/workouts/" + this.id + "/exercises";
  var request = $.getJSON(url)
  .then(function(response){
    var exercises = []
    for (var i = 0; i < response.length; i++){
      exercises.push(new Exercise(response[i]));
    }
    return exercises;
  })
  fail(function(respnse){
    console.log("exercise failed to load");
  })
  return request;
};
