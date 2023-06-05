const name = 'David';
const number = 32;
const boolean = false;
const isNull = null;
const array = [1, 2, 3, 4, 5];
const object = { a: 1, b: 3 };

const App = () => {
	return (
		<>
			<h1>{name}</h1>
			<h1>{number}</h1>
			<h1>{boolean}</h1>
			<h1>{isNull}</h1>
			<h1>{array}</h1>
			<h1>{object}</h1>
		</>
	);
};

export default App;
