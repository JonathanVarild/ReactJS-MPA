// Load additional components.
ReactJSMPA.loadScript("components/boxComponent.js")

ReactJSMPA.waitForScripts(() => {

    // Create our component function.
    class AppContainer extends React.Component {

        // Create function used to render the component.
        render() {

            // Return JSX. (Check ReactJS JSX documentation)
            return (
                <BoxComponent/>
            )

        }

    }

    // Render the page on our website.
    ReactDOM.render(<AppContainer />, document.querySelector('#appContainer'))

})