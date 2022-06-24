

export function IdCard(props) {
    console.log(props)
    return (
        <>
            <p>First Name: {props.firstName}</p>
            <img src={props.picture} />
        </>
    )
}