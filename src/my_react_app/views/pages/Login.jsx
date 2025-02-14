import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-dark min-vh-100 d-flex flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
            <CCol md={8}>
                <CCardGroup>
                    <CCard className='p-4'>
                        <CCardBody>
                            <CForm>
                                <h1>Login To React First App</h1>
                                <p className='text-medium-emphasis'> Sign In To Your Account</p>

                            <CInputGroup className='mb-3'>
                                <CInputGroupText>
                                    <CIcon icon={cilUser} />
                                </CInputGroupText>

                                <CFormInput placeholder='Username' autoComplete='username' />
                            </CInputGroup>

                            <CInputGroup className='mb-4'>
                                <CInputGroupText>
                                    <CIcon icon={cilLockLocked} />
                                </CInputGroupText>

                                <CFormInput type='password' placeholder='Password' autoComplete='password' />
                            </CInputGroup>

                            <CRow>
                                <CCol xs={6}>
                                    <CButton color='primary' className='px-4'>Login</CButton>
                                </CCol>

                                <CCol xs={6} className='text-right'>
                                    <CButton color='link' className='px-0'>Forgot Password</CButton>
                                </CCol>
                            </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>

                    <CCard className='text-white bg-info py-5' style={{ width:'44%' }}>
                        <CCardBody className='text-center'>
                            <div>
                                <h2>Sign Up</h2>
                                <p>Welcome To My First App With react</p>

                                <Link to="/app-regist">
                                    <CButton color='primary' className='mt-3' active tabIndex={-1}>Regist Now!</CButton>
                                </Link>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
