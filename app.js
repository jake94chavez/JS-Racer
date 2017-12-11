
const moving = () => {
	let trackDistance = 50;
	setTrack(0, trackDistance);
	setTrack(1, trackDistance);

	let distance = [0,0];
	// Visually shows the position of a player
	document.getElementById(distance[0]).style.backgroundColor = '#32CD32';
	document.getElementById(trackDistance).style.backgroundColor = '#32CD32';
	document.getElementById(trackDistance - 1).style.backgroundColor = 'white';
	document.getElementById(trackDistance * 2 - 1).style.backgroundColor = 'white';
	// Sets the keys for each player
	document.addEventListener('keyup', (event) => {
		if (event.code === 'ArrowRight' && distance[0] < trackDistance - 1) {
			distance[0]++
			document.getElementById(distance[0] - 1).style.backgroundColor = 'black';
			document.getElementById(distance[0]).style.backgroundColor = '#32CD32';
			checkWinner();
		} else if (event.code === 'KeyD' && distance[1] < trackDistance - 1) {
			distance[1]++;
			document.getElementById(trackDistance + distance[1] - 1).style.backgroundColor = 'black';
			document.getElementById(trackDistance + distance[1]).style.backgroundColor = '#32CD32';
			checkWinner();
		}
	});
	const checkWinner = () => {
		if (distance[0] == trackDistance - 1) {
			alert("Finish! Player 1 is the fastest!")
		} else if (distance[1] == trackDistance - 1) {
			alert("Finish! Player 2 is the fastest!")
		}
	}
}
// Makes the track for each player using two table rows
const setTrack = (user, length) => {
	let lanePosition = document.createElement('tr');
	for (let i = 0; i < length; i++) {
		let addSpace = document.createElement('td');
		addSpace.setAttribute('id', user * length + i);
		addSpace.setAttribute('style', 'background: black');
		lanePosition.appendChild(addSpace);
		}
		document.getElementById('raceTrack').appendChild(lanePosition);
}
// Runs the function to set up the game when the window loads
window.onload = () => {
	moving();
}