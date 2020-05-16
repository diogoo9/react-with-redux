import React, { useState } from "react";
import { connect } from "react-redux";
import * as CoursesActions from "../../store/actions/course";
import { bindActionCreators } from "redux";

const SideBar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lesson.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleLesson: (module, lesson) =>
//     dispatch(CoursesActions.toggleLesson(module, lesson)),
// });

//bindCreators removeu e ficou
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CoursesActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
// o conmect retorna o stado e eu uso na prop do sideBar
// export default connect((state) => ({ modules: state.course.modules }))(SideBar);
