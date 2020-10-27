import React, { useEffect, useState } from 'react';
import { httpClient } from '../../api';
import List from '../../components/List';
import Group from '../../components/Group';

import './index.scss';

export default function Grouping() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

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
      <div className="grouping-title-container">
        <h2>分组列表</h2>
        <button type="button" className="grouping-button">
          分组学员
        </button>
      </div>
      {groups.map((group) => (
        <Group key={group.name} name={group.name} data={group.data} />
      ))}

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
