import React, {Component} from "react";

class Card extends Component {
    render() {
        const {person, count, index} = this.props;

        return (

            <div className="card">
            <div className="card-contents">
                <h1>{`${person.name.first} ${person.name.last}`}</h1>
                <section className="card-fields">
                    <p><span className="card-field">From: </span>{`${person.city}, ${person.country}`}</p>
                    <p><span className="card-field">Job Title: </span>{person.title}</p>
                    <p><span className="card-field">Employer: </span>{person.employer}</p>
                </section>
                <section className="card-fields">
                    <p><span className="card-field">Favorite Movies:</span></p>
                    <ol>
                        <li>{person.favoriteMovies[0]}</li>
                        <li>{person.favoriteMovies[1]}</li>
                        <li>{person.favoriteMovies[2]}</li>
                    </ol>
                </section>
            </div>
            <div className="current-card">{`${index} / ${count}`}</div>
        </div>

        )
    }

}

export default Card;