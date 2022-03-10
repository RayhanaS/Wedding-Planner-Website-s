import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {getAllReservations} from '../../Redux/action/action'
import dateFormat from "dateformat"
function Reservations() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllReservations())
    }, [])
    let reservations = useSelector((state) => state.UserReducer.reservations)
    
  return (
    <div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Reservation Name</th>
      <th>Bride's Name</th>
      <th>Fiance's Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Date of Event</th> 
      <th>Notes</th> 
    </tr>
  </thead>
  <tbody>
      {reservations?.map((reservation,key) => 
      
        <tr key={key}>
        <td>{reservation.nameEvent}</td>
        <td>{reservation.brideName}</td>
        <td>{reservation.fianceName}</td>
        <td>{reservation.email}</td>
        <td>{reservation.phone}</td>
        <td>{dateFormat(reservation.date, "dd/mm/yyyy")}</td>
        <td>{reservation.otherDetails}</td>
      </tr>
        )}
    
  </tbody>
</Table>
    </div>
  )
}

export default Reservations