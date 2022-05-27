import React from "react";
import { useDispatch } from "react-redux";
// import { RootContext } from "./TodoApp";

const TodoForm = () =>{
    const dispatch = useDispatch();
        return(
            // <RootContext.Consumer>
                // {
                    // value => {
                        // return(
                            <>
                                <div style={{ height: '100%', width:'100%', display:'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <div>
                                        <h1>This is Form Todo List</h1>
                                        <br />
                                        <form onSubmit={()=>dispatch({type: "ADD"})}>
                                            <label htmlFor="todo">Todo : </label>
                                            <input type="text" name="todo" id="" onChange={(e)=>{dispatch({type: "ONCHANGE_FORM_TODO", payload: e.target.value})}}/>
                                            <br />
                                            <br />
                                            <label htmlFor="desc">Desc : </label>
                                            <input onChange={(e)=>{dispatch({type: "ONCHANGE_FORM_DESC", payload: e.target.value})}} type="text" name="desc" id="" />
                                            <br />
                                            <br />
                                        <button onClick={()=>this.props.listForm(false)}>Cancel</button>
                                        <button type="submit">Submit</button>
                                        </form>

                                    </div>
                                </div>
                            </>
                        // )
                    // }
                // }
            
            // </RootContext.Consumer>
        )
}


// const mapDispatchToProps = (dispatch) => {
//     return{
//         addData : (data) => dispatch({
//             type : ActionType.ADD,
//             payload : data
//         }),
//         listForm : (data) => dispatch({
//             type : ActionType.SET_COMPONENT,
//             setForm: data
//         })
//     }
// }

// export default connect(null, mapDispatchToProps)(TodoForm)
export default TodoForm;