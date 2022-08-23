import React, {useEffect, useRef} from 'react';
import "../styles/pages/Home.css"

Home.propTypes = {};

function Home(props: any) {
    const hero__titleRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        const hero_t: HTMLDivElement = hero__titleRef.current;
        hero_t.style.transform = "translateX(0)";

    }, [])
    return (
        < >
            <section className={"hero"}>
                <h1 className={"hero__title"} ref={hero__titleRef}>
                    Hi , I am a <span className={"special"}>FullStack Web Developer </span>
                    Hire me
                </h1>
            </section>
            <section className={"project__container"}>
                <h5 className="project__sec__heading">
                    Projects
                </h5>


                <div className="projects">

                    <div className="card" data-github-link="https://github.com"
                         data-website-link="jojopage.herokuapp.com">
                        <h3 className="project__name">JojoProject</h3><p className="project__info">This is one of the
                        first project i completed, JojoProject is a fullstack project implementing CRUD, this was solely
                        built using Django , in this project only people with admin access can make a blogpost, i also
                        built in authentication, so only authenticated users can view post</p>
                        <hr/>
                        <h5 className="project__tech__hero">Framework/Technologies</h5><p
                        className="project__tech"> Django/Python</p>

                        <div className="project__links">
                            <div><a href="https://github.com/jojothomas1515/JojoProject"> Github Repo</a></div>
                            <div><a href="https://jojopage.herokuapp.com/">View Webpage</a></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="project__name">JojoFrontend</h3><p className="project__info">This project is a
                        remake of my first project as an SPA , here I used jwt authentication with an api i made using
                        DRF( Django Rest Framework), it saves the token using localstorage, the Web App implement CRUD
                        fetching posts from the api when the dom loads, it has got more features</p>
                        <hr/>
                        <h5 className="project__tech__hero">Framework/Technologies</h5><p
                        className="project__tech">React.js
                    </p>
                        <div className="project__links">
                            <div><a href="https://github.com/jojothomas1515/JojoProject"> Github Repo</a></div>
                            <div><a href="https://jojopage.herokuapp.com/">View Webpage</a></div>
                        </div>
                    </div>
                    <div className="card">
                        <h3 className="project__name">Calculator</h3><p className="project__info">This is a calculator
                        Web App
                        made with react, using the reducer hook to perform basic calculator operations adding clicked
                        digits to the display , and also clearing and deleting digits</p>
                        <hr/>
                        <h5 className="project__tech__hero">Framework/Technologies</h5><p
                        className="project__tech">React.js</p>
                        <div className="project__links">
                            <div><a href="https://github.com/jojothomas1515/JojoProject"> Github Repo</a></div>
                            <div><a href="https://jojopage.herokuapp.com/">View Webpage</a></div>
                        </div>
                    </div>
                    {/*<div className="card">*/}
                    {/*    <h3 className="project__name"></h3><p className="project__info"></p>*/}
                    {/*    <hr/>*/}
                    {/*    <h5 className="project__tech__hero">Framework/Technologies</h5><p className="project__tech"></p>*/}
                    {/*</div>*/}
                </div>

            </section>
        </>
    );
}

export default Home;