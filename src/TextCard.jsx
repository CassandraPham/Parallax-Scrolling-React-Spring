import { useSprings, animated } from "@react-spring/web";


function TextCard() {
    const textContents = ['Sticky parallax', 'useRef'];

    // The configuration we want to pass to useSprings
    const data = [
        {
            id: 1,
            from: {
                backgroundColor: 'blue',
                width: '100px',
                height: '20px',
                opacity: 0,
            },
            to: {
                backgroundColor: '##7aadd6',
                width: '300px',
                height: '40px',
                opacity: 0.6,
                position: 'relative',
                top: '45%',
                left: '50%',
                transform: 'translateX(-50%)'
            },
            config: { duration: 2000 }

        },

        {
            id: 2,
            from: {
                backgroundColor: 'blue',
                width: '100px',
                height: '10px',
                opacity: 0,
            },
            to: {
                backgroundColor: 'skyblue',
                width: '400px',
                height: '50px',
                opacity: 1,
                position: 'relative',
                top: '47%',
                left: '50%',
                transform: 'translateX(-50%)'
            },
            config: { duration: 2500 }

        },
    ]

    // Create springs uing useSprings
    const springs = useSprings(
        data.length,
        data
    )


    return (
        <>
            {/* Map each spring to an animated div and parse each spring to the style prop.
              Gives the div some other stylings beside the spring */}

            {springs.map((spring, index) => <animated.div
                key={data[index].id}
                style={{
                    ...spring,
                    color: 'white',
                    textAlign: 'center',
                }}>

                {/* The displayed content of each div is parsed from the textContents array */}

                {textContents[index]}

            </animated.div>)
            }

        </>
    );
}

export default TextCard;