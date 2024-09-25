import PokemonEntry from "./PokemonEntry";

const CreateEntry = (props) => {
  return (
    <PokemonEntry
      key={props.id}
      id={props.id}
      name={props.name}
      sprite={props.sprite}
      signMove={props.signatureMove}
    />
  );
};

export default CreateEntry;
