import './HomePage.css'

export default function HomePage() {
    return (
        <div className="HomePage">
            <img className="HomePage_Logo" src='/images/Logo_Blue.png' alt="Opal Logo" />
            <div className="HomePage_Text">{"Opal CalcVue"}</div>
            <div className="HomePage_Text">{"Select a medication or tab to begin"}</div>
        </div>
    )
}

