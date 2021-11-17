import React, { useState } from 'react';


interface IFilterComponentProps{
    infoData: object,
    setLink: any
}

export const FilterComponent: React.FC<IFilterComponentProps> = (props) => {
    const [ link, setlink ] = useState('');
    const [ formData, setFormData ] = useState({
        initialDate: '',
        finalDate: '',
        current: ''
    });
    const [ value, setValue ] = useState([])

    function handleValueChange(event: any){
        if(event){
            let value = event.target.value
            let optSelected = event.target.option
            setFormData({...formData, [event.target.id]: value})
            console.log(formData)
        }
    }

    function handleLink(event: any){
        event.preventDefault()
        props.setLink(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${formData.initialDate}&end=${formData.finalDate}&currency=${formData.current}`)
    }
    return (
        <div>
            <form>
                <select>
                {[...Object.keys(props.infoData)].map((currentData, index) => {
                return <option key={index} value={formData.initialDate} id='initialDate'> {currentData} </option>
                    }
                )
            }
                </select>

                {` to `}

                <select>
                {[...Object.keys(props.infoData)].map((currentData, index) => {
                return <option key={index} value={formData.finalDate} id='finalDate' onChange={(event: any) => handleValueChange(event)}> {currentData} </option>
                    }
                )
            }
                </select>
                <button onClick={(event) => handleLink(event)}> 
                    Search
                </button>
            </form>
        </div>
    )
}
