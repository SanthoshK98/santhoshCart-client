import React, { useEffect } from 'react'

const BucketTest = () => {
    useEffect(()=>{
        fetch('https://santhosh-cart-files-bucket.s3.ap-south-1.amazonaws.com/uploads/file.json')
    .then ((response) => {
        // console.log(response)
        return response.json()
    } )
    .then (data => {
      console.log(data)
    });
    },[])
  return (
    <div>BucketTest</div>
  )
}

export default BucketTest