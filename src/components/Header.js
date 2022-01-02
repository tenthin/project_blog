import PropTypes from 'prop-types'
import "./header.css"
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='Header'>
            <h1>{title}</h1>
            <Button/>
            <br />
            <br />
            <br />

            <select class="col-xs-2" aria-label="Default select example">
            <option selected>Genre</option>
            <option value="Supernatural">Supernatural</option>
            <option value="sci-Fi">sci-Fi</option>
            <option value="Horror">Horror</option>
            </select>

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
