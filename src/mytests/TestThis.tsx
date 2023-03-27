import React from "react"

export type TestThisProps = {
  handleFetchData?: () => void
  data: any
}

export default function TestThis({ handleFetchData, data }: TestThisProps) {
  return (
    <div>
      TestThis<button onClick={handleFetchData}>fetch data</button>
    </div>
  )
}
