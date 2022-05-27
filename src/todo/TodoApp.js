// // import { Component, createContext } from "react";
// import { useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootContext } from "../App";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";

// const TodoApp = () => {
//     const data = useContext(RootContext)
//     // const addForm = useSelector((state) => state.addedForm)
//     // console.log(data);
//     return(
//         <>
//             {data.data.addedForm ? <TodoForm /> : <TodoList />}
//         </>
//     )
// }
// // export default TodoApp;



























// // export const RootContext = createContext();
// // const Provider = RootContext.Provider; 

// // const  TodoApp = (props) => {

// //     const initialState = {
// //         toDos : [{
// //             id : 1,
// //             todo : "dummy data",
// //             desc : "dummy desc",
// //             isStrike : false
// //         },
// //         {
// //             id : 2,
// //             todo : "Renang",
// //             desc : "Hari Minggu Depan Akan Renang",
// //             isStrike : true
// //         }],
// //         form : {
// //             todo: "",
// //             desc: ""
// //         },
// //         addedForm : false,
// //     }

// //     const TodoApp = (state = initialState,action) => {

// //         if(action.type === "ONCHANGE_FORM_TODO"){
// //                     return this.setState({
// //                         ...this.state,
// //                         form : {...this.state.form, id: this.state.toDos.map((data, i)=> data.id) + 1, todo: action.payload}
// //                     })
// //                 }
        
// //                 if(action.type === "ONCHANGE_FORM_DESC"){
// //                     return this.setState({
// //                         ...this.state,
// //                         form : {...this.state.form, desc: action.payload}
// //                     })
// //                 }
        
// //                 if(action.type === "ADD"){
// //                     return this.setState({
// //                          ...this.state,
// //                         toDos : [...this.state.toDos, this.state.form],
// //                         addedForm : false
// //                     })      
// //                 }
        
// //                 if(action.type === "SET_COMPONENT"){
// //                     return this.setState({
// //                         addedForm : true
// //                     })
// //                 }
        
// //                 if(action.type === "DELETE"){
// //                     return this.setState({
// //                         // toDos : action.payload
// //                         toDos : [...this.state.toDos.filter((todo, idx) => idx !== action.idx)]
// //                     })
// //                 }
        
// //                 if(action.type === "FINISH"){
// //                     this.setState({
// //                         toDos: [...this.state.toDos.map((todo, idx) => {
// //                                 if(idx === action.idx){
// //                                     if(todo.isStrike === true){
// //                                             todo.isStrike = false
// //                                     }else {
// //                                             todo.isStrike = true
// //                                     }
// //                                 }
// //                             return todo
// //                         })]
// //                     })
// //                 }
// //                 return TodoApp;

// //     }
    
        
    
//     // dispatch = (action, index) => {
//     //     if(action.type === "ONCHANGE_FORM_TODO"){
//     //         return this.setState({
//     //             ...this.state,
//     //             form : {...this.state.form, id: this.state.toDos.map((data, i)=> data.id) + 1, todo: action.payload}
//     //         })
//     //     }

//     //     if(action.type === "ONCHANGE_FORM_DESC"){
//     //         return this.setState({
//     //             ...this.state,
//     //             form : {...this.state.form, desc: action.payload}
//     //         })
//     //     }

//     //     if(action.type === "ADD"){
//     //         return this.setState({
//     //              ...this.state,
//     //             toDos : [...this.state.toDos, this.state.form],
//     //             addedForm : false
//     //         })      
//     //     }

//     //     if(action.type === "SET_COMPONENT"){
//     //         return this.setState({
//     //             addedForm : true
//     //         })
//     //     }

//     //     if(action.type === "DELETE"){
//     //         return this.setState({
//     //             // toDos : action.payload
//     //             toDos : [...this.state.toDos.filter((todo, idx) => idx !== action.idx)]
//     //         })
//     //     }

//     //     if(action.type === "FINISH"){
//     //         this.setState({
//     //             toDos: [...this.state.toDos.map((todo, idx) => {
//     //                     if(idx === action.idx){
//     //                         if(todo.isStrike === true){
//     //                                 todo.isStrike = false
//     //                         }else {
//     //                                 todo.isStrike = true
//     //                         }
//     //                     }
//     //                 return todo
//     //             })]
//     //         })
//     //     }
//     // }

//     // render(){
//     //     return(
//     //         <Provider value={
//     //               {
//     //                 state : this.state,
//     //                 dispatch : this.dispatch
//     //               }
//     //               }>
//     //             {this.state.addedForm ? <TodoForm /> : <TodoList />}
//     //         </Provider>
//     //     )
//     // }

// // }

// // export default TodoApp;