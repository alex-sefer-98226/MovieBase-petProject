import React from "react";
import {Spin} from "antd";
import makeCardsFromFilms from "./MakeCardsFromFilms";

export class FilmsList extends React.Component {
    componentDidMount() {
        if(!this.props.domains) {
            this.props.loadFilms(this.props.linkKey);
        }
    }

    render() {
        const isLoading = this.props.loaded;
        if (isLoading === false) {
            return (
                makeCardsFromFilms({
                    films: this.props.films.byId,
                    linkKey: this.props.linkKey,
                    title: this.props.title
                })
            );
        } else {
            return <div style={{textAlign: "center", margin: "180px auto"}}>
                <Spin size="large"/>
            </div>
        }
    }
}

export default FilmsList;
