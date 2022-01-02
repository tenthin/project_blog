import PropTypes from 'prop-types'
import "./title.css"

const Header = ({ title }) => {
    return (
        <header className='heading-style'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : 'Fictional Novel',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header
