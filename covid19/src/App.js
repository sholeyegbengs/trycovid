import React, { useEffect, useState } from 'react';
import './App.css';
import Covidata from './Components/Data'
import DataLoading from './Components/DataLoading';
function App() {
  const ListLoading = DataLoading(Covidata);
  const [appState, setAppState] = useState({
    loading: false,
    data: null,
    isClicked: false,
    showData: false
  });

  function fetchData() {
    setAppState({loading: true, showData: true})
  };

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://covid19.mathdro.id/api`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data });
        console.log(data)
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>COVID-19 DATA</h1>
      </div>
      <div className='repo-container'>
        <ListLoading onChildClick={fetchData} isLoading={appState.loading} repos={appState.repos} />
      </div>
      <div className="container">
      <div className="row">
                <div className="col-md-12">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Death</th>
                        <th scope="col">Daily Summary</th>
                        <th scope="col">Daily Time Series</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>USA</td>
                        <td>{appstate.loading===true? 'loading.....' : "data"}</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>NIGERIA</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>GHANA</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
      </div>
      <footer>
        <div className='footer'>
          Written with{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
           by Esther  Adeyi
        </div>
      </footer>
    </div>
  );
}
export default App;