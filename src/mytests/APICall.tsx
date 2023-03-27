import React from "react"
import axios from "axios"
import { useState } from "react"
import TestThis from "./TestThis"

const APICall = () => {
  const [data, setData] = useState<any>([])

  const handleFetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.com/posts")
      setData(res.data)
      return
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Data</h1>
      <TestThis handleFetchData={handleFetchData} data={data} />
    </div>
  )
}

export default APICall
