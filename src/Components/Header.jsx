import React, {Fragment} from 'react'

const Header = ({titulo}) => {
    return (
        <Fragment>
            <header>
                <h1>{titulo}</h1>
            </header>
        </Fragment>
    )
}

export default Header
