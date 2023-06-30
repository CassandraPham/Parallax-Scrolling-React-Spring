import { useTrail, animated } from "@react-spring/web";

function TrailCard() {

    const textContents = ['useSpring', 'useSprings', 'useTrail'];

    const trailAnimation = useTrail(textContents.length, {
        from: {
            backgroundColor: 'yellow',
            width: '60px',
            height: '5px',
            opacity: 0
        },
        to: {
            backgroundColor: '#aed2ef',
            width: '200px',
            height: '25px',
            opacity: 1,
            margin: '5px'
        },
    })

    return (
        <>

            {/* Map each spring to an animated div and parse each spring to the style prop.
              Gives the div some other stylings beside the spring */}
            {trailAnimation.map((spring, index) => {
                return (
                    <animated.div key={index} style={{
                        ...spring,
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                        top: '15%',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                    >
                        {/* The displayed content of each div is parsed from the textContents array */}

                        {textContents[index]}
                    </animated.div>
                )
            })
            }
        </>
    );
}

export default TrailCard;