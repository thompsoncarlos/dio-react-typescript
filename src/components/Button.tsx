interface IButton {
    onClick: () => {}
}

export const Button = ({onClick}: IButton) => {
    return (
         {onClick}
    )
}