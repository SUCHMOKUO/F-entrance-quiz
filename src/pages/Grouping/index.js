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

  useEffect(fetchStudents, []);

  return (
    <div className="grouping">
      <h2>学员列表</h2>
      <List
        addable={false}
        data={students}
        renderText={(student) => `${student.id}. ${student.name}`}
      />
    </div>
  );
}
