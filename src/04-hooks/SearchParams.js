// https://reactjs.org/docs/hooks-state.html

const SearchParams = () => {
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location"> Location
                    <input id="location" value="Seattle, WA" placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}


export default SearchParams;