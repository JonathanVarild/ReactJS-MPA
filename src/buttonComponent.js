// Create our component function.
class ButtonComponent extends React.Component {

    // Create function used to render the component.
    render() {

        // Return JSX. (Check ReactJS JSX documentation)
        return (
            <button onClick={() => { alert("hello world")} }>
                Click me
            </button>
        )

    }

}