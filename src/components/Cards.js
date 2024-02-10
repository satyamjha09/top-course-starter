import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {

  let allCourses = [];

  const getCourses = () => {
    Object.values(courses).forEach( (courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  return (
    <div>

      {!courses ? (
        <div>
          <p> No data found</p>
        <div/>
      ):( getCourses().map( (course) => {
          <Card key={course.id} course={course}/>
        })
        )}


    </div>
  )
}

export default Cards