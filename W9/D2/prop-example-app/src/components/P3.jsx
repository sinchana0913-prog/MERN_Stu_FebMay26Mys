//Container/wrapper component 
import {React} from "react";
//children is a special React prop
// it holds nested JSX passed between component tags
//it helps create reusable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}
//parent component
export function PropsChildren(){
    return(
        <>
        <Container> {/* container here is a name of child component*/}
            <h3>First child element in nested approach</h3>
        </Container>
        </>
    )

    
}