document.getElementById('fetchButton').addEventListener('click', fetchData);
document.getElementById('clearButton').addEventListener('click', clearData);

function fetchData() {
	fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
		.then((response) => response.json())
		.then((data) => {
			displayRandomData(data.data);
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
			document.getElementById('data').innerHTML = 'Error fetching data';
		});
}

function displayRandomData(data) {
	const dataDiv = document.getElementById('data');
	dataDiv.innerHTML = ''; // Clear previous data

	const randomIndex = Math.floor(Math.random() * data.length);
	const randomItem = data[randomIndex];

	const p = document.createElement('p');
	p.textContent = `Year: ${randomItem.Year}, Population: ${randomItem.Population}`;
	dataDiv.appendChild(p);
}

function clearData() {
	document.getElementById('data').innerHTML = ''; // Clear the data div
}

//api2

async function fetchAnimeData() {
	const limit = document.getElementById('limit').value;
	const searchString = document.getElementById('string').value;
	const type = document.getElementById('type').value;

	const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchString}&type=${type}&limit=${limit}`);
	const data = await response.json();

	const animeDataDiv = document.getElementById('anime-data');
	animeDataDiv.innerHTML = '';

	data.data.forEach((anime) => {
		const animeDiv = document.createElement('div');
		animeDiv.classList.add('anime-item');
		animeDiv.innerHTML = `
					<h2>${anime.title}</h2>
					<p>${anime.synopsis}</p>
					<img src="${anime.images.jpg.image_url}" alt="${anime.title}">
			`;
		animeDataDiv.appendChild(animeDiv);
	});
}

function clearAnimeData() {
	const animeDataDiv = document.getElementById('anime-data');
	animeDataDiv.innerHTML = '';
}
