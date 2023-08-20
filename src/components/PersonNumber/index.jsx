function PersonNumber(props){

    return (
        <input 
            type="text" 
            name="personId" 
            className="personId" 
            onChange={(ev) => props.getPerson(ev.target.value)}
            disabled={props.isLoad ? true : false}
        />
    );
};

export default PersonNumber;