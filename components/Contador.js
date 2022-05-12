const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  const estilo = () => {
    if (contador === 0) return "igual";
    if (contador < 0) return "menor";
    return "mayor";
  };

  return (
    <div>
      <h1 className={estilo()}>Contador: {contador}</h1>
      <hr />

      <button onClick={disminuir}>Disminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};
