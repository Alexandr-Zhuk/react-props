function ShowFeatures(props) {
    return (
        <div className="features_person">
            <ul>
                <li>{props.features.gender}</li>
                <li>{props.features.birth_year}</li>
                <li>{props.features.height}</li>
                <li>{props.features.skin_color}</li>
            </ul>
        </div>
    );
}

export default ShowFeatures;