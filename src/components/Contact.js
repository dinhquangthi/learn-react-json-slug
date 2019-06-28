import React, { Component } from 'react';
import NewItems from '../NewItems';
import dl from './dulieu.json';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="banner" />
                <div className="contact container-fluid">
                    <div className="row">
                        {
                            dl.map((value,key) => {
                                return (
                                    <NewItems
                                    key={key}
                                    id = {value.id}
                                    picture = {value.picture}
                                    title = {value.title}
                                    content = {value.content}
                                    ></NewItems>
                                )
                            }
                            )
                        }
                    </div>
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
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Subject</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control message" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-primary submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;