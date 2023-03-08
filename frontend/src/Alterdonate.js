import React, { Component } from "react";
import axios from "axios";


class Nennw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blood_group: "",
            patient_disease: "",
            donar_name: "",
            patient_name: "",
            donar_Contact: "",
            donar_Address: "",
            donationData: [], 
        };
    }

    componentDidMount() {
        
        axios.get("http://localhost:2006/show").then((response) => {
            this.setState({ donationData: response.data });
        });
    }

    handleblood_group = (event) => {
        this.setState({ blood_group: event.target.value });
    };
    handlepatient_disease = (event) => {
        this.setState({ patient_disease: event.target.value });
    };
    handledonar_name = (event) => {
        this.setState({ donar_name: event.target.value });
    };
    handlepatient_name = (event) => {
        this.setState({ patient_name: event.target.value });
    };
    handledonar_Contact = (event) => {
        this.setState({ donar_Contact: event.target.value });
    };
    handledateee = (event) => {
        this.setState({ donar_Address: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            blood_group: this.state.blood_group,
            patient_disease: this.state.patient_disease,
            donar_name: this.state.donar_name,
            patient_name: this.state.patient_name,
            donar_Contact: this.state.donar_Contact,
            donar_Address: this.state.donar_Address,
        };
        console.log(data);
        axios.post("http://localhost:2006/add", data).then((response) => {
            
            this.setState({
                donationData: [...this.state.donationData, response.data],
                blood_group: "",
                patient_disease: "",
                donar_name: "",
                patient_name: "",
                donar_Contact: "",
                donar_Address: "",
            });
        });
    };

    handleUpdatee = (id, data) => {
        
        axios.put(`http://localhost:2006/update/${id}`, data).then((response) => {
            
            const updatedFuelData = this.state.donationData.map((fuel) => {
                if (fuel.id === response.data.id) {
                    return response.data;
                } else {
                    return fuel;
                }
            });
            this.setState({ donationData: updatedFuelData });
        });
    };

    handleDelete = (id) => {
        
        axios.delete(`http://localhost:2006/delete/${id}`).then((response) => {
            
            const updatedFuelData = this.state.donationData.filter(
                (fuel) => fuel.id !== id
            );
            this.setState({ donationData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            blood_group: data.blood_group,
            patient_disease: data.patient_disease,
            donar_name: data.donar_name,
            patient_name: data.patient_name,
            donar_Contact: data.donar_Contact,
            donar_Address: data.donar_Address,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            blood_group: this.state.blood_group,
            patient_disease: this.state.patient_disease,
            donar_name: this.state.donar_name,
            patient_name: this.state.patient_name,
            donar_Contact: this.state.donar_Contact,
            donar_Address: this.state.donar_Address,
            
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:2006/update/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    blood_group: "",
                    patient_disease: "",
                    donar_name: "",
                    patient_name: "",
                    donar_Contact:"",
                    donar_Address:""
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (

            <div>
                <p><center><b><u>BLOOD BANK</u></b></center></p>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">BLOOD GROUP:  </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.blood_group}
                        onChange={this.handleblood_group}
                    />
                    <br /><br />
                    <label className="login-label">PATIENT DISEASE:  </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.patient_disease}
                        onChange={this.handlepatient_disease}
                    />
                    <br /><br />

                    <label className="login-label">DONOR NAME:  </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.donar_name}
                        onChange={this.handledonar_name}
                    />
                    <br /><br />

                    <label className="login-label">PATIENT NAME:    </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.patient_name}
                        onChange={this.handlepatient_name}
                    />
                    <br /><br />

                    <label className="login-label">DONOR CONTACT:  </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.donar_Contact}
                        onChange={this.handledonar_Contact}
                    />
                    <br /><br />

                    <label className="login-label">DONOR ADDRESS:   </label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.donar_Address}
                        onChange={this.handledateee}
                    />
                    <br /><br />

                    <button style={{width:"100px",backgroundColor:"blue",color:"white",padding: "8px",borderRadius:"5px"}}className="submitt" type="submit" id="asd">
                        SUBMIT
                    </button>
                    <br /><br />
                </form>
                <center>
                <table border={1} className="output">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>BLOOD GROUP</th>
                        <th>PATIENT DISEASE</th>
                        <th>DONOR NAME</th>
                        <th>PATIENT NAME</th>
                        <th>DONOR CONTACT</th>
                        <th>DONOR ADDRESS</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.donationData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.patient_id}</td>
                                <td>{data.blood_group}</td>
                                <td>{data.patient_disease}</td>
                                <td>{data.donar_name}</td>
                                <td>{data.patient_name}</td>
                                <td>{data.donar_Contact}</td>
                                <td>{data.donar_Address}</td>
                                <td>
                                    <button style={{backgroundColor:"green",color:"white",borderRadius:"5px"}} onClick={() => this.handleEdit(data)}>Update</button>
                                </td>

                                <td>
                                    <button style={{backgroundColor:"red",color:"white",borderRadius:"5px"}}
                                        onClick={() => this.handleDelete(data.patient_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </center>
                <br></br><br></br><br></br><br></br>
                <p><b><u>UPDATE</u></b></p>
                <form onSubmit={this.handleUpdatee}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>BLOOD GROUP:  </label>
                    <input
                        type="text"
                        name="blood_group"
                        value={this.state.blood_group}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <label>PATIENT DISEASE:  </label>
                    <input
                        type="text"
                        name="patient_disease"
                        value={this.state.patient_disease}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <label>DONOR NAME:  </label>
                    <input
                        type="text"
                        name="donar_name"
                        value={this.state.donar_name}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <label>PATIENT NAME:  </label>
                    <input
                        type="text"
                        name="patient_name"
                        value={this.state.patient_name}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <label>DONOR CONTACT:  </label>
                    <input
                        type="text"
                        name="donar_Contact"
                        value={this.state.donar_Contact}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <label>DONOR ADDRESS:  </label>
                    <input
                        type="text"
                        name="donar_Address"
                        value={this.state.donar_Address}
                        onChange={this.handleInputChange}
                    />
                    <br /><br></br>
                    <button style={{width:"100px",backgroundColor:"blue",color:"white",padding: "8px",borderRadius:"5px",margin: "20px"}} type="submit">SAVE </button>
                    <button style={{width:"100px",backgroundColor:"blue",color:"white",padding: "8px",borderRadius:"5px",margin: "20px"}} onClick={this.handleCancel}>CANCEL</button>
                </form>
            </div>

        );
    }
}
export default Nennw;