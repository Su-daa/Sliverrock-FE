function CallAppButton() {
    return (
        <>
            <button onClick={() => {openFlutterApp()}}>Open Flutter App</button>
            <script>
                
            </script>
            <p>button</p>
        </>
    )
}

function openFlutterApp() {
    return(window.location.href = "flutterapp://open-home-page")
}

export default CallAppButton;