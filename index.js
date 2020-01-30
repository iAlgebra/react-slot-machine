class App extends React.Component {
  render() {
    const fruits = ['🍇', '🍋', '🍓', '🍒'];
    return (
        <div>
          <h1>Slot Machines!</h1>
          <SlotMachine
              s1={fruits[Math.floor(Math.random() * fruits.length)]}
              s2={fruits[Math.floor(Math.random() * fruits.length)]}
              s3={fruits[Math.floor(Math.random() * fruits.length)]}
          />
          <SlotMachine
              s1={fruits[Math.floor(Math.random() * fruits.length)]}
              s2={fruits[Math.floor(Math.random() * fruits.length)]}
              s3={fruits[Math.floor(Math.random() * fruits.length)]}
          />
          <SlotMachine
              s1={fruits[Math.floor(Math.random() * fruits.length)]}
              s2={fruits[Math.floor(Math.random() * fruits.length)]}
              s3={fruits[Math.floor(Math.random() * fruits.length)]}
          />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
