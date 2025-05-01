
// 1. define an object and its properties
//  b. create a method totalsteps()
// c. get the sum of the steps
// d. create the averageSteps()
// e. get the average

const user = {
    name: 'John',
    stepsWalked: [100,300,700,250,30],

    totalsteps: function (){
        return this.stepsWalked.reduce((prev,cur)=> prev + cur,0);
    },
    averageSteps: function (){
        return (this.stepsWalked.reduce((prev,cur)=> prev + cur,0))/ (this.stepsWalked.length)
    },

};

console.log(user);
console.log(user.totalsteps());
console.log(user.averageSteps());
 
//   2. a. create a constractor with the properties name, ingredients,cookTime
     // b.create a function displayrecipe and create a string
    //  c. create another function to check if the cooktime is <= 30
function Recipe(name, ingredients,cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
        return `The drink ${this.name} and the ingredients are ${this.ingredients}`
    };
    this.isQuickMeal = function(){
       return cookTime <= 30
}
};

const recipe = new Recipe('Tea', ['water', 'tealeaves','milk','sugar'], 20)
console.log(recipe.displayRecipe());
console.log(recipe.isQuickMeal());


// 3. a. create an object car with model1, mileage
//    b. create a function that adds a new date
//    c. create a function that checks the last service date

const car = {
    model1: 'Toyota',
    mileage: 5000,
    serviceHistory: ['2/4/2025','20/4/2025', '30/4/2025'],
    addServiceDate: function (date) {
        this.serviceHistory.push(date);
        return this.serviceHistory

    },
    lastServiceDate: function (){
        return this.serviceHistory[this.serviceHistory.length -1];
        
    },

};
console.log(car);
console.log(car.addServiceDate('5/5/2025'));
console.log(car.lastServiceDate());


// 4. a. create an object playlist with an array of songs which are strings
//    b.  create a function to remove a song from the array
//    c. create a function to log all the songs in the array


const playlist ={
    songs: ['Count your blessings', 'courage brother', 'Jesus love me'],
    addSong: function (song) {
     this.songs.push(song)
     console.log(playlist.songs);
     
    },
    removeSong: function() {
        return this.songs.pop()
    },
    listSongs: function(){
        console.log(this.songs);
        
    }

};
console.log(playlist);
playlist.addSong('What a Friend we have')
console.log(playlist.removeSong());
playlist.listSongs();

// 5. create a constractor with title,lessons, completedLessons
//    b. create a function markcompleted and add a new completed lesson
//    c. create a function get progress and subtract completedLessons from lessons
function Course(title, lessons, completedLessons){
    this.title = title;
    this.lessons = lessons;
    this.completedLessons =completedLessons;
    this.markComplete = function (lesson){
        this.completedLessons.push(lesson);

    },
    this.getProgress = function(){
       let diff = (this.lessons.length) - (this.completedLessons.length)
       return `${diff} out of ${lessons.length} lessons completed`
    }
};

const course = new Course('software engineering', ['Python', 'Javascript', 'QA', 'Kotlin', 'Research','Design'],['Python', 'Javascript', 'QA'])
console.log(course.getProgress());










