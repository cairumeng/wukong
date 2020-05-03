import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Modal.scss'

const RegisterModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>用户须知</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-success" onClick={handleClose}>
          知道了
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RegisterModal
