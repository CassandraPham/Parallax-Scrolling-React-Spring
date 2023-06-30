import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import imageLayers from './witch-layers'
import Text from './Text'

export default function WitchPage() {
    return (

        <Parallax pages={2} className="animation">

            {/* Map each object in imageLayers to a ParallaxLayer component */}

            {imageLayers.map((layer) =>
                <ParallaxLayer
                    key={layer.id}
                    offset={layer.offset}
                    speed={layer.speed}
                    factor={layer.factor ? layer.factor : 1}
                    horizontal={layer.horizontal ? layer.horizontal : false}>

                    <div className="animation_layer" id={layer.id}></div>

                </ParallaxLayer>
            )}


            {/* Text layer starting from second page and does not move in accordance to its offset */}
            <ParallaxLayer offset={1} speed={0}>
                <Text />
            </ParallaxLayer>

        </Parallax>

    )
}