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
var Movie = React.createClass({
	propTypes: {
      // nazwa props'a (customowa)
      movieItem: React.PropTypes.object.isRequired,
	},
	render: function() {
      return (
		React.createElement('li', {},  
            // tutaj odwołujemy się do props'a 
            // linia 65. -> stąd dostajemy obiekt movieItem
			React.createElement('h2', {}, this.props.movieItem.title), //tu pewnie powinienem wstawić MovieTitle ale nie wiem jak
			React.createElement('p', {}, this.props.movieItem.desc), //te dwie linie powinienem scalić w jedną MovieDescription, ale nie wiem jak
			React.createElement('img', {src: this.props.movieItem.src})
		)
      );					
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		movieItem: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.movieItem.title)
		)
	}
	
});

/*var MovieDescription = React.createClass({
	propTypes: {
		movieItem: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.movieItem.desc),
			React.createElement('img', {src: this.props.movieItem.src})
			)
	}
})*/


var MoviesList = React.createClass({
  propTypes: {
    // nazwa props'a (customowa)
    moviesElements: React.PropTypes.array.isRequired
  },
  
  render: function() {
    var elements = this.props.moviesElements.map(function(movie) {
      // tworzymy komponent Movie oraz przesyłamy do jego props'a
      // movieItem wartość movie, która bierze się z funkcji .map()
      // tutaj potrzebny jest key, ponieważ powstanie wiele 
      // takich samych kompnentów
      return React.createElement(Movie, {movieItem: movie, key: movie.id})
    });
    
    return (
      // tutaj wstawiamy tablicę komponentów typu Movie, utworzonych 
      // poprzez funkcję .map - linia 60
      React.createElement('ul', {}, elements)
    )
  }
});
			 
ReactDOM.render(
  // do props'a o nazwie moviesElements przesyłamy tablicę 
  // filmów movies
  React.createElement(MoviesList, {moviesElements: movies}),
  document.getElementById('app')
);