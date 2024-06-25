import { useState, useEffect } from 'react';
import axios from 'axios';
import './EntityList.css';

const Details = () => {
    const [entities, setEntities] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://172.187.168.133:3000/api/v1/details'); // Replace with your backend URL
                setEntities(response.data);
            } catch (error) {
                setError('Failed to fetch entities');
                console.error('Error fetching entities:', error.message);
            }
        };
  
        fetchData();
    }, []);
  
    return (
      <div>
              <h1>Products</h1>
              {error && <p>{error}</p>}
              <table className="entity-table">
                  <thead>
                      <tr>
                          <th> Product ID</th>
                          <th>Product Name</th>
                          <th>Product Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      {entities.map(entity => (
                          <tr key={`${entity.ProdId}-${entity.ProdName}`}>
                              <td>{entity.ProdId}</td>
                              <td>{entity.ProdName}</td>
                              <td>{entity.cost}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
  
    );
}


export default Details