import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../Dashboard/Dashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';
import { setQuizzies } from '../../Redux/quizziesSlice';

export default function Dash({ showQuizzies }) {
  const dispatcher = useDispatch();
  dispatcher(setQuizzies(showQuizzies));

  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role == 'student' ? <Dashboard /> : <TeacherDashboard />  }
    </>
  )
}
