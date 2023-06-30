import { useRef } from 'react'

// Animation
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'

// Components
import TextCard from './TextCard'
import TrailCard from './TrailCard'
import HelicopterTextLeft from './HelicopterTextLeft'
import HelicopterTextRight from './HelicopterTextRight'

// Images
import sky from './images/sky.jpg'
import helicopter from './images/helicopter1.gif'
import layers from './helicopter-layers'


export default function HelicopterPage() {
    const imageLayers = layers;
    const ref = useRef();

    const props = useSpring(
        {
            from: {
                opacity: 0,
                marginTop: '0px',
                color: 'blue'
            },
            to: {
                opacity: 1,
                marginTop: '20px',
                color: 'white'
            },
            config: { duration: 1500 }
        }
    )

    return (
        <Parallax pages={3} className='animation' ref={ref}>

            {/* Sky layer */}
            <ParallaxLayer offset={0} speed={1} factor={1}
                style={{
                    backgroundImage: `url(${sky})`,
                    backgroundSize: 'cover',
                }}>
                <TextCard />
                <TrailCard />
            </ParallaxLayer>

            {/* Page title layer */}
            <ParallaxLayer offset={0.1} speed={0.05}
                onClick={() => ref.current.scrollTo(2)}>
                <animated.h1 className='helicopter-title' style={props}>The Helicopter</animated.h1>
            </ParallaxLayer>

            {/* Helicopter layer */}
            <ParallaxLayer
                sticky={{ start: 0.7, end: 2.5 }}
                style={{ textAlign: 'center' }}
                onClick={() => ref.current.scrollTo(0)}>
                <img src={helicopter} id='helicopter' />
            </ParallaxLayer>

            {/* Map imageLayers data to create ParallaxLayer for the clouds and the landspot */}
            {imageLayers.map((layer) =>
                <ParallaxLayer
                    key={layer.id}
                    offset={layer.offset}
                    speed={layer.speed}
                    factor={layer.factor ? layer.factor : 1}>
                    <div className="animation_layer" id={layer.id}></div>
                </ParallaxLayer>
            )}

            {/* Left textbox layer */}
            <ParallaxLayer offset={1} speed={0.5}>
                <HelicopterTextLeft />
            </ParallaxLayer>

            {/* Right textbox layer */}
            <ParallaxLayer offset={1.1} speed={4.5}>
                <HelicopterTextRight />
            </ParallaxLayer>

        </Parallax >
    )
}