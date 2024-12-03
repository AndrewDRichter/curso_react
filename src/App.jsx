function App() {
  // State
  let message = "Olá mundo";
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          message = "mensagem";
        }}
      >
        Change message
      </button>
    </div>
  );
}

export default App;
