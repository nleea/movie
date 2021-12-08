import { useState, useEffect } from "react";
import { Wrap } from "../../container/wrap/Wrap";
import { Button } from "../UI/button/Button";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import { movie_api } from "../../util/urls";
import "./certification.css";

const Certification = () => {
    const [Certification, setCertification] = useState<any>({});
    const { http, loading } = Fetch();
    const { httpType } = FetchType();

    useEffect(() => {
        let leak = true;
        http(`https://api.themoviedb.org/3/certification/movie/list?api_key=${movie_api}`, setCertification, leak)
        return () => {
            leak = false;
        };
    }, [http]);

    const getType = async (type: string) => {
        if (type === "movies") {
            httpType("https://api.themoviedb.org/3/certification/movie/list?api_key=" + movie_api, setCertification);
        } else {
            httpType("https://api.themoviedb.org/3/certification/tv/list?api_key=" + movie_api, setCertification);
        }
    };

    return (
        <>
            <div className="container-type_certification">
                <Button click={() => getType("movies")} type="movies">Movies</Button>
                <Button click={() => getType("series")} type="ss">Series</Button>
            </div>
            <Wrap loading={loading} >
                <div className="certification-container">
                    {Object.keys(Certification).map((key) => {
                        return <div className="certification-card_container" key={key}>
                            <h1>{key}</h1>
                            {
                                Certification[key].map((data: any) => {
                                    return (
                                        <div className="certification-card">
                                            <h3>{data.certification}</h3>
                                            <p>{data.meaning}</p>
                                            <p><strong>{data.order}</strong></p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    })}
                </div>
            </Wrap>
        </>
    );
};

export default Certification;
