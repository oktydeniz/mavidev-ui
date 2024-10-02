import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getRecords } from "network/HomeService";
import DataTable from "components/DataTable";

function ShowItems() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const response = await getRecords();
        if (response.success) {
          setRecords(response.data);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError("Error fetching records");
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="add-item-container">
      <div className="add-data-container">
        <h2 className="add-data-title">Previous Records</h2>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate("/item");
          }}
          endIcon={<AddIcon />}
          className="previous-records-button"
        >
          Add Record
        </Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", fontSize: "bold" }}>{error}</p>}
      <Box
        sx={{
          width: "80%",
        }}
      >
        <DataTable records={records}/>
      </Box>
      
    </div>
  );
}

export default ShowItems;
