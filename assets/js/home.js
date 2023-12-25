//Create habit function to send a request to "/habit/create" to create a new habit
function createHabit() {
	let newHabit = prompt("Enter habit you want to track?");
	if(newHabit==null){
		return
	}
	window.location.href = `/habit/create/${newHabit}`;
	window.location.reload;
}

//This function tracks an habit for a date
function trackHabit(habitId, state, trackId, habitDate) {
	let currentDate;
	//If the date is not passed in the function for which habit needs to be tracked then track for cur date
	if (habitDate == undefined) {
		const date = new Date();
		date.setHours(0, 0, 0, 0);
		currentDate = date;
	}
	//Else take the date which is passed to the function and track for that date
	else {
		currentDate = new Date(habitDate);
	}

	let data = fetch(
		`/habit/track?habit=${habitId}&state=${state}&trackId=${trackId}&date=${currentDate}`
	);
	data
		.then(() => {
			console.log("done");
			window.location.href= window.location.href
		})
		.catch(() => {
			console.log(err);
		});
}
