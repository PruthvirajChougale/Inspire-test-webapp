import Button from "../../components/button";
function ButtonTest(){
    return(
        <>
            <Button variant='primary' onClick={()=>console.log("clicked")}>
                Click me!!!
            </Button>
        </>
    )
}
export default ButtonTest;
