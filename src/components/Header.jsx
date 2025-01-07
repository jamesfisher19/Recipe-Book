import chefhat from '../assets/chefhat.png'

export default function Header() {
    return (
        <header>
                <img src={chefhat} alt="Globe image" />
                <h1>AI Recipe Book!</h1>
        </header>
    )
}