import React from 'react';
import DataCard from './DataCard';

const TeacherCardList = ( {teachers} ) => {

    return (
        <div>
            {
                teachers.map((user, i)=>{
                    return <DataCard key={i} 
                    tch_id={teachers[i].tch_id} 
                    imgfile={teachers[i].imgfile} 
                    name={teachers[i].name} 
                    email={teachers[i].email} 
                    subject={teachers[i].subject}  />
                })
            }
        </div>
    )
}

export default TeacherCardList
