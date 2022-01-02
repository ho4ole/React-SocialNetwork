import loading from '../../Users/loading.gif'

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'white' }}>
        <img src={loading}/>
    </div>
}

export default Preloader