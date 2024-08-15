import React from "react";
import "./Chapter4.css"
import bild from "../test.jpg";


function Chapter4() {

    return (
        <div className="Chapter4">
            <div className="container">
                <div className="row">

                    <div className="chapter-col-space">
                        <div className="Paceholder">
                            <img src={bild} alt={"Test Bild"}/>
                        </div>
                    </div>

                    <div className="chapter-col">
                        <div className="Topic">
                            TRAINING
                        </div>
                        <div className="Content">
                            <div className="TextColumn">
                                <p>
                                    Machine learning is a field of study in the bigger term of artificial intelligence
                                    which
                                    itself is a field of study in computer science. It concerns itself with the
                                    development
                                    and
                                    study
                                    of statistical algorithms that can learn from data and generalize to unseen data and
                                    thus
                                    perform
                                    tasks without explicit instructions. Within Machine learning we also distinguish
                                    between
                                    3
                                    categories
                                </p>
                            </div>
                            <div className="ButtonContainer">
                                <button type="button">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chapter4;