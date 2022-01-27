// https://reactjs.org/docs/hooks-state.html
import { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState(""); //restructuring
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();

        setPets(json.pets);

    }

    return (

        <div className="search-params">
<<<<<<< HEAD
<<<<<<< HEAD
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }
                }
            >
=======
            <form>
>>>>>>> parent of a4093d4 (Custom Hooks)
=======
            <form>
>>>>>>> parent of a4093d4 (Custom Hooks)
                <label htmlFor="location"> Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)}

                        value={location} placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option></option>
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>


                            ))
                        }


                    </select>

                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                    >
                        <option></option>
                        {
                            breeds.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>


                            ))
                        }


                    </select>

                </label>


                <button>Submit</button>
            </form>

            <Results pets={pets} />

        </div>
    );
};


export default SearchParams;