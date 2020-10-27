import React, { useEffect, useState } from 'react';
import { httpClient } from '../../api';
import List from '../../components/List';

import './index.scss';

export default function Grouping() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    httpClient.get('/students').then((data) => {
      setStudents(data);
    });
  };

  const addStudent = (student) => {
    httpClient.post('/students', student).then(fetchStudents);
  };

  const onAddStudent = (name) => {
    addStudent({ name });
  };

  useEffect(fetchStudents, []);

  return (
    <div className="grouping">
      <h2>学员列表</h2>
      <List
        addable
        onAdd={onAddStudent}
        addButtonText="+ 添加学员"
        data={students}
        renderText={(student) => `${student.id}. ${student.name}`}
      />
    </div>
  );
}
