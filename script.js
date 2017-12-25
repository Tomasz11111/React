var movies = [
	{
		id: 1,
		title: "Harry Potter",
		desc: 'film o czarodzieju',
		src: 'posters/hp.jpg',
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		src: 'posters/krollew.jpg',
	},
	{
		id: 3,
		title: 'Gwiezdne wojny',
		desc: 'Film o rycerzach Jedi',
		src: 'posters/starwars.jpg'
	},
	{
		id: 4,
		title: 'Obcy',
		desc: 'Film o kosmicie',
		src: 'posters/alien.jpg',
	},
	{
		id: 5,
		title: 'Indiana Jones',
		desc: 'Film o archeologu',
		src: 'posters/indiana.jpg',
	}
	
];	

var moviesElements = movies.map(function(movie) {
	return 	React.createElement('li', {key: movie.id},
				React.createElement('h2', {}, movie.title),
				React.createElement('p', {}, movie.desc),
				React.createElement('img', {src: movie.src}, )
		);
});

var element = React.createElement('div', {}, 
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, moviesElements)
					
				
				  );
			   
								 
ReactDOM.render(element, document.getElementById('app'));