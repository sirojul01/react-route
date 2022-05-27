import React, { useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { RootContext } from "../App"

const TodoList = () => {
    // render(){
    //     return(
    //         <RootContext.Consumer>

    //             { 
    //             value => {
                    // const dispatch = useDispatch();
                    // const toDos = useSelector((state) => state.toDos)
                    const data = useContext(RootContext)
                    console.log(data);
                return(
                    <>
                        <button onClick={()=>data.dispatch({type: "SET_COMPONENT"})}> Add ToDo</button>
                        <br />
                        <table border={1} style={{ margin: '20%' }}>
                            <thead>
                                <tr>
                                    <td>No </td>
                                    <td>To Do </td>
                                    <td>Desc</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.data.toDos.map((datas,i) => {
                                        // console.log(data.value.toDos[i].isStrike);
                                            return(
                                                <>
                                                        <tr accessKey={datas.id}>
                                                            <td id="idToDo">{i+1}</td>
                                                            <td id="ToDo" style={{ textDecorationLine: data.data.toDos[i].isStrike ? "line-through" : "" }}>{datas.todo}</td>
                                                            <td id="Desc" style={{ textDecorationLine: data.data.toDos[i].isStrike ? "line-through" : "" }}>{datas.desc}</td>
                                                            <td>
                                                                <button onClick={()=>data.dispatch({type : "FINISH", idx: i})}>Finish</button>
                                                                <button>Update</button>
                                                                <button onClick={()=>data.dispatch({type: "DELETE", idx: i})}>Delete</button>
                                                            </td>
                                                        </tr>
                                                </>
                                            )
                                            
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                    )
                } 
    //             }
            
    //         </RootContext.Consumer>
    //     )
    // }
// }
export default TodoList;