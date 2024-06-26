function PrintHello(){
    console.log("Hello");
}

function PrintBy(){
    console.log("Byy");
}

export default function Button() {
    return (
        <div>
            <button onClick={PrintHello}>Click me</button>
            <p onClick={PrintBy}>this parah is for event demo</p>
        </div>
    )
}