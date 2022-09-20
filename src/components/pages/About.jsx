import React from 'react';
import MultiplePizza from "../../assets/multiplePizzas.jpeg";
import "../styles/about.css";

const About = () => {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{
                backgroundImage: `url(${MultiplePizza})`
            }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam vero sunt perferendis consequatur aperiam repellendus, corrupti accusantium tempora amet, dolor autem veniam nesciunt hic! Enim omnis, ut laborum pariatur dicta, molestias nesciunt, perferendis ea necessitatibus sunt praesentium nihil quae perspiciatis dolorem? Alias incidunt sunt atque recusandae, eum excepturi libero iusto laboriosam ratione explicabo. Ullam sed corrupti magnam suscipit quam, sequi placeat accusamus velit fuga? Sint quis dolorum eius eos sapiente quod impedit. Quam, blanditiis! Numquam culpa illum iure eveniet placeat sit at odit, omnis, odio optio asperiores nemo animi distinctio quod delectus expedita! Debitis reprehenderit quidem neque deleniti vel?</p>
            </div>
        </div>
    );
}

export default About