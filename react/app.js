const Subtitle = props => {
  return <h1>bla bla</h1>;
};

const Main = props => {
  return (
    <main>
      <p>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </p>
    </main>
  );
};

const array = ["aaa", "sss", "ddd"];

const List = props => {
  return <li>{props.option}</li>;
};

const Hr = props => {
  return <hr></hr>;
};

const App = props => {
  return (
    <div>
      <h1>Hello from React</h1>
      <Subtitle />
      <Main />
      <ul>
        {array.map(function(item) {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const asd = document.querySelector(".asd");
ReactDOM.render(<App />, asd);
