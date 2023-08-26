type buttonProps = {
label : string
onClickk: ()=> void
update:string
}
export default function Button(props:buttonProps) {
    const{label, onClickk} = props
    return   (
        <>
        <div>
            <h1>Button</h1>
            <button  onClick={onClickk} >
                {label}
            </button>
        </div>
        </>
    )
}