import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (
    <div>
        <section id="communities">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">CategorieS</h3>
                            <h1 className="display-6 text-center mb-4">Get Into any<b> CategorY</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card card-flip h-100 shadow">
                                    <div className="card-front text-white bg-dark">
                                        <div className="card-body text-center">
                                            <i className="fa fa-gavel fa-5x float-right"></i>
                                            <h3 className="card-title">Making Decisions</h3>
                                        </div>
                                    </div>
                                    <div className="card-back text-white">
                                        <div className="card-body text-center">
                                            <p className="card-text">This is a demo site...!<br/>Go and Check iT..</p>
                                            <Link to="/categories/making_decision" className="btn btn-outline-secondary text-white">HacK_it</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card card-flip h-100 shadow">
                                    <div className="card-front text-white bg-warning">
                                        <div className="card-body text-center">
                                            <i className="fa fa-search-plus fa-5x float-right"></i>
                                            <h3 className="card-title">Thinking Laterally</h3>
                                        </div>
                                    </div>
                                    <div className="card-back text-white">
                                        <div className="card-body text-center">
                                            <p className="card-text">This is a demo site...!<br/>Go and Check iT..</p>
                                            <Link to="/categories/making_decision" className="btn btn-outline-secondary text-white">HacK_it</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card card-flip h-100 shadow">
                                    <div className="card-front text-white bg-primary">
                                        <div className="card-body text-center">
                                            <i className="fa fa-arrow-circle-right fa-5x float-right"></i>
                                            <h3 className="card-title">Influencing & Negotiating</h3>
                                        </div>
                                    </div>
                                    <div className="card-back text-white">
                                        <div className="card-body text-center">
                                            <p className="card-text">This is a demo site...!<br/>Go and Check iT..</p>
                                            <Link to="/categories/making_decision" className="btn btn-outline-secondary text-white">HacK_it</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 my-2">
                                <div className="card card-flip h-100 shadow">
                                    <div className="card-front text-white bg-dark">
                                        <div className="card-body text-center">
                                            <i className="fa fa-search fa-5x float-right"></i>
                                            <h3 className="card-title">Managing Conflict</h3>
                                        </div>
                                    </div>
                                    <div className="card-back text-white">
                                        <div className="card-body text-center">
                                            <p className="card-text">This is a demo site...!<br/>Go and Check iT..</p>
                                            <Link to="/categories/making_decision" className="btn btn-outline-secondary text-white">HacK_it</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card card-flip h-100 shadow">
                                    <div className="card-front text-white bg-danger">
                                        <div className="card-body text-center">
                                            <i className="fa fa-arrow-circle-left fa-5x float-right"></i>
                                            <h3 className="card-title">Driving Results</h3>
                                        </div>
                                    </div>
                                    <div className="card-back text-white">
                                        <div className="card-body text-center">
                                            <p className="card-text">This is a demo site...!<br/>Go and Check iT..</p>
                                            <Link to="/categories/making_decision" className="btn btn-outline-secondary text-white">HacK_it</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
            </section>
    </div>
  )
}
