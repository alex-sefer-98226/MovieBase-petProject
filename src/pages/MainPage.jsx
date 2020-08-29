import React from 'react';
import AdvertisingCarousel from "../components/AdvertisingCarousel";
import FilmsList from "../containers/FilmsList";
import TopRatedList from "../containers/TopRatedList";
import NowPlayingList from "../containers/NowPlayingList";
import UpcomingPlayingList from "../containers/UpcomingPlayingList";
import TvShowList from '../containers/TvShowList';

export default function MainPage() {
    return (
        <div className="mainPageContent" style={{padding:"20px"}}>
            <AdvertisingCarousel/>
            <TopRatedList title={"Топ рейтинга"} linkKey={"top_rated"} />
            <FilmsList title={"Популярные"} linkKey={"popular"} />
            <NowPlayingList title={"Сейчас в кинопрокате"} linkKey={"now_playing"} />
            <UpcomingPlayingList title={"Скоро в кино"} linkKey={"upcoming"} />
            <TvShowList title={"TV сериалы"} linkKey={"popular"} />

        </div>
    );
}