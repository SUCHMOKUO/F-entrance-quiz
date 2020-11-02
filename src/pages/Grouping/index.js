import React, { useEffect, useState } from 'react';
import { httpClient } from '../../api';
import List from '../../components/List';
import Group from '../../components/Group';

import './index.scss';

export default function Grouping() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([
    { name: '1组', students: [
      { id: 1, name: '洒大地' },
      { id: 6, name: '洒大地' },
      { id: 7, name: '洒大地' },
      { id: 8, name: '洒大地' },
      { id: 9, name: '洒大地' },
      { id: 10, name: '洒大地' },
      { id: 11, name: '洒大地' },
      { id: 12, name: '洒大地' },
      { id: 13, name: '洒大地' },
      { id: 14, name: '洒大地' },
      { id: 15, name: '洒大地' },
      { id: 16, name: '洒大地' },
    ] },
    { name: '2组', students: [{ id: 2, name: '洒大地' }] },
    { name: '3组', students: [{ id: 3, name: '洒大地' }] },
    { name: '4组', students: [{ id: 4, name: '洒大地' }] },
    { name: '5组', students: [{ id: 5, name: '洒大地' }] },
  ]);

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

  const itemTextRender = (student) => `${student.id}. ${student.name}`;

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
        // TODO GTB-知识点: - 最好使用group.id作为key

        <Group key={group.name} name={group.name}>
          <List addable={false} data={group.students} renderText={itemTextRender} />
        </Group>
      ))}
      {/* // TODO GTB-知识点: - 学员列表应该单独再抽取一个组件，而且学员列表组件应该和Group组件是sibling的关系，而不是父子关系 */}
      <h2>学员列表</h2>
      <List
        addable
        onAdd={onAddStudent}
        addButtonText="+ 添加学员"
        data={students}
        renderText={itemTextRender}
      />
    </div>
  );
}
