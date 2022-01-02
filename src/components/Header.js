import PropTypes from 'prop-types'
import "./title.css"
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='Header'>
            <h1>{title}</h1>
            <Button color='orange' text='New Blog'/>
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
