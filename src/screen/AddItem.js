import AppSelect from "components/AppSelect";
import { getCities, getDistricts } from "network/CityDistrictService";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { saveData } from "network/HomeService";
import AppDialog from "components/AppDialog";

function AddItem() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleGoToShowItems = () => {
    navigate("/items");
  };

  const fetchDistricts = async (cityId) => {
    setLoading(true);
    setDistricts([]);
    try {
      const response = await getDistricts(cityId);
      if (response.success) {
        setDistricts(response.data);
        const firstDistrict = response.data[0];
        setSelectedDistrict(firstDistrict);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Error fetching districts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const response = await getCities();
        if (response.success) {
          setCities(response.data);
          const firstCity = response.data[0];
          setSelectedCity(firstCity);
          await fetchDistricts(firstCity.value);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError("Error fetching cities");
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = (option) => {
    setSelectedCity(option);
    fetchDistricts(option.value);
  };

  const handleDistrictChange = (option) => {
    setSelectedDistrict(option);
  };


  const handleSave = async() => {
    var data = {
      city:selectedCity.value,
      district:selectedDistrict.value
    };
    try {
      const response = await saveData(data);
      if (response.success) {
        setMessage(response.message);
        setOpen(true);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Error Saving Data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-item-container">
      <div className="add-data-container">
        <h2 className="add-data-title">Add Data</h2>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoToShowItems}
          endIcon={<ArticleIcon />}
          className="previous-records-button"
        >
          Previous Records
        </Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", fontSize: "bold" }}>{error}</p>}
      <div className="select-container">
        {cities.length > 0 && (
          <div>
            <label htmlFor="city-select">City</label>
            <AppSelect
              id="city-select"
              defaultValue={selectedCity}
              options={cities}
              onChange={handleCityChange}
            />
          </div>
        )}
        <br />
        {districts.length > 0 && (
          <div>
            <label htmlFor="district-select">District</label>
            <AppSelect
              id="district-select"
              options={districts}
              defaultValue={selectedDistrict}
              onChange={handleDistrictChange}
            />
          </div>
        )}
      </div>
      {districts.length > 0 && cities.length > 0 && (
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      )}
      <AppDialog openDialog={open} message={message} onClose={() => setOpen(false)} />
    </div>
  );
}

export default AddItem;
