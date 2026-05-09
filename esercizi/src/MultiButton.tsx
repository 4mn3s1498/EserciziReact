export function MultiButton (){
    return(
        <div>
            <button name="one" onClick={(event) => console.log(event.target.name)}>1</button>
            <button name="two" onClick={(event) => console.log(event.target.name)}>2</button>
            <button name="three" onClick={(event) => console.log(event.target.name)}>3</button>        
        </div>

    )
}