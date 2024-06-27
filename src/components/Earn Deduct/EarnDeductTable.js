import React from 'react'
import {useEffect, useState} from 'react'
import { JsonToTable } from 'react-json-to-table'
import { ServerConfig } from '../../serverconfiguration/serverconfig'
import { getRequest } from '../../serverconfiguration/requestcomp'
import { createSvgIcon } from '@mui/material'
import {Button, Grid} from '@mui/material'
import { EARNDEDUCT} from '../../serverconfiguration/controllers'
import { useNavigate} from 'react-router-dom'

const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

const EarnDeductTable = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [showFullData, setShowFullData] = useState(false);
    useEffect(()=>{
        getRequest(ServerConfig.url, EARNDEDUCT).then((e)=> {
            setData(e.data)
        })
    },[]);

    function handonClick(){
        navigate('/EarnDeductForm')
    }
  return (
    <div>
        <JsonToTable json={showFullData ? data : data.slice(0, 15)} />
      {!showFullData && data.length > 15 && (
        <Button onClick={() => setShowFullData(true)}>Read More</Button>
      )}
    <Grid margin={5}><Button variant='outlined' color='success' onClick={handonClick}>Add<PlusIcon/></Button></Grid>

    </div>
  )
}

export default EarnDeductTable