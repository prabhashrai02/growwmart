export type ButtonProps = {
    value: string,
    className: string
    type?: "button" | "submit" | "reset" | undefined,
    func?: () => void,
}