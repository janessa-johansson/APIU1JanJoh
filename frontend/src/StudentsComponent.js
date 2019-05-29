//CSS & Material UI Imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//React Core Functionality
import React, { Component } from 'react'
import axios from 'axios'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1d1e20'
        }
    }
});

class StudentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            student: {
                name: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    zipcode: ''
                }
            }
        }
    }

    handleInputChange = name => event => {
        const state = {student:{}};
        state[name] = event.target.value;
        this.setState(state);
    };

    componentDidMount() {
        axios.get('http://localhost:3000/students')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addStudent = event => {
        event.preventDefault();
        const editUser = {
            student: {
                name: this.state.name,
                email: this.state.email,
                address: {
                    street: this.state.street,
                    city: this.state.city,
                    zipcode: this.state.zipcode,
                }
            }
        };
    
        const axiosConfig = {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
            }
          };
      
        axios.post('http://localhost:3000/students/', editUser, axiosConfig)
            .then(response => {
                const studentList = this.state.students.concat(response.data); //concat current state with new response
                this.setState({ students: studentList }); //setting concated list as state
            }).catch(function (error) {
                console.log(error);
            });
    };

    deleteStudent = (studentId, i) => {
        axios.delete('http://localhost:3000/students/' + studentId)
            .catch((error) => {
                console.log(error);
            });

        var array = [...this.state.students]; // make a separate copy of the array
        array.splice(i, 1); //splices student using its index
        this.setState({ students: array }); // sets array as new students state
    }

    render() {

        let students = this.state.students

        return (
            <Paper>
                <h4>BongBong - Student Roster 2019</h4>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, i) => (
                            <TableRow key={student._id}>
                                <TableCell component="th" scope="row">
                                    {student.student.name}
                                </TableCell>
                                <TableCell>{student.student.email}</TableCell>
                                <TableCell>{student.student.address.street}, {student.student.address.city}, {student.student.address.zipcode}</TableCell>
                                <TableCell><Button variant="contained" color="secondary" onClick={() => this.deleteStudent(student._id, i)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div>
                    <form onSubmit={this.addStudent}>
                        <MuiThemeProvider theme={theme}>
                            <TextField
                                margin='normal'
                                id="name"
                                label='Name'
                                variant='outlined'
                                type='text'
                                onChange={this.handleInputChange('name')}
                            />
                            <br />

                            <TextField
                                margin='normal'
                                id="email"
                                label='Email'
                                variant='outlined'
                                type='text'
                                onChange={this.handleInputChange('email')}
                            />
                            <br />

                            <TextField
                                margin='normal'
                                id="street"
                                label='Street'
                                variant='outlined'
                                type='street'
                                placeholder='street'
                                onChange={this.handleInputChange('street')}
                            />
                            <br />

                            <TextField
                                margin='normal'
                                id="city"
                                label='City'
                                variant='outlined'
                                type='city'
                                placeholder='city'
                                onChange={this.handleInputChange('city')}
                            />
                            <br />

                            <TextField
                                margin='normal'
                                id="zipcode"
                                label='Zipcode'
                                variant='outlined'
                                type='zipcode'
                                placeholder='zipcode'
                                onChange={this.handleInputChange('zipcode')}
                            />

                            <br />
                            <br />
                            <Button variant="contained" color="primary" type='submit'>Add Student</Button>
                        </MuiThemeProvider>
                    </form>
                </div>
            </Paper>
        );
    }
}


export default StudentsComponent;
