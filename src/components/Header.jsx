import img from '../images/troll-face.png'
export default function Header(){
    return (
        <nav>
            <img className='nav-logo' src={img} alt="logo" />
           <h3 className='nav-title'>Meme generator</h3>
        </nav>
    )
}