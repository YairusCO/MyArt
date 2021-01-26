import { ItemFilter } from '../cmps/ItemFilter'
import Hero from '../assets/imgs/hero4.jpg';

    export function HeroPic({handleInput}){

        return (
            <section className="relative">
                <img src={Hero} className="hero" alt="hero" />
                    {/* <h1><span className="pic">Pic</span><span>&</span><span className="art">Art</span></h1>
                    <p className="hero-text" >Your place for buying high quality images and artwork</p> */}
                    <ItemFilter handleInput={handleInput} />
                </section>
        )
    
}
