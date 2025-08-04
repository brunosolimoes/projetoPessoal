import { Table, Thead, Tbody, Th, Tr } from "./CharacterSheet.style";

const CharacterSheet = ()=>{
    return (
        <Table>
            <Thead>
                <Tr>  $ficha-nome  </Tr>

            </Thead>
            <Tbody>

                <Tr>  <Th> $imagem-token </Th>  <Th>  nome: <input type="text" name="characterName" id="CharacterClass"></input> </Th> 
                        <Th>
                            raca: <select name="characterRace" id="CharacterRace">
                            <option value={0}>none</option>
                            <option value={1}>Aesires</option>
                            <option value={2}>Anao</option>
                            <option value={3}>Elfo</option>
                            <option value={4}>Faens</option>
                            <option value={5}>Faunos</option>
                            <option value={6}>Firas</option>
                            <option value={7}>Humano</option>
                            <option value={8}>jubans</option>
                            <option value={9}>Levent</option>
                            <option value={10}>Mahoks</option>
                            <option value={11}>Tailox</option>
                            </select>
                        </Th>
                         
                        
                        <Th>
                            classe: <select name="characterClass" id="CharacterClass">
                            <option value={0}>none</option>
                            <option value={1}>Bardo</option>
                            <option value={2}>Druida</option>
                            <option value={3}>Espadachim</option>
                            <option value={4}>Feiticeiro</option>
                            <option value={5}>Guerreiro</option>
                            <option value={6}>Ladino</option>
                            <option value={7}>Paladino</option>
                            <option value={8}>Patrulheiro</option>
                            <option value={9}>Runico</option>
                            <option value={10}>Sacerdote</option>
                            <option value={11}>Xama</option>
                            </select>    
                            
                        </Th> 
                        
                        <Th>
                            level: <select name="characterClass" id="CharacterClass">
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            </select>
                        </Th> 

                        </Tr>

            </Tbody>
        </Table>
    )
}

export default CharacterSheet;