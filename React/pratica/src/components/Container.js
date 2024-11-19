export const Container = ({ children, newValue }) => {
    return (
        <div>
            <h2>TEXTO DO CONTAINER</h2>
            {children}
            <p>O valor é: {newValue}</p>
        </div>
    )
}