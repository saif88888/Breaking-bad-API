const api = 'https://www.breakingbadapi.com/api/characters/';

async function get() {
	try {
		const response = await fetch(api);
		const data = await response.json();
		//console.log(data[0]);
		printData(data);
	} catch (e) {
		console.log('Error', e);
	}
}

function printData(data) {
	const header = document.querySelector('#header');
	header.innerHTML = `
	<select  onchange="getActor(this.value)">
	<option >Select an Actor </option>
	${data.map((actor) => `<option>${actor.name}</option>`)}
	</select>`;
}

get();

async function getActor(name) {
	if (name != 'Select an Actor') {
		const resp = await fetch(`${api}?name=${name}`);
		const data2 = await resp.json();
		const content = document.querySelector('#content');
		content.innerHTML = `
	<h2>${data2[0].name}(${data2[0].nickname})</h2>
	
	
	<img class="av" src="${data2[0].img}" alt="${data2.name}"  />
	<h2>DOB: ${data2[0].birthday}</h2>
	<h3>Occupation: ${data2[0].occupation}</h3>
	<h3>Status: ${data2[0].status}</h3> `;
	}
}

//////////////////////// breaking bad intro audio btn/////////////////

const sounds = ['Breaking Bad'];

sounds.forEach((sounds) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = sounds + ' intro' + ' 🔊';

	btn.addEventListener('click', function () {
		stopSongs();
		document.getElementById(sounds).play();
	});

	document.body.appendChild(btn);
});

function stopSongs() {
	sounds.forEach((sounds) => {
		const song = document.getElementById(sounds);
		song.pause();
		song.currentTime = 0;
	});
}
