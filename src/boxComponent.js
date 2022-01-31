// Load additional components.
ReactJSMPA.loadScript("components/buttonComponent.js")

// Path is a URL or relative to the ../build/ folder.
const backgroundPath = "media/background.jpg"

// Can be a simple text. (HTML is automatically escaped)
const title = "Welcome to ReactJS MPA!"

// Create our component function.
class BoxComponent extends React.Component {

    // Create function used to render the component.
    render() {

        // Return JSX. (Check ReactJS JSX documentation)
        return (
            <div className="boxClass" style={{ backgroundImage: "url(" + backgroundPath + ")" }}>
                <h1>{title}</h1>
                <p>{this.props.message && this.props.message || "No message provided."}</p>
                <a href="index.html">Index Page</a><br />
                <a href="another.html">Another Page</a><br />
                <ButtonComponent title="Click Me!" />
            </div>
        )

    }

}