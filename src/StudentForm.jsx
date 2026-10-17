import React, { useState } from 'react'

const StudentForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(
      'Name: ' + name +
      '\nEmail: ' + email +
      '\nCourse: ' + course
    )
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
        Student Registration
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border p-2"
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border p-2"
          required
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded border p-2"
          required
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="BSc">BSc</option>
          <option value="MCA">MCA</option>
        </select>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default StudentForm