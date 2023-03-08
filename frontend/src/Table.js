import axios from "axios";
import React,{Component} from "react";

class Table extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:2025/show')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>blood_group</th>
                        <th>patient_disease</th>
                        <th>donar_name</th>
                        <th>patient_name</th>
                        <th>donar_Contact</th>
                        <th>donar_Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.patient_id}</td>
                            <td>{user.blood_group}</td>
                            <td>{user.patient_disease}</td>
                            <td>{user.donar_name}</td>
                            <td>{user.patient_name}</td>
                            <td>{user.donar_Contact}</td>
                            <td>{user.donar_Address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;