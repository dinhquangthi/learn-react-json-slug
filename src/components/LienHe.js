import React, { Component } from 'react';
import {
    BrowserRouter as 
    Redirect,} from "react-router-dom";
    
class LienHe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,

        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]:giatri
        });
    }
    submitForm  = (event) => {
            event.preventDefault();
       this.setState({
           isRedirect: true,
       });
    }

        getGiaTri = () => {
            var noiDung ="";
            noiDung += "Ten nhan duoc la:" + this.state.fName +"\n";
            noiDung += "Email nhan duoc la:" + this.state.fEmail +"\n";
            noiDung += "Subject nhan duoc la:" + this.state.fSubject +"\n";
            noiDung += "Message nhan duoc la:" + this.state.fMessage +"\n";
            return noiDung;
        }
    //----------------------------------------------//
    render() {
        if (this.state.isRedirect === true)
        {
            console.log(this.getGiaTri());
            return <Redirect to="/" />;
        }
      
        return (
            <div className="row">
                <div className="col-md-12 col-lg-6 col-sm-12 contact2">
                    <h1>Contact us</h1>
                    <p>If you have any question or remarks about Baguetto, fill in your details below, and we will contact you as soon as possible.</p>
                    <div className="address">
                        <p>30 Hampton Road Southampton, NY 11968</p>
                        <p>info@baguetto.com</p>
                        <p>www.baguetto.com</p>
                    </div>
                    <div className="phone">
                        <p>0 800 123 456 88</p>
                        <p>0 800 123 888 45</p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12 form-info">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input onChange={(event) => this.isChange(event)} type="text" name="fName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onChange={(event) => this.isChange(event)} type="text" name="fEmail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Subject</label>
                            <input onChange={(event) => this.isChange(event)} type="text" name="fSubject" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea onChange={(event) => this.isChange(event)} name="fMessage" className="form-control message" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <button type="submit" onClick={(event) => {this.submitForm(event)}} className="btn btn-primary submit">Submit</button>
                    </form>
                </div>
            </div>
           
        );
    }
}

export default LienHe;