const name = 'David';
const number = 32;
const boolean = false;
const isNull = null;
const array = [1, 2, 3, 4, 5];
const object = { a: 1, b: 3 };

const App = () => {
	return (
		<div>
			<p>Name: {name}</p>
			<p>Number: {number}</p>
			<p>Boolean: {boolean}</p>
			<p>Is Null: {isNull}</p>
			<p>Array: {array}</p>
			<p>Object: {object}</p>
		</div>
	);
};

export default App;
