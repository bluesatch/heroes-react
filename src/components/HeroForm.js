const HeroForm =(props)=> {

    return(
        <main className="main" id="heroFormMain">
            <div className="container">
                <form className="hero-form form" onClick={ props.handleClick }>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="heroName" className="form-label">Hero Name</label>
                            <input 
                                id="heroName" 
                                type="text"
                                className="form-control" 
                                name="hero_name"
                                value={props.formData.hero_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                                id="firstName" 
                                type="text"
                                className="form-control" 
                                name="first_name"
                                value={props.formData.first_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                                id="lastName" 
                                type="text"
                                className="form-control" 
                                name="last_name"
                                value={props.formData.last_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="alias" className="form-label">Alias</label>
                            <input 
                                id="alias" 
                                type="text"
                                className="form-control" 
                                name="alias"
                                value={props.formData.alias}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row button-row">
                    <div className="col">
                        <button className="btn btn-dark">Add Hero</button>
                    </div>
                    </div>
                </form>
            </div>
        </main>
    )

}

export default HeroForm