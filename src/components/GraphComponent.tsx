import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'

interface IGraphComponentProps{
    arrayData: object
}

export const GraphComponent: React.FC<IGraphComponentProps> = (props) => {
    const [ loading, setLoading ] = useState(false)

    const data = {
        labels: [...Object.keys(props.arrayData).map((currentData) => currentData)],
        datasets: [
          {
            label: 'Value to Date',
            data: [...Object.values(props.arrayData).map((currentValue) => currentValue)],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const options: object = {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      };

    return (
        <div>
            {loading ? <h2> loading </h2> :   
            <>
                <div className='header'>
                <h1 className='title'>Value x Date</h1>
                </div>
                <Line data={data} options={options} />

                <form>
                    <datalist> 
                        from: {[...Object.keys(props.arrayData)].map((currentData, index) => <option key={index}> {currentData} </option>)}
                    </datalist>
                </form>
                
            </>
            }
         
        </div>
    )
}
