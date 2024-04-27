import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../Dashboard/Dashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';

export default function Dash() {
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role=='student' ? <Dashboard />:<TeacherDashboard />  }
    </>
  )
}
