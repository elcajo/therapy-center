import React from 'react';
import DataCard from './DataCard';

const TeacherCardList = ( {teachers} ) => {
    if(false){
		throw new Error('Nooooo');
	}
    return (
        <div>
            {
                teachers.map((teacher, i)=>{
                    return <DataCard key={i} 
                    tch_id={teachers[i].tch_id} 
                    imgfile={teachers[i].imgfile} 
                    name={teachers[i].name} 
                    email={teachers[i].email} 
                    subject={teachers[i].subject}  />
                })
            }
        </div>
    );
}


export default TeacherCardList
