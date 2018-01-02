var Counter = React.createClass({
	
	getDefaultProps: function() {
		console.log('Tutaj można zdefiniowac domyślne propsy')
	},
	
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	increment: function() {
		this.setState({
			counter: this.state.counter +1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter -1
		});
	},
	componentWillMount: function() {
		console.log('Tutaj możemy coś zrobić, ale nie wiem co');
	},
	
	render: function() {
		return React.createElement('div', {className: 'countersContainer'},
			React.createElement('div', {className: 'buttonInc', onClick: this.increment}, 'click here to increment' ),
			React.createElement('div', {className: 'buttonDec', onClick: this.decrement}, 'click here to decrement'),
			React.createElement('div', {}, 'Licznik: ' + this.state.counter)
		);
	},
	componentDidMount: function() {
		console.log('Tutaj można manipulowac elementem, który jest już w drzewie DOM, np. użyć jQuery')
	},
	//koniec fazy inicjalizacji
	componentWillReceiveProps: function() {
		console.log('aktualizowanie stanu');
	},
	shouldComponentUpdate : function() {
		console.log('aktualizacja komponentu')
		return true;
	},
	componentWillUpdate: function() {
		console.log('??')
	},
	componentDidMount: function() {
		console.log('Mozna wykonać kolejne operacje na drzewie DOM')
	},
	
	
});

function newApps(id) {
	ReactDOM.render(React.createElement(Counter), document.getElementById(id));
}
var app = newApps('app');
var app2 = newApps('app2');
var app3 = newApps('app3');

