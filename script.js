

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg ", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg ","https://m.media-amazon.com/images/M/MV5BZTYxY2FiOTItOWI0MS00NjlhLWEwYjYtNzE2MmQwZGNkYzg3XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg"];
	 let action=["https://thecinemaholic.com/wp-content/uploads/2017/12/John-Wick-Chapter-2-poster1.jpg","https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Arnold-Schwarzenegger’s-11-Best-Action-Movies.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5","https://i0.wp.com/cms.sofrep.com/wp-content/uploads/2018/07/ejdainlg3sl2gxdjjfkg.jpg?fit=800%2C450&ssl=1"];
	 let drama =["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg ", "https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg","https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show  of action){
    $(".shows").append("<img src="+ show+">");
    }
    }
   else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});