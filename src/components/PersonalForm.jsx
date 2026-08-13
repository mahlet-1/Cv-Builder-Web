export default function PersonalForm({Personal, updatePersonal}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePersonal(name, value);
    };

    return (
        <div className="form-card">
            <h2>Personal Information</h2>
            <div className="form-container">
                <div className="form-group">
                <label className="form-label" htmlFor="name">
                    Full Name:
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={Personal.name}
                    onChange={handleChange}
                    className="form-input"
                />

                <label className="form-label" htmlFor="profession">
                    Profession:
                </label>
                <input
                    type="text"
                    name="profession"
                    placeholder="Enter your profession"
                    value={Personal.profession}
                    onChange={handleChange}
                    className="form-input"
                />
      
                <label className="form-label" htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={Personal.email}
                    onChange={handleChange}
                    className="form-input"
                />
                <label className="form-label" htmlFor="phone">
                    Phone:
                </label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={Personal.phone}
                    onChange={handleChange}
                    className="form-input"
                />
                <label className="form-label" htmlFor="location">
                    Location:
                </label>
                <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    value={Personal.location}
                    onChange={handleChange}
                    className="form-input"
                />
                <label className="form-label" htmlFor="linkedin">
                    LinkedIn:
                </label>    
                <input
                   type="url"
                   name="linkedin"
                   placeholder="Enter your LinkedIn profile link"
                   value={Personal.linkedin}
                   onChange={handleChange}
                   className="form-input"
                />
                <label className="form-label" htmlFor="github">
                    GitHub:
                </label>
                <input
                    type="url"
                    name="github"
                    placeholder="Enter your GitHub profile link"
                    value={Personal.github}
                    onChange={handleChange}
                    className="form-input"
                />
                
                </div>
            </div>
        </div>
    );
}
