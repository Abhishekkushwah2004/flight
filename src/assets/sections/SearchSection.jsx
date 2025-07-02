import './style/searchSection.css';
import '../../App.css';
import TextField from '@mui/material/TextField';

export default function SearchSection() {
  return (
    <div className="search-section">
      <div className="container">
        <div className="search-container">
          <div className="text">
            <h3 style={{ color: "#ffff" }}>Let’s explore & travel the world</h3>
            <h2 style={{ color: "#ffff" }}>Find the best destinations and the most popular stays!</h2>
          </div>
          <div className="search-box">
            <div className="top">
              <div className="search-title">
                <h4 style={{ color: "#303030" }}>Search flights</h4>
              </div>
              <div className="radio-btn">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio" id="radioDefault1" />
                  <label className="form-check-label" htmlFor="radioDefault1">
                    Return
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio" id="radioDefault2" />
                  <label className="form-check-label" htmlFor="radioDefault2">
                    One-way
                  </label>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="row">
                <div className="col-lg-10 col-sm-12 col-md-12 input-fields">
                  <div className="col-lg-4 col-sm-12 col-md-12">
                    <TextField
                      id="departure-input"
                      defaultValue="Singapore (SIN)"
                      label="Departure"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true // keeps label visible above even when input is pre-filled
                      }}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-12">
                    <TextField
                      id="arrival-input"
                      defaultValue="Los Angeles (LA)"
                      label="Arrival"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true // keeps label visible above even when input is pre-filled
                      }}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-12">
                    <TextField
                      id="date-input"
                      label="Date"
                      type="date"
                      defaultValue="2025-06-28" // optional: default date
                      InputLabelProps={{
                        shrink: true // important: keeps label visible above the date input
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-12">
                  <div className="btn">
                    <button>Search flights</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}