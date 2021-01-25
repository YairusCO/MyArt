import { ItemFilter } from '../cmps/ItemFilter'
import Hero from '../assets/imgs/hero.jpg';

    export function HeroPic({handleInput}){

        return (
            <section>
                <img src={Hero} className="hero" alt="hero" />
                <div className="store-details">
                    {/* <h1><span className="pic">Pic</span><span>&</span><span className="art">Art</span></h1>
                    <p className="hero-text" >Your place for buying high quality images and artwork</p> */}
                    <ItemFilter handleInput={handleInput} />
                </div>
                </section>
        )
    
}
