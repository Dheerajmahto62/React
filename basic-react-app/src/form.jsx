function formSubmit(event){
    event.preventDefault();
    console.log("Form was submited");
}


export default function Form(){
    return (
        <form onSubmit={formSubmit}>
            <input placeholder="write something" />
            <button>Submit</button>
        </form>
    )
}