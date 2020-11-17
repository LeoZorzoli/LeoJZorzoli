import React from 'react'
import './landingPage.css'
import square from '../../assets/cuadrado.png'
import heart from '../../assets/heart.png'
import idea from '../../assets/idea.png'
import growing from '../../assets/siembra.png'
import Social from '../social/Social'
import '../social/social.css'

const LandingPage = () => {
    return(
        <div>
            <div className="principal animate__animated animate__fadeIn animate__slower">
                <div className="row icons">
                    <div className="icon">
                        <img className="icon-image" src={growing} alt="Growing Icon" />
                        <p>Permanently Growing</p>
                    </div>
                    <div className="icon">
                        <img className="icon-image" src={idea} alt="Idea Icon"/>
                        <p>Idea Hunter</p>
                    </div>
                    <div className="icon">
                        <img className="icon-image" src={square} alt="Square Icon"/>
                        <p>Perfectionist Work</p>
                    </div>
                    <div className="icon">
                        <img className="icon-image" src={heart} alt="Heart Icon"/>
                        <p>Built With Love</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="initialInfo">Hi! I'm Leo a Web Developer, Designer, Blog writer and <br /> self-taught learner.</p>
                        </div>
                        <div className="col-lg-5">
                            <p className="descriptionInfo">I'm a 25-year-old guy based in Argentina, passionate about creating products that help the community,
                            and solving real world problems with software. I like to be in the intersection of design, marketing and engineering.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Social />
        </div>
        
    )
}

export default LandingPage