import { StylesContext } from '@material-ui/styles'
import React from 'react'
import { Container } from 'react-bootstrap'

import "./Subheader.css"

const Subheader = () => {
    return (
        <div className = 'subheader'>

            <figure className="subheader__bg">
                <img className='img' src={'https://i.imgur.com/kyiFyyw.jpg'} />
                <Container>
                <figcaption>
                    Table tennis enthusiasts at Georgia Tech struggle to find tables to play on around campus outside of Table Tennis Club. 
                    Ping for Pong aims to eliminate this issue by compiling the tables available on campus into a website and displaying 
                    them on an interactive map. On the site, each building containing a ping pong table will have a marker over it. When the
                    marker is clicked, a box with more information will hover over the marker. The box will contain information about where
                    the table is located within the building, as well as other notes such as hours of operation. Players can also use the form 
                    at the bottom of the site to submit new tables they found on campus for confirmation.
                </figcaption>
                </Container>
            </figure>

        </div>
    )
}

export default Subheader
