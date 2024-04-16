function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickAvant = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={handleClickAvant}>Precedent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickSuivant}>Suivant</button>
      )}
    </>
  );
}

export default NavBar;
