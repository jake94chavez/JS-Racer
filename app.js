// Shift players across screen
// See players moving visually through the "track"
// cross finish line sends a winning alert message
//

const moving = () => {
	let trackDistance = 50;
	setTrack(0, trackDistance);
	setTrack(1, trackDistance);

	let distance = [0,0];
	document.getElementById(distance[0]).style.backgroundColor = '#32CD32';
	document.getElementById(trackDistance).style.backgroundColor = '#32CD32';
	document.getElementById(trackDistance - 1).style.backgroundColor = 'white';
	document.getElementById(trackDistance * 2 - 1).style.backgroundColor = 'white';

	document.addEventListener('keyup', (event) => {
		if (event.code === 'ArrowRight' && distance[0] < trackDistance - 1) {
			distance[0]++
			document.getElementById(distance[0] - 1).style.backgroundColor = 'black';
			document.getElementById(distance[0]).style.backgroundColor = '#32CD32';
		} else if (event.code === 'KeyD' && distance[1] < trackDistance - 1) {
			distance[1]++;
			document.getElementById(trackDistance + distance[1] - 1).style.backgroundColor = 'black';
			document.getElementById(trackDistance + distance[1]).style.backgroundColor = '#32CD32';
		}
	});
}
// 
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

window.onload = () => {
	moving();
}