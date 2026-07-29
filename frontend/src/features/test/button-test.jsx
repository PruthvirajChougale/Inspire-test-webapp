import Button from "../../components/button";
function ButtonTest(){
    return(
        <>
            <Button variant='primary' onclick={()=>console.log("clicked")}>
                Click me!!!
            </Button>
        </>
    )
}
export default ButtonTest;